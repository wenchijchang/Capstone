from django.db import models
from authentication.models import User

# Create your models here.
class Shortage(models.Model):
    date = models.DateField()
    medication_name = models.CharField(max_length=255)
    quantity = models.IntegerField(default=None, null=True)
    usage_in_last_30_days = models.IntegerField(default=None, null=True)
    remaining_day_supply = models.IntegerField(default=None, null=True)
    documented_by = models.ForeignKey(User, on_delete=models.CASCADE)
    is_identified = models.BooleanField(default=True)
    is_confirmed = models.BooleanField(default=False)
    is_resolved = models.BooleanField(default=False)