# Generated by Django 3.2.1 on 2022-06-28 05:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_user_table'),
        ('applications', '0005_application_updated_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='created_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='application_created_by', to='users.user'),
        ),
        migrations.AlterField(
            model_name='application',
            name='updated_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='application_updated_by', to='users.user'),
        ),
    ]
