# Generated by Django 3.2.7 on 2022-08-16 05:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0024_alter_student_student_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='student_id',
            field=models.IntegerField(default=None, max_length=50, unique=True, verbose_name='Student ID'),
        ),
    ]