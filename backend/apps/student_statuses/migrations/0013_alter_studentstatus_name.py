# Generated by Django 3.2.4 on 2022-08-15 05:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_statuses', '0012_rename_student_name_studentstatus_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentstatus',
            name='name',
            field=models.CharField(max_length=50, verbose_name='Name'),
        ),
    ]