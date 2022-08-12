# Generated by Django 3.2.4 on 2022-07-18 05:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0011_alter_student_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='degree',
            field=models.CharField(blank=True, choices=[('high_school', 'High School Diploma'), ('undergraduate', 'Undergraduate Degree Bachelors'), ('masters', 'Graduate Degree Masters'), ('phd', 'PHD')], max_length=50, null=True, verbose_name='Degree'),
        ),
        migrations.AddField(
            model_name='student',
            name='genspark',
            field=models.CharField(blank=True, choices=[('to_be_applied', 'To Be Applied'), ('applied', 'Applied'), ('ongoing', 'Ongoing'), ('got_an_offer', 'Got an Offer'), ('rejected', 'Rejected'), ('got_paid_project', 'Got Paid Project'), ('kicked_out_after_joining', 'Kicked Out After Joining')], max_length=50, null=True, verbose_name='Genspark'),
        ),
        migrations.AddField(
            model_name='student',
            name='partner_application_explanation_status',
            field=models.CharField(choices=[('to_be_explained', 'To be Explained'), ('agreed_verbally', 'Agreed Verbally'), ('agreed_and_got_confirmation_email', 'Agreed and Got Confirmation Email'), ('one_month_normal_application', 'One Month Normal Application'), ('declined_due_to_relocation', 'Declined Due to Relocation'), ('declined_due_to_salary', 'Declined Due to Salary'), ('declined_due_to_interested_in_datascience_only', 'Declined Due to Interested in Data Science Only'), ('declined_due_to_other_reason', 'Declined Due to Other Reason')], default='not_explained', max_length=50, verbose_name='Explanation Status'),
        ),
        migrations.AddField(
            model_name='student',
            name='partner_application_note',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='Note'),
        ),
        migrations.AddField(
            model_name='student',
            name='relocation',
            field=models.CharField(blank=True, choices=[('not_ready', 'Not Ready to Relocate'), ('ready_near_place', 'Ready to relocate near place'), ('ready', 'Ready to relocate any place in US')], max_length=50, null=True, verbose_name='Relocation'),
        ),
        migrations.AddField(
            model_name='student',
            name='revature',
            field=models.CharField(blank=True, choices=[('to_be_applied', 'To Be Applied'), ('applied', 'Applied'), ('ongoing', 'Ongoing'), ('got_an_offer', 'Got an Offer'), ('rejected', 'Rejected'), ('got_paid_project', 'Got Paid Project'), ('kicked_out_after_joining', 'Kicked Out After Joining')], max_length=50, null=True, verbose_name='Revature'),
        ),
        migrations.AddField(
            model_name='student',
            name='smoothstack',
            field=models.CharField(blank=True, choices=[('to_be_applied', 'To Be Applied'), ('applied', 'Applied'), ('ongoing', 'Ongoing'), ('got_an_offer', 'Got an Offer'), ('rejected', 'Rejected'), ('got_paid_project', 'Got Paid Project'), ('kicked_out_after_joining', 'Kicked Out After Joining')], max_length=50, null=True, verbose_name='SmoothStack'),
        ),
        migrations.AlterField(
            model_name='student',
            name='partner',
            field=models.CharField(choices=[('meratas', 'Partner M'), ('leif', 'Prtner L')], db_index=True, max_length=20, verbose_name='Partner'),
        ),
    ]
