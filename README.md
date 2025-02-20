# API Restaurante Gustov

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Descripción

API Backend para el sistema de gestión del Restaurante Gustov, desarrollado con NestJS.

## Requisitos Previos

- Node.js versión 18.18.0
- NestJS versión 10.4.5
- SQL Server (Base de datos)

## Tecnologías Utilizadas

- NestJS como framework de backend
- TypeORM para la gestión de base de datos
- Swagger para documentación de API
- SQL Server como base de datos

## Configuración del Proyecto

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=1433
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=GustovRestaurant    # Define aquí el nombre que desees para tu base de datos
DB_MASTER=master
```

**Nota importante**: Solo necesitas definir el nombre de la base de datos en `DB_NAME`. Al ejecutar `npm run start:dev`, el sistema automáticamente:
- Creará la base de datos con el nombre especificado si no existe
- Creará todas las tablas necesarias
- Insertará datos de prueba en las siguientes tablas:
  - Platos (Dishes): Insertará platos de ejemplo
  - Otros datos básicos necesarios para probar el sistema

## Ejecución del Proyecto

```bash
# Modo desarrollo
npm run start:dev

# Modo producción
npm run start:prod
```

## Documentación API (Swagger)

La documentación de la API está disponible en la ruta `/docs` una vez que el proyecto esté en ejecución.

## Funcionalidades Principales

### 1. Gestión de Platos (Dishes)
- Crear, actualizar y eliminar platos
- Listar todos los platos disponibles
- Buscar platos por ID
- Gestión de imágenes de platos

### 2. Gestión de Ventas (Sales)
- Registro de nuevas ventas
- Consulta de ventas realizadas
- Reporte diario de ventas
- Detalle de ventas por usuario

### 3. Gestión de Usuarios (Users)
- Registro de usuarios
- Actualización de información de usuarios
- Gestión de roles y permisos
- Activación/desactivación de usuarios

### 4. Detalles de Venta (Sale Details)
- Registro detallado de productos por venta
- Consulta de detalles de venta
- Cálculo de subtotales y totales

### 5. Gestión de Imágenes (Upload Images)
- Carga y actualización de imágenes de platos
- Almacenamiento en base64
- Asociación de imágenes con platos

## Estructura del Proyecto

El proyecto está organizado en módulos:
- Dish: Gestión de platos
- Sale: Gestión de ventas
- SaleDetail: Detalles de ventas
- User: Gestión de usuarios
- UploadImage: Gestión de imágenes

## Base de Datos

La aplicación utiliza SQL Server como base de datos y TypeORM como ORM. Al iniciar el proyecto con `npm run start:dev`:

1. **Creación Automática**: 
   - El sistema verifica si existe la base de datos especificada en `DB_NAME`
   - Si no existe, la crea automáticamente
   - Crea todas las tablas necesarias basadas en las entidades definidas

2. **Datos de Prueba**:
   - Se insertan automáticamente platos de ejemplo en la tabla Dishes
   - Estos datos incluyen nombres, precios y descripciones de platos típicos
   - Te permite probar inmediatamente las funcionalidades del sistema

3. **Sincronización**:
   - Las tablas se sincronizan automáticamente con las entidades
   - No necesitas ejecutar migraciones ni scripts SQL manualmente

## Seguridad

- Validación de datos de entrada
- Manejo de errores HTTP
- Relaciones entre entidades protegidas

## Notas Adicionales

- Asegúrese de tener SQL Server en ejecución antes de iniciar el proyecto
- La documentación detallada de los endpoints está disponible en Swagger
- El proyecto utiliza TypeScript para un desarrollo más robusto

## Mantenimiento y Soporte

Para reportar problemas o sugerir mejoras, por favor crear un issue en el repositorio del proyecto.