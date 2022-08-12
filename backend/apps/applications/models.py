from django import db
from django.db import models
from django.db.models.deletion import CASCADE
from apps.students.models import Student
from apps.users.models import User
from config.constants import APPLIED_BY, APPLICATIONS_STATUS, JOB_PORTAL, STATE
# Create your models here.

class Application(models.Model):
    class Meta(object):
        db_table = 'application'

    student = models.ForeignKey(
        Student, blank=False, null=False, on_delete=CASCADE, db_index=True
    )
    user = models.ForeignKey(
        User, on_delete=CASCADE, blank=True, null=True, db_index=True
    )
    applied_by = models.CharField(
        'Applied By', blank=False, null=False, choices=APPLIED_BY, max_length=50
    )
    status = models.CharField(
        'Status', blank=False, null=False, max_length=50, choices=APPLICATIONS_STATUS, default='applied'
    )
    company_name = models.CharField(
        'Company Name', blank=False, null=False, max_length=100
    )
    position = models.CharField(
        'Position', blank=False, null=False, max_length=50
    )
    job_description = models.TextField(
        'Job Description', blank=True, null=True
    )
    job_post_url = models.URLField(
        'Job Post URL', blank=True, null=True, max_length=1000
    )
    state = models.CharField(
        'State', blank=True, null=False, max_length=50
    )
    note = models.TextField(
        'Note', blank=True, null=True
    )
    job_portal = models.CharField(
        'Job Portal', blank=False, null=False, max_length=50, choices=JOB_PORTAL
    )
    created_at = models.DateTimeField(
        'Created at', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated at', blank=True, auto_now=True
    )

    updated_by = models.ForeignKey(
        User, null=True,blank=True, on_delete=models.SET_NULL, related_name="application_updated_by"
    )
    created_by = models.ForeignKey(
        User, null=True, on_delete=models.SET_NULL, related_name="application_created_by"
    )
    