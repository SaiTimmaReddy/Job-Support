from django.db import models
from apps.students.models import Student
from apps.users.models import User
from config.constants import STATUS

# Create your models here.


class StudentStatus(models.Model):
    class Meta(object):
        db_table = "student_statuses"

    student = models.ForeignKey(
        Student,
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="related_student_statuses",
    )

    name = models.CharField(
        "Name",
        blank=False,
        null=False,
        max_length=50,
        db_index=True,
    )
    history_student_id = models.IntegerField(
        "Student ID",
        blank=True, null=True,
        max_length=50,
    )

    status = models.CharField(
        "Status",
        blank=False,
        null=False,
        max_length=50,
    )

    updated_by = models.ForeignKey(
        User, blank=False, null=False, on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(
        "create_at", blank=False, auto_now_add=True)
