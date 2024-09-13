
# Register your models here.
from django.contrib import admin
from .models import Service

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'description', 'contact', 'email', 'lat', 'lng')
    list_filter = ('category',)
