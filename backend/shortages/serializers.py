from rest_framework import serializers
from .models import Shortage

class ShortageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shortage
        fields = ['id', 'medication_name', 'quantity', 'usage_in_last_30_days', 'remaining_day_supply', 'documented_by', 'is_identified', 'is_confirmed', 'is_resolved', 'user_id']
        depth = 1
        user_id = serializers.IntegerField(write_only=True)