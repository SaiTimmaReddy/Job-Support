from django.shortcuts import render
from rest_framework import serializers
from .models import StudentStatus
from rest_framework import generics
from .serializers import StudentStatusSerializer

from django_filters.rest_framework import DjangoFilterBackend
from django_filters import rest_framework as filters
from apps.students.models import Student

# Create your views here.


class StudentStatusFilter(filters.FilterSet):
    student_id = filters.CharFilter()

    class Meta:
        model = StudentStatus
        fields = ["student"]


class StudentStatusList(generics.ListAPIView):
    queryset = StudentStatus.objects.filter().order_by("-created_at")
    serializer_class = StudentStatusSerializer
    filter_backends = [DjangoFilterBackend]
    # filterset_fields = ["student"]
    filter_class = StudentStatusFilter

    # def get_queryset(self):
    #     queryset = StudentStatus.objects.filter(
    #         "student__id__exact = request_id"
    #     ).order_by("-created_at")


# class StudentStatusView(generics.ListAPIView):
#     queryset = StudentStatus.objects.all()
#     serializer_class = StudentStatusSerializer


# class StudentStatusAdd(generics.CreateAPIView):
#     queryset = StudentStatus.objects.all()
#     serializer_class = StudentStatusUpdateSerializer


# class StudentNameView(generics.ListAPIView):
#     serializer_class = StudentNameSerializer
#     queryset = Student.objects.all()
