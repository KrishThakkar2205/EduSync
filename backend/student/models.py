from django.db import models
import uuid
# Create your models here.
class Student(models.Model):
    def __str__(self):
        return self.name
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    rollNo = models.IntegerField()
    phoneNo = models.IntegerField()
    course = models.CharField(max_length=50)
    instituteName = models.CharField(max_length=50)
    password=models.CharField(max_length=50)
    createdby = models.UUIDField(default=uuid.uuid4)