from rest_framework import serializers
from .models import Shortage

class ShortageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shortage
        fields = ['id', 'date', 'medication_name', 'quantity', 'usage_in_last_30_days', 'remaining_day_supply', 'documented_by', 'is_identified', 'is_confirmed', 'is_resolved']
        depth = 1