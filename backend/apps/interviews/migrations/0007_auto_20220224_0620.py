# Generated by Django 3.2.4 on 2022-02-24 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('interviews', '0006_auto_20220222_0324'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interview',
            name='interview_type',
            field=models.CharField(choices=[('phone_call', 'Phone call'), ('assessment_real_time', 'Assessment Real Time'), ('assessment_submit', 'Assessment Submit'), ('video_call', 'Video Call'), ('onsite_interview', 'Onsite Interview')], max_length=50, verbose_name='Type'),
        ),
        migrations.AlterField(
            model_name='interview',
            name='status',
            field=models.CharField(choices=[('scheduling', 'Scheduling'), ('scheduled', 'Scheduled'), ('working', 'Working'), ('done', 'Done and Waiting for the Result'), ('sent_reminder', 'Sent Reminder'), ('canceled', 'Canceled Interview by Company'), ('missed', 'Missed Interview by Student'), ('got_other_offer', 'Did not Attend Because of another offer'), ('rejected', 'Rejected'), ('passed', 'Passed'), ('offered', 'Offered'), ('deleted', 'Deleted')], max_length=50, verbose_name='Status'),
        ),
    ]