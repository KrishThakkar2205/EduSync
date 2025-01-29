# Generated by Django 4.2.16 on 2024-09-25 07:30

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('institute', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='institute',
            name='unique_id',
            field=models.UUIDField(default=uuid.uuid4, unique=True),
        ),
    ]
