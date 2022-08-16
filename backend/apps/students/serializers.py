from unicodedata import name
from apps.student_statuses.models import StudentStatus
from .models import Student
from rest_framework import serializers
from django.utils import timezone
from apps.student_statuses.serializers import StudentStatusSerializer
from apps.users.serializers import UserOptionSerializer


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"


class StudentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"
        depth = 1


class StudentOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ["id", "name"]


class StudentUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = [
            "name",
            "student_id",
            "email",
            "phone",
            "status",
            "partner",
            "entrance_ceremony_date",
            "graduated_date",
            "prepared_by_dev_team_date",
            "application_started_date",
            "got_offer_date",
            "course",
            "gender",
            "certification_url",
            "resume_questionnaire_status",
            "application_questionnaire_status",
            "resume_url",
            "resume_status",
            "portfolio_url",
            "portfolio_status",
            "github_url",
            "github_status",
            "wakeupserver_status",
            "job_support_email",
            "job_support_email_password",
            "linkedin_id",
            "linkedin_password",
            "indeed_id",
            "indeed_password",
            "monster_id",
            "monster_password",
            "glassdoor_id",
            "glassdoor_password",
            "dice_id",
            "dice_password",
            "smart_work_id",
            "smart_work_password",
            "work_day_id",
            "work_day_password",
            "note",
            "partner_application_explanation_status",
            "revature",
            "genspark",
            "smoothstack",
            "relocation",
            "degree",
            "partner_application_note",
        ]

    def update(self, instance, validated_data):
        validated_data["updated_by"] = self.context["request"].login_user
        validated_data["updated_at"] = timezone.now()

        if (
            validated_data["status"] == "got_offer"
            and validated_data["got_offer_date"] == None
        ):
            validated_data["got_offer_date"] = timezone.now()

        if (
            validated_data["status"] == "started_application"
            and validated_data["application_started_date"] == None
        ):
            validated_data["application_started_date"] = timezone.now()

        if (
            validated_data["status"] == "perpared_by_dev_team"
            and validated_data["prepared_by_dev_team_date"] == None
        ):
            validated_data["prepared_by_dev_team_date"] = timezone.now()

        if instance.status != validated_data["status"] or instance.name != validated_data["name"] or instance.student_id != validated_data["student_id"]:

            StudentStatus.objects.create(
                student=instance,
                status=validated_data["status"],
                name=validated_data["name"],
                history_student_id=validated_data["student_id"],
                updated_by=self.context["request"].login_user,
            )

        return super().update(instance, validated_data)


class StudentStatusSerializer(serializers.ModelSerializer):
    # studentstatus = serializers.CharField("get_studentstatus")
    # student_name = StudentNameSerializer(read_only=True, many=True)
    # student = StudentOptionSerializer(read_only=True)

    updated_by = UserOptionSerializer(read_only=True)

    class Meta:
        model = StudentStatus
        fields = ("student", "name", 'history_student_id',
                  "status", "updated_by", "created_at")


class StudentOptionStatusSerializer(serializers.ModelSerializer):
    student_status_history = StudentStatusSerializer(
        source="student_status", many=True)
    # name = StudentNameSerializer(source="student_name_history")

    class Meta:
        model = Student
        fields = (
            "id",
            "student_status_history",
        )
