from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.shortage_list),
    path('<int:pk>/', views.shortage_id_list),
]