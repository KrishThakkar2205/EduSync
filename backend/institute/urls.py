from django.contrib import admin
from django.urls import path, include
from institute import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('addInstitute/',views.create_institute),
    path('login/',views.login_institute),
    path('profile/',views.profile),
]
