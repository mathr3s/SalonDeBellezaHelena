from django.shortcuts import render

def galeria(request):
    return render(request, 'galeria.html', {'active_galeria': 'active'})