# Generated by Django 3.2.4 on 2022-08-10 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_statuses', '0003_rename_student_id_studentstatus_student'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentstatus',
            name='created_at',
            field=models.DateField(auto_now_add=True, verbose_name='create_at'),
        ),
    ]