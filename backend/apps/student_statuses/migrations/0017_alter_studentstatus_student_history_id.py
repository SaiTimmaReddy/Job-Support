# Generated by Django 3.2.7 on 2022-08-16 04:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_statuses', '0016_studentstatus_student_history_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentstatus',
            name='student_history_id',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='Student ID'),
        ),
    ]
