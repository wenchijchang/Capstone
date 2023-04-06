from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .serializers import ShortageSerializer
from . models import Shortage
from users.serializers import UserSerializer
from users.models import User

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated]) 
def shortage_list(request):
    shortages = Shortage.objects.all()
    users = User.objects.all()
    user_param = request.query_params.get('user')
    
    
    if request.method == 'GET':
        if user_param:
            shortages = Shortage.objects.filter(user__type=user_param)
            serializer = ShortageSerializer(shortages, many=True)
            return Response(serializer.data)
        else:
            serializer = ShortageSerializer(shortages, many=True)
            userserializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)   
        
    elif request.method == 'POST':
        serializer = ShortageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(documented_by=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def shortage_id_list(request, pk):
    shortage = get_object_or_404(Shortage, pk=pk)
    if request.method == 'GET':
        serializer = ShortageSerializer(shortage)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ShortageSerializer(shortage, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(documented_by=request.user)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        shortage.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)