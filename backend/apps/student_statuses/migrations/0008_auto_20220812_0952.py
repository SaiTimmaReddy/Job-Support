# Generated by Django 3.2.4 on 2022-08-12 09:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0022_alter_student_student_id'),
        ('student_statuses', '0007_studentstatus_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='studentstatus',
            name='student',
        ),
        migrations.AlterField(
            model_name='studentstatus',
            name='name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='related_student_statuses', to='students.student'),
        ),
    ]
