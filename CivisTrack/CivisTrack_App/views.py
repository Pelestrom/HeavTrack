from django.shortcuts import render, redirect
from django.http import JsonResponse
from .forms import CustomUserCreationForm

# Create your views here.
def accueil(request):
    return render(request, 'CivisTrack_App/accueil.html')  # 'index.html' est le fichier du template d'accueil

def inscription(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'message': 'Formulaire invalide'})
    else:
        form = CustomUserCreationForm()
    return render(request, 'CivisTrack_App/inscription.html', {'form': form})


def connexion(request):
    return render(request, 'CivisTrack_App/connexion.html')

def services1(request):
    return render(request, 'CivisTrack_App/services1.html')

def services2(request):
    return render(request, 'CivisTrack_App/services2.html')

def propos(request):
    return render(request, 'CivisTrack_App/propos.html')

def contact(request):
    return render(request, 'CivisTrack_App/contact.html')
