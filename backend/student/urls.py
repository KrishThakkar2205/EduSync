from django.contrib import admin
from django.urls import path
from student import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/',views.login),
    path('addstudent/',views.addStudent),
    path('getstudent/',views.getStudent),
    path('getstudents/',views.getAllStudents)
]
