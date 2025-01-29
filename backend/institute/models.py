from django.db import models
import uuid
from django.utils.crypto import get_random_string
# Create your models here.
class Institute(models.Model):
    def __str__(self):
        return self.name
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50)
    unique_id = models.UUIDField(default=uuid.uuid4, unique=True)
