
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
 
# from django.shortcuts import render
# from .models import Service, Category

# def service_list(request):
#     services = Service.objects.all()
#     categories = Category.objects.all()
#     return render(request, 'service_list.html', {'services': services, 'categories': categories})

from django.http import JsonResponse
from .models import Service

def services_list(request):
    services = Service.objects.all()
    services_data = [
        {
            'id': service.id,
            'name': service.name,
            'category': service.category,
            'description': service.description,
            'horaires': service.horaires,
            'contact': service.contact,
            'email': service.email,
            'lat': service.lat,
            'lng': service.lng
        }
        for service in services
    ]
    return JsonResponse(services_data, safe=False)



 

def services1(request):
     return render(request, 'CivisTrack_App/services1.html')
 
def services2(request):
    return render(request, 'CivisTrack_App/services2.html')

def propos(request):
    return render(request, 'CivisTrack_App/propos.html')

def contact(request):
    return render(request, 'CivisTrack_App/contact.html')
 
