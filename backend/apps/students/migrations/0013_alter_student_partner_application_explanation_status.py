# Generated by Django 3.2.4 on 2022-07-18 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0012_auto_20220718_0534'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='partner_application_explanation_status',
            field=models.CharField(choices=[('to_be_explained', 'To be Explained'), ('agreed_verbally', 'Agreed Verbally'), ('agreed_and_got_confirmation_email', 'Agreed and Got Confirmation Email'), ('one_month_normal_application', 'One Month Normal Application'), ('declined_due_to_relocation', 'Declined Due to Relocation'), ('declined_due_to_salary', 'Declined Due to Salary'), ('declined_due_to_interested_in_datascience_only', 'Declined Due to Interested in Data Science Only'), ('declined_due_to_other_reason', 'Declined Due to Other Reason')], default='to_be_explained', max_length=50, verbose_name='Explanation Status'),
        ),
    ]
