from django.db import models
import uuid
# Create your models here.
class course(models.Model):
    name = models.CharField(max_length=50)
    createdby = models.UUIDField(default=uuid.uuid4)
    