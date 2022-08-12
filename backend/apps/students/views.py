from rest_framework import generics
from rest_framework import filters as search
from django_filters import rest_framework as filters
from .models import Student
from .serializers import (
    StudentOptionStatusSerializer,
    StudentSerializer,
    StudentListSerializer,
    StudentUpdateSerializer,
    StudentOptionStatusSerializer,
)
from apps.users.mixins import CustomLoginRequiredMixin
from django_filters.rest_framework import DjangoFilterBackend
from apps.student_statuses.models import StudentStatus


class StudentFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr="icontains")
    email = filters.CharFilter(lookup_expr="icontains")
    student_id = filters.CharFilter(lookup_expr="icontains")
    phone = filters.CharFilter(lookup_expr="icontains")
    status = filters.CharFilter(method="multi_string_filter")

    class Meta:
        model = Student
        fields = [
            "status",
            "partner",
            "course",
            "resume_questionnaire_status",
            "application_questionnaire_status",
            "resume_status",
            "github_status",
            "wakeupserver_status",
            "partner_application_explanation_status",
            "revature",
            "genspark",
            "smoothstack",
            "degree",
            "relocation",
        ]

    def multi_string_filter(self, queryset, name, value):
        lookup = "{name}__in".format(name=name)
        return queryset.filter(**{lookup: value.split(",")})


class StudentStatusFilter(filters.FilterSet):
    student_status_history = filters.CharFilter()

    class Meta:
        model = StudentStatus
        fields = ["student"]


class StudentList(generics.ListAPIView):
    # Get ALL Students
    queryset = Student.objects.exclude(status="deleted").order_by("-created_at")
    serializer_class = StudentListSerializer
    filter_backends = [DjangoFilterBackend, search.SearchFilter]
    filterset_class = StudentFilter
    search_fields = ["name"]


class StudentFind(CustomLoginRequiredMixin, generics.RetrieveAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentListSerializer


class StudentAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    # Get Add Students
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentUpdate(
    CustomLoginRequiredMixin, generics.RetrieveAPIView, generics.UpdateAPIView
):
    # Get Update Students
    queryset = Student.objects.all()
    serializer_class = StudentUpdateSerializer


class StudentStatusFind(generics.RetrieveAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentOptionStatusSerializer
