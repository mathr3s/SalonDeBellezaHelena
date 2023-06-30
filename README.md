# AYUDA PERRUNO DJANGO

Verificar si esta instalado python y pip.

## VERIFICACIÓN PYTHON Y PIP

**COMANDO VERIFICACIÓN PYTHON**
```shell
python --version
```

**RESULTADO**
```shell
CETECOM@LC320500 MINGW64 ~/Downloads/APP_DJANGO
$ python --version
Python 3.11.1

```

**COMANDO VERIFICACIÓN PIP**
```shell
pip --version
```

**RESULTADO**
```shell
CETECOM@LC320500 MINGW64 ~/Downloads/APP_DJANGO
$ pip --version
pip 23.1 from C:\Users\CETECOM\AppData\Local\Programs\Python\Python311\Lib\sitsite-packages\pip (python 3.11)
```

## CONFIGURACIÓN ENTORNO VIRTUAL

Para configurar un entorno virtual en python debemos ejecutar el siguiente comando.

**COMANDO CREACIÓN ENTORNO VIRTUAL**
```shell
virtualenv env
```

Nota: env representa el nombre del entorno virtual. Por lo general se utiliza como nombres env, dev, development, test, etc.

**COMANDO PARA ACTIVAR ENTORNO VIRTUAL (WINDOWS con GitBash)**
```shell
. env/Scripts/activate
```

**RESULTADO**
```shell
(env) 
CETECOM@LC320500 MINGW64 ~/Downloads/APP_DJANGO
$ 
```

**COMANDO PARA ACTIVAR ENTORNO VIRTUAL (WINDOWS con GitBash)**
```shell
source env/bin/activate
```

**RESULTADO**
```shell
(env) 
/home/ccarreno/Documents/APP_DJANGO
```

## CREACIÓN PROYECTO DJANDO

Para crear un proyecto Django debemos instalar la librería Django.

**COMANDO PARA INSTALAR LIBRERIA DJANGO**

```
pip install Django
```

**RESULTADO**
```shell
CETECOM@LC320500 MINGW64 ~/Downloads/APP_DJANGO
$ pip install Django
Collecting Django
  Using cached Django-4.2.1-py3-none-any.whl (8.0 MB)
Collecting asgiref<4,>=3.6.0 (from Django)
  Using cached asgiref-3.6.0-py3-none-any.whl (23 kB)
Collecting sqlparse>=0.3.1 (from Django)
  Using cached sqlparse-0.4.4-py3-none-any.whl (41 kB)
Collecting tzdata (from Django)
  Using cached tzdata-2023.3-py2.py3-none-any.whl (341 kB)
Installing collected packages: tzdata, sqlparse, asgiref, Django
Successfully installed Django-4.2.1 asgiref-3.6.0 sqlparse-0.4.4 tzdata-2023.3
(env)
```
Una vez instalada las librerias de Django, ejecutaremos el siguiente comando para crea nuestro proyecto.

**COMANDO PARA CREAR ARCHIVO CON LIBRERIAS**
```shell
pip freeze > requirements.txt
```

**COMANDO PARA INSTALAR DEPENCIAS/LIBRERIAS**
```shell
pip install -r requirements.txt
```

**COMANDO PARA CREAR PROYECTO DJANGO (ayuda_perruna) CON LA APLICACIÓN (ayuda_perruna)**
```
django-admin startproject ayuda_perruna
```

Para desplegar la aplicación por defecto (sin cambios), ejecutaremos el comando dentro de la carpeta ayuda_perruna.

```shell
cd ayuda_perruna
```

```shell
python manage.py runserver 
```

```shell
python manage.py runserver 9000
```

```shell
python manage.py runserver 127.0.0.1:9000
```

```shell
python manage.py runserver 0.0.0.0:9000
```

# COMANDO PARA CREAR ARCHIVOS A MIGRAR

```shell
python manage.py makemigrations
```

# COMANDO PARA CREAR SUPER USUARIO

```shell
python manage.py createsuperuser
```

# COMANDO PARA CREAR USUARIO

```shell
python manage.py createuser
```
