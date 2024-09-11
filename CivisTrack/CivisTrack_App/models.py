# # from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
# # from django.utils.translation import gettext_lazy as _
# # from django.db import models

# # class CustomUserManager(BaseUserManager):
# #     def create_user(self, email, password=None, **extra_fields):
# #         """
# #         Crée et sauvegarde un utilisateur avec l'email et le mot de passe donnés.
# #         """
# #         if not email:
# #             raise ValueError(_('L\'adresse email doit être fournie'))
# #         email = self.normalize_email(email)
# #         user = self.model(email=email, **extra_fields)
# #         user.set_password(password)
# #         user.save(using=self._db)
# #         return user

# #     def create_superuser(self, email, password=None, **extra_fields):
# #         """
# #         Crée et sauvegarde un superutilisateur.
# #         """
# #         extra_fields.setdefault('is_staff', True)
# #         extra_fields.setdefault('is_superuser', True)

# #         return self.create_user(email, password, **extra_fields)

# # class CustomUser(AbstractBaseUser):
# #     email = models.EmailField(_('email address'), unique=True)
# #     username = models.CharField(max_length=150, unique=False, blank=True, null=True)
# #     nom = models.CharField(max_length=100, blank=True, null=True)
# #     prenom = models.CharField(max_length=100, blank=True, null=True)
# #     is_active = models.BooleanField(default=True)
# #     is_staff = models.BooleanField(default=False)

# #     USERNAME_FIELD = 'email'
# #     REQUIRED_FIELDS = []

# #     objects = CustomUserManager()

# #     def __str__(self):
# #         return self.email

# from django.db import models
# from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# class CustomUserManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError('The Email field must be set')
#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)

#         return self.create_user(email, password, **extra_fields)

# class CustomUser(AbstractBaseUser):
#     nom_utilisateur = models.CharField(max_length=150, unique=True)
#     nom = models.CharField(max_length=30)
#     prenom = models.CharField(max_length=30)
#     email = models.EmailField(unique=True)
#     mot_de_passe = models.CharField(max_length=128)  # Le mot de passe sera géré par Django

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['nom_utilisateur', 'nom', 'prenom']

#     objects = CustomUserManager()

#     def __str__(self):
#         return self.email

from django.db import models

class Utilisateur(models.Model):
    nom = models.CharField(max_length=50)  
    mot_de_passe = models.CharField(max_length=50)

