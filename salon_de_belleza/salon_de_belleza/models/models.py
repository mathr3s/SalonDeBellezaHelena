from django.db import models

class Contacto(models.Model):
    nombre = models.CharField(max_length=120)
    apellido= models.CharField(max_length=400, blank=True, null=True)
    mail = models.EmailField(max_length=400, blank=True, null=True)
    telefono= models.IntegerField(null=True , blanck=True)
    class Meta:
        managed = True
        db_table = 'contacto'
        
class Contact (models.Model):
    nombres = models.CharField(max_length=120)
    apellido = models.CharField(max_length=120)
    mail = models.EmailField(max_length=400)
    telefono = models.IntegerField()

    class Meta:
        managed = True
        db_table = 'contact' 
        
#class Productos(models.Model):
