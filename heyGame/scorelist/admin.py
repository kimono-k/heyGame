from django.contrib import admin
from .models import Kids

# Is the admin dashboard of Django

class KidsAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'birth_date', 'score', 'class_code') # needs mod

# models
admin.site.register(Kids, KidsAdmin)