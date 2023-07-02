from django.shortcuts import render 

#create your views here.


def home(request):
    return render(request, 'home.html',{'active_home': 'active'})


