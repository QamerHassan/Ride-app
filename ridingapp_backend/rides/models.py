from django.db import models
from accounts.models import User

class Ride(models.Model):
    RIDE_TYPES = (
        ('Regular', 'Regular'),
        ('Premium', 'Premium'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    origin = models.CharField(max_length=255)
    destination = models.CharField(max_length=255)
    departure_time = models.DateTimeField()
    available_seats = models.PositiveIntegerField()
    ride_type = models.CharField(max_length=20, choices=RIDE_TYPES, default='Regular')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.ride_type} - {self.departure_time}"
