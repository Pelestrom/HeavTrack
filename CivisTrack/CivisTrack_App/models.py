from django.db import models

from django.contrib.auth.models import AbstractUser
 

class CustomUser(AbstractUser):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    
    # Le mot de passe et sa confirmation ne sont pas stockés en base de données,
    # ils sont gérés par le formulaire d'inscription.
