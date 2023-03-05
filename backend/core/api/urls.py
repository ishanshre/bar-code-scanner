from rest_framework.routers import DefaultRouter

from core.api import views

router = DefaultRouter()
router.register('events', views.EventView)

urlpatterns = router.urls