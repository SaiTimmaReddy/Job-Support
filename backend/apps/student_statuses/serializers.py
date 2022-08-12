from rest_framework import serializers
from .models import StudentStatus
from apps.students.models import Student
from apps.users.models import User


# from apps.students.serializers import StudentStatusHistory


# class StudentNameSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Student
#         fields = "__all__"
class StudentOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ("id", "name")


class UserOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "user_name")


class StudentStatusSerializer(serializers.ModelSerializer):
    # studentstatus = serializers.CharField("get_studentstatus")
    # student_name = StudentNameSerializer(read_only=True, many=True)
    student = StudentOptionSerializer(read_only=True)
    created_by = UserOptionSerializer(read_only=True)

    class Meta:
        model = StudentStatus
        fields = (
            "student",
            "status",
            "updated_by",
            "created_at",
        )

    # def get_studentstatus(self, obj):
    #     return obj.studentstatus.all().values("name")
