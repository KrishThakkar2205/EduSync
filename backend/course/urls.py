from django.contrib import admin
from django.urls import path
from course import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('getcourse/',views.get_course),
    path('addcourse/',views.add_course)
]
