from django.shortcuts import render

def Carritocompra(request):
    return render ( request, 'CarritoCompras.html', {})