from django.db import models
from django.utils import timezone

class Kids(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    birth_date = models.CharField(max_length = 255)
    score = models.IntegerField()
    class_code = models.CharField(max_length = 255)

    def __str__(self):
        return self.first_name