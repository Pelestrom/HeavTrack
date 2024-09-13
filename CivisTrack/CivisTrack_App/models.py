 

from django.db import models

class Utilisateur(models.Model):
    nom = models.CharField(max_length=50)  
    mot_de_passe = models.CharField(max_length=50)

 

# class Category(models.Model):
#     name = models.CharField(max_length=100, unique=True)
    
#     def __str__(self):
#         return self.name

# class Service(models.Model):
#     name = models.CharField(max_length=100)
#     category = models.ForeignKey(Category, on_delete=models.CASCADE)
#     description = models.TextField()
#     horaires = models.CharField(max_length=100)
#     contact = models.CharField(max_length=20)
#     email = models.EmailField()
#     lat = models.FloatField()
#     lng = models.FloatField()
    
#     def __str__(self):
#         return self.name



from django.db import models

class Service(models.Model):
    CATEGORY_CHOICES = [
        ('sante', 'Santé'),
        ('securite', 'Sécurité'),
        ('education', 'Éducation'),
        ('administration', 'Administration'),
        ('restaurants', 'Restaurants'),
        ('loisirs', 'Loisirs'),
        ('centres-commerciaux', 'Centres Commerciaux'),
        ('hotels', 'Hôtels'),
        ('banques', 'Banques'),
    ]

    name = models.CharField(max_length=255)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    description = models.TextField()
    horaires = models.CharField(max_length=100)
    contact = models.CharField(max_length=100)
    email = models.EmailField()
    lat = models.FloatField()  # Latitude for map
    lng = models.FloatField()  # Longitude for map

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name