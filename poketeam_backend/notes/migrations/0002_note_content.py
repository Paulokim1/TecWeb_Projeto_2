# Generated by Django 3.2.9 on 2021-11-09 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='content',
            field=models.TextField(default='DEFAULT VALUE'),
        ),
    ]