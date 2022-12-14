# Generated by Django 3.2.4 on 2022-02-03 07:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0003_student_student_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='partner',
            field=models.CharField(choices=[('meratas', 'Meratas'), ('leif', 'Leif')], db_index=True, default='', max_length=20, verbose_name='Partner'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='student',
            name='status',
            field=models.CharField(choices=[('graduated', 'Graduated'), ('preparing', 'Preaparing'), ('started_application', 'Started Application'), ('pause_application', 'Pause Application'), ('got_offer', 'Got an Offer'), ('joined', 'Joined'), ('activated_payment', 'Activated Payment'), ('failed', 'Failed to Get a Job'), ('deleted', 'Deleted')], db_index=True, default='preparing', max_length=20, verbose_name='Status'),
        ),
    ]
