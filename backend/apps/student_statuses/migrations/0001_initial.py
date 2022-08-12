# Generated by Django 3.2.4 on 2022-07-26 10:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0002_alter_user_table'),
        ('students', '0016_alter_student_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(max_length=50, verbose_name='Status')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='create_at')),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='related_student_statuses', to='students.student')),
            ],
            options={
                'db_table': 'student_statuses',
            },
        ),
    ]
