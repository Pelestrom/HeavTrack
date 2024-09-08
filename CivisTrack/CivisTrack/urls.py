from django.contrib import admin
from django.urls import path
from CivisTrack_App import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.acceuil, name='acceuil'),
    path('acceuil/', views.acceuil, name='acceuil'),
    path('inscription/', views.inscription, name='inscription'),
    path('connexion/', views.connexion, name='connexion'),
    path('services1/', views.services1, name='services1'),
    path('services2/', views.services2, name='services2'),
    path('propos/', views.propos, name='propos'),
    path('contact/', views.contact, name='contact'),
]
