from django.shortcuts import render

# Create your views here.
def acceuil(request):
    return render(request, 'CivisTrack_App/acceuil.html')  # 'index.html' est le fichier du template d'accueil

def inscription(request):
    return render(request, 'CivisTrack_App/inscription.html') 

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