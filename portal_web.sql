use portal_web;


create table region(
	id int auto_increment primary key,
	nombre varchar(120) not null,
    descripcion varchar(400)
);

insert into region (nombre, descripcion) VALUES ('Arica y Parinacota', 'Región de Arica y Parinacota');

create table contact(
	id int auto_increment primary key,
	nombres varchar(120) not null,
    apellidos varchar(120) not null,
    telefono int
);