# Generated by Django 4.0.4 on 2022-06-16 04:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0005_auto_20220222_0324'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='student_id',
            field=models.CharField(db_index=True, max_length=100, verbose_name='Student ID'),
        ),
    ]