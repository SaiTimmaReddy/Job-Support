# Generated by Django 3.2.1 on 2022-07-14 04:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0009_auto_20220711_0830'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='github_status',
            field=models.CharField(choices=[('not_started', 'Not Started Creating'), ('on_progress', 'On Progress'), ('done', 'Done by Developer Team'), ('correction_required', 'Corrections Required'), ('correction_done', 'Corrections Done'), ('reviewed', 'Reviewed by Job Support')], default='not_started', max_length=50, verbose_name='Github Status'),
        ),
        migrations.AlterField(
            model_name='student',
            name='portfolio_status',
            field=models.CharField(choices=[('not_started', 'Not Started Creating'), ('on_progress', 'On Progress'), ('done', 'Done by Developer Team'), ('correction_required', 'Corrections Required'), ('correction_done', 'Corrections Done'), ('reviewed', 'Reviewed by Job Support')], default='not_started', max_length=50, verbose_name='Portfolio Status'),
        ),
        migrations.AlterField(
            model_name='student',
            name='resume_status',
            field=models.CharField(choices=[('not_started', 'Not Started Creating'), ('on_progress', 'On Progress'), ('done', 'Done by Developer Team'), ('correction_required', 'Corrections Required'), ('correction_done', 'Corrections Done'), ('reviewed', 'Reviewed by Job Support')], default='not_started', max_length=50, verbose_name='Resume Status'),
        ),
        migrations.AlterField(
            model_name='student',
            name='status',
            field=models.CharField(choices=[('graduated', 'Graduated'), ('preparing', 'Preaparing'), ('perpared_by_dev_team', 'Prepared by Developer Team'), ('started_application', 'Started Application'), ('pause_application', 'Pause Application'), ('got_offer', 'Got an Offer'), ('joined', 'Joined'), ('activated_payment', 'Activated Payment'), ('failed', 'Failed to Get a Job'), ('deleted', 'Deleted'), ('reapply', 'Reapply')], db_index=True, default='preparing', max_length=20, verbose_name='Status'),
        ),
    ]
