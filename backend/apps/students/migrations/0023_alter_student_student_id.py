# Generated by Django 4.1 on 2022-08-16 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0022_alter_student_student_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='student_id',
            field=models.CharField(default=None, max_length=50, unique=True, verbose_name='Student ID'),
        ),
    ]