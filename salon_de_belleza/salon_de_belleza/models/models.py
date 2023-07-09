from django.db import models

class Contacto(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=120)
    apellido= models.CharField(max_length=400, blank=True, null=True)
    mail = models.EmailField(max_length=400, blank=True, null=True)
    telefono= models.IntegerField(null=True , blank=True)
    fecha= models.DateField(null=True, blank=True)
    hora= models.TimeField(null=True, blank= True)
    motivo = models.TextField(null=True, blank=True, max_length=400)
    
    class Meta:
        managed = True
        db_table = 'Contacto'
 #       fields = '__all__'
#        widgets = {'fecha': models.DateInput(attrs={'type': 'date' })}
        
        
#class Productos(models.Model):
