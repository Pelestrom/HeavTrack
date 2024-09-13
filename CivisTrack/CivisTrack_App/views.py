# # from django.shortcuts import render, redirect
# # from django.contrib.auth import login, authenticate
# # from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
# # from django.contrib import messages
# # from .forms import CustomUserCreationForm, CustomAuthenticationForm

# # # views.py
 
# # def inscription(request):
# #     if request.method == 'POST':
# #         form = CustomUserCreationForm(request.POST)
# #         if form.is_valid():
# #             user = form.save()
# #             login(request, user)
# #             messages.success(request, 'Inscription réussie!')
# #             return redirect('accueil')  # Assurez-vous que 'accueil' est une URL valide
# #     else:
# #         form = CustomUserCreationForm()
# #     return render(request, 'inscription.html', {'form': form})


# # def connexion(request):
# #     if request.method == 'POST':
# #         form = CustomAuthenticationForm(request, data=request.POST)
# #         if form.is_valid():
# #             user = form.get_user()
# #             login(request, user)
# #             messages.success(request, 'Connexion réussie!')
# #             return redirect('accueil')  # Remplacez 'home' par le nom de votre page d'accueil
# #     else:
# #         form = CustomAuthenticationForm()
# #     return render(request, 'connexion.html', {'form': form})


 
# # def connexion(request):
# #     return render(request, 'CivisTrack_App/connexion.html', {})

# # def inscription(request):
# #     return render(request, 'CivisTrack_App/inscription.html', {})




# # def accueil(request):
# #     return render(request, 'CivisTrack_App/accueil.html')  # 'index.html' est le fichier du template d'accueil



def services1(request):
     return render(request, 'CivisTrack_App/services1.html')
 
def services2(request):
    return render(request, 'CivisTrack_App/services2.html')

def propos(request):
    return render(request, 'CivisTrack_App/propos.html')

def contact(request):
    return render(request, 'CivisTrack_App/contact.html')
# from django.shortcuts import render
# from django.contrib.auth import login
# from .forms import CustomUserCreationForm, CustomAuthenticationForm

# def register(request):
#     form = CustomUserCreationForm()
#     return render(request, 'CivisTrack_App/register.html', {'form': form})

# def login_view(request):
#     form = CustomAuthenticationForm()
#     return render(request, 'CivisTrack_App/login.html', {'form': form})

# def home(request):
#     return render(request, 'CivisTrack_App/home.html')


# def login(request):
#      return render(request, 'CivisTrack_App/login.html', {})

# def register(request):
#    return render(request, 'CivisTrack_App/register.html', {})

from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm 
from .forms import CustomUserCreationForm
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
# from django.contrib.auth.decorators import login_required

# Create your views here.
def inscription(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('connexion')
    else:
        form = CustomUserCreationForm()
    return render(request, 'CivisTrack_App/inscription.html', {'form': form})

def connexion(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('accueil')
        else:
            messages.error(request, 'Nom d\'utilisateur ou mot de passe incorrect.')
    return render(request, 'CivisTrack_App/connexion.html')


def accueil(request):
    return render(request, 'CivisTrack_App/accueil.html')

 # @login_required
 
 

import json
from django.shortcuts import render
from .models import Service, Category


def services1(request):
    services = list(Service.objects.values('id', 'name', 'description', 'horaires', 'contact', 'email', 'lat', 'lng', 'category_id'))
    categories = list(Category.objects.values('id', 'name'))
    
    services_data = json.dumps(services)
    categories_data = json.dumps(categories)

    return render(request, 'CivisTrack_App/services1.html', {
        'services_data': services_data,
        'categories_data': categories_data
    })
