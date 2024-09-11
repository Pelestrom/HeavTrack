# from django import forms
# from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
# from django.contrib.auth.models import User

# class CustomUserCreationForm(UserCreationForm):
#     class Meta:
#         model = User
#         fields = ['username', 'email', 'password1', 'password2']
#         widgets = {
#             'password1': forms.PasswordInput(),
#             'password2': forms.PasswordInput(),
#         }
        
# class CustomAuthenticationForm(AuthenticationForm):
#     class Meta:
#         model = User
#         fields = ('username', 'password')

# from django import forms
# from django.contrib.auth.forms import UserCreationForm
# from .models import CustomUser

# class CustomUserCreationForm(UserCreationForm):
#     class Meta:
#         model = CustomUser
#         fields = ('nom_utilisateur', 'nom', 'prenom', 'email')

#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)
#         self.fields['nom_utilisateur'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Nom d’utilisateur'})
#         self.fields['nom'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Nom'})
#         self.fields['prenom'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Prénom'})
#         self.fields['email'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Email'})
#         self.fields['password1'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Mot de passe'})
#         self.fields['password2'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Confirmer le mot de passe'})

# from django.contrib.auth.forms import AuthenticationForm

# class CustomAuthenticationForm(AuthenticationForm):
#     class Meta:
#         fields = ('username', 'password')

#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)
#         self.fields['username'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Email'})
#         self.fields['password'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Mot de passe'})

from django import forms
from django.contrib.auth.forms import UserCreationForm

class CustomUserCreationForm(UserCreationForm):
    password1 = forms.CharField(
        label="Password",
        strip=False,
        widget=forms.PasswordInput(attrs={'autocomplete': 'new-password'}),
    )
    password2 = forms.CharField(
        label="Password confirmation",
        widget=forms.PasswordInput(attrs={'autocomplete': 'new-password'}),
        strip=False,
    )

    class Meta(UserCreationForm.Meta):
        fields = UserCreationForm.Meta.fields + ("password1", "password2")
