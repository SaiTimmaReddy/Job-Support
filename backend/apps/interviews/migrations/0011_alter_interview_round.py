# Generated by Django 4.0.4 on 2022-06-21 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('interviews', '0010_alter_interview_round'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interview',
            name='round',
            field=models.IntegerField(verbose_name='Round'),
        ),
    ]
