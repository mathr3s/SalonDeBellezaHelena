"""
URL configuration for salon_de_belleza project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path 
from salon_de_belleza.views import view_index 
from salon_de_belleza.views import view_formsdata 
from salon_de_belleza.views import view_home
from salon_de_belleza.views import view_productos
from salon_de_belleza.views import view_promociones
from salon_de_belleza.views import view_login
from salon_de_belleza.views import view_servicios

from django.contrib import admin
from salon_de_belleza.models.models import Contacto
from django.contrib.contenttypes.models import ContentType
from django.contrib.auth.models import Permission


admin.site.register(Contacto)
#admin.site.register(ContentType)
#admin.site.register(Permission)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', view_index.index),        
    path('forms-data/', view_formsdata.formsdata ),    
    path('forms-data/guardar', view_formsdata.guardar),           
    path('login/', view_login.login), 
    path('home/', view_home.home),
    path('logout', view_login.logout),
    path('productos/', view_productos.productos),
    path('promociones/', view_promociones.promociones),
    path('servicios/', view_servicios.servicios)
]

