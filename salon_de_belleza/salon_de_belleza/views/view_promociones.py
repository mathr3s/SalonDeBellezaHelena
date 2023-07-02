from django.shortcuts import render

def promociones(request):
    return render(request, 'promociones.html', {})