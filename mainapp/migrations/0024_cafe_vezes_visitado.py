# Generated by Django 5.0.6 on 2024-05-13 13:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0023_franquia'),
    ]

    operations = [
        migrations.AddField(
            model_name='cafe',
            name='vezes_visitado',
            field=models.IntegerField(default=0),
        ),
    ]
