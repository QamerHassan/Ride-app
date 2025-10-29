from django.urls import path
from .views import RideView

urlpatterns = [
    path('rides/', RideView.as_view(), name='ride-list-create'),
]
