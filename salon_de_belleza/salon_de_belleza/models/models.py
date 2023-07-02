from django.db import models

class formsdata(models.Model):
    nombre = models.CharField(max_length=120)
    apellido= models.CharField(max_length=400, blank=True, null=True)
    mail = models.EmailField(max_length=400, blank=True, null=True)
    telefono= models.IntegerField(null=True , blank=True)
    fecha= models.DateField(null=True, blank=True)
    hora= models.DateField(null=True, blank= True)
    motivo = models.CharField(null=True, blank=True, max_length=400)
    
    class Meta:
        managed = True
        db_table = 'formsdata'
        
        
#class Productos(models.Model):
