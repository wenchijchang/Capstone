from django.db import models
from users.models import User

# Create your models here.
class Shortage(models.Model):
    date = models.DateField()
    medication_name = models.CharField(max_length=255)
    quantity: models.IntegerField()
    usage_in_last_30_days = models.IntegerField()
    remaining_day_supply = models.IntegerField()
    documented_by = models.ForeignKey(User, on_delete=models.CASCADE)
    is_identified = models.BooleanField(default='Yes')
    is_confirmed = models.BooleanField(default='No')
    is_resolved = models.BooleanField(default='No')