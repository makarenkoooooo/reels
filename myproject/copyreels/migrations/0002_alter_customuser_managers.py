# Generated by Django 5.1.1 on 2024-09-13 11:53

import copyreels.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('copyreels', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='customuser',
            managers=[
                ('objects', copyreels.models.CustomUserManager()),
            ],
        ),
    ]
