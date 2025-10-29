from django.contrib import admin
from .models import Ride

class RideAdmin(admin.ModelAdmin):
    list_display = ('user', 'origin', 'destination', 'departure_time', 'available_seats', 'ride_type')
    list_filter = ('ride_type', 'departure_time')
    search_fields = ('user__username', 'origin', 'destination')

admin.site.register(Ride, RideAdmin)
