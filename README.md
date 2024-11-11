# Instrucciones para Despliegue

### Paso 1: Clonar los Repositorios

1. Clona el repositorio del Front-End:
   ```bash
   git clone https://github.com/ArmandoxxXD/front-end-gimnasio.git front-end
   cd front-end && git checkout docker-deployment
   cd ..
   ```

2. Clona el repositorio del Back-End para gestión de ventas:
   ```bash
   git clone https://github.com/ArmandoxxXD/back-end-gimnasio-ventas.git back-end-ventas
   cd back-end-ventas && git checkout docker-deployment
   cd ..
   ```

3. Clona el repositorio del Back-End principal:
   ```bash
   git clone https://github.com/ArmandoxxXD/back-end-gimnasio.git back-end
   cd back-end && git checkout docker-deployment
   cd ..
   ```

### Paso 2: Iniciar los Contenedores con Docker Compose

Ejecuta el siguiente comando para construir y levantar todos los contenedores:
```bash
docker-compose up
```

> **Nota:** La opción `--build` garantiza que Docker Compose construya las imágenes si hay cambios recientes en el código o configuración.

### Acceso a los Servicios

- **Mongo Express**: [http://localhost:8081](http://localhost:8081)  
- **Back-End Spring Boot**: [http://localhost:8080](http://localhost:8080)  
- **Back-End Express**: [http://localhost:3001](http://localhost:3001)  
- **Front-End**: [http://localhost](http://localhost)  
