# Generated by Django 3.2.9 on 2022-06-22 15:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_user_table'),
        ('interviews', '0011_alter_interview_round'),
    ]

    operations = [
        migrations.AddField(
            model_name='interview',
            name='created_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='created_by', to='users.user'),
        ),
    ]
