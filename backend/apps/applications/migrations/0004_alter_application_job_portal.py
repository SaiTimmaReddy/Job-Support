# Generated by Django 3.2.1 on 2022-02-17 08:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0003_auto_20220201_1048'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='job_portal',
            field=models.CharField(choices=[('linkedin', 'LinkedIn'), ('indeed', 'Indeed'), ('monster', 'Monster'), ('glassdoor', 'Glassdoor'), ('work_day', 'Work Day'), ('smart_work', 'Smart Work'), ('dice', 'Dice'), ('other', 'Other')], max_length=50, verbose_name='Job Portal'),
        ),
    ]
