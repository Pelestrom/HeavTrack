from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser  # Utiliser le modèle personnalisé

class CustomUserCreationForm(UserCreationForm):
    nom = forms.CharField(max_length=100)  # Ajout du champ nom
    prenom = forms.CharField(max_length=100)
    email = forms.EmailField(required=True)

    class Meta:
        model = CustomUser
        fields = ('username', 'nom', 'prenom', 'email', 'password1', 'password2')  # Ajout du champ nom ici aussi

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user



