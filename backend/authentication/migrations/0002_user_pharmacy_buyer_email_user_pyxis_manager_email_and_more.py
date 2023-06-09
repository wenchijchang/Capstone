# Generated by Django 4.2 on 2023-04-07 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='pharmacy_buyer_email',
            field=models.EmailField(default='buyer@buyer.com', max_length=255),
        ),
        migrations.AddField(
            model_name='user',
            name='pyxis_manager_email',
            field=models.EmailField(default='pyxis@pyxis.com', max_length=255),
        ),
        migrations.AddField(
            model_name='user',
            name='superviser_email',
            field=models.EmailField(default='superviser@superviser.com', max_length=255),
        ),
    ]
