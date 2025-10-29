from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Ride
from .serializers import RideSerializer

class RideView(APIView):
    def get(self, request):
        """List all rides"""
        rides = Ride.objects.all().order_by('-departure_time')
        serializer = RideSerializer(rides, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """Create a new ride"""
        serializer = RideSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
