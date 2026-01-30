# Theater (Angular)

Aplicación web desarrollada con **Angular** para la gestión y visualización de películas. Permite listar películas, marcar favoritas (destacadas) y crear nuevas entradas mediante un formulario reactivo.

---

## Características

* **Listado de películas** con imagen, director, duración y enlace a IMDB
* **Marcar / desmarcar películas destacadas**
* **Resumen en Home** con:

  * Total de películas
  * Películas destacadas
* **Formulario reactivo** para crear nuevas películas
* **Servicio centralizado (`MovieService`)** para manejar el estado
* Arquitectura basada en **componentes y páginas**

---

## Estructura del Proyecto

```
src/
 ├── app/
 │   ├── components/
 │   │   ├── header/
 │   │   ├── home-resume/
 │   │   ├── list-movies/
 │   │   └── movie-form/
 │   ├── pages/
 │   │   ├── home/
 │   │   ├── list/
 │   │   └── create/
 │   ├── models/
 │   │   └── Movie.ts
 │   ├── services/
 │   │   └── movie-service.ts
 │   └── app.routes.ts
 └── public/
```

---

## Componentes Principales

### HomeResumeComponent

Muestra un resumen general:

* Total de películas
* Películas marcadas como destacadas

Permite alternar el estado **featured** de una película.

---

### ListMoviesComponent

* Lista todas las películas disponibles
* Permite marcar o desmarcar películas como destacadas
* Acceso directo a IMDB

---

### MovieFormComponent

Formulario reactivo para crear nuevas películas:

**Campos:**

* Nombre (requerido)
* Duración (máx. 300 minutos)
* Director
* URL de imagen (requerido)
* URL de IMDB (requerido)

Incluye validaciones y reseteo automático tras enviar.

---

## Servicio: MovieService

Servicio singleton que gestiona el estado global de las películas.

### Funcionalidades:

* Contiene una lista inicial de películas
* Permite añadir nuevas películas
* Comparte los datos entre componentes

---

## Rutas

Definidas en `app.routes.ts`:

| Ruta      | Componente | Descripción                   |
| --------- | ---------- | ----------------------------- |
| `/`       | Home       | Página principal con resumen  |
| `/list`   | List       | Listado completo de películas |
| `/create` | MovieForm  | Crear nueva película          |

---

## Tecnologías Usadas

* **Angular** (standalone components)
* **TypeScript**
* **Reactive Forms**
* **Angular Router**
* HTML5 + CSS3

---

##  Cómo ejecutar el proyecto

```bash
npm install
ng serve
```

Luego abre en el navegador:

```
http://localhost:4200
```

---

## Notas

* El estado se mantiene en memoria (no hay backend)
* Ideal como proyecto educativo para practicar:

  * Servicios
  * Formularios reactivos
  * Componentes standalone
  * Directivas estructurales (`@for`, `@if`)

---
 ¡Proyecto perfecto para aprender Angular de forma práctica!
