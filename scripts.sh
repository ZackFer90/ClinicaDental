#############################################################

# crear la base de datos
sequelize db:create


# crear modelo Roles
sequelize model:generate --name Roles --attributes 'rol:string'

# crear modelo Especializacion
sequelize model:generate --name Especializacion --attributes 'especialidad:string'

#crear modelo Usuarios
sequelize model:generate --name Usuarios --attributes 'nombre:string,apellidos:string,fecha_nacimiento:date,email:string,contrasena:string,telefono:integer,direccion:string,id_rol:integer'

#crear modelo Pacientes
sequelize model:generate --name Pacientes --attributes 'id_pacientes:integer'

# crear modelo Doctores
sequelize model:generate --name Doctores --attributes 'id_doctores:integer'

# crear modelo Citas
sequelize model:generate --name Citas --attributes 'id_pacientes:integer, id_doctores:integer, fecha:date'

# las tablas intermedias en una relacion N:N no llevan modelo, pero si llevan migracion
doctores_especializacion
#############################################################

# ejecutar migracion
sequelize db:migrate
sequelize db:migrate --to 01-create-student.js

# revertir migracion
sequelize db:migrate:undo
sequelize db:migrate:undo:all

# crear seed
sequelize seed:generate --name seed-cita
sequelize seed:generate --name seed-doctores
sequelize seed:generate --name seed-especializacion
sequelize seed:generate --name seed-pacientes
sequelize seed:generate --name seed-roles
sequelize seed:generate --name seed-usuarios
sequelize seed:generate --name seed-doctor_especializacion

# ejecutar seed
sequelize db:seed:all
sequelize db:seed --seed 01-seed-student.js