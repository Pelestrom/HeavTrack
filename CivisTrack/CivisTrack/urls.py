from django.contrib import admin
from django.urls import path
from CivisTrack_App import views
# from CivisTrack_App.views import services_list

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.accueil, name='accueil'),
    path('accueil/', views.accueil, name='accueil'),
    path('inscription/', views.inscription, name='inscription'),
    path('connexion/', views.connexion, name='connexion'),
    path('services1/', views.services1, name='services1'),
    path('accueil2/', views.accueil2, name='accueil2'),
    path('propos/', views.propos, name='propos'),
    path('contact/', views.contact, name='contact'),
    ]

 