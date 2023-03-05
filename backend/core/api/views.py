from rest_framework import viewsets

from core.models import Event
from core.api.serializers import EventSerializer

class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    