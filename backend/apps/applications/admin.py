from django.contrib import admin
from .models import Application

# Register your models here.

@admin.register(Application)
class ApplicationModel(admin.ModelAdmin):
    fields = ['student', 'user', 'applied_by', 'status',
              'company_name', 'position', 'job_description', 'job_post_url', 'state', 'note', 'job_portal']
    list_filter = []
    list_display = ['student', 'user', 'applied_by', 'status',
              'company_name', 'position', 'state', 'job_portal']
    search_fields = fields
