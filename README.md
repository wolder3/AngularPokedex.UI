# AngularPokedex

## Elaborado con

- Node.js
- AngularCLI

## Pre-requistos

- Tener instalado [Node.js](https://nodejs.org/es/) con la version v.14.16.0 o superior.
- Tener instalado [Angular CLI](https://angular.io/cli)
- Modificar los parametros `Api_Endpoint` y ` Api_Resource` del archivo `environment.ts` con las rutas del [WEB API pokedex](https://github.com/wolder3/AspNetCorePokedex.API)
- Ejecutar el comando ```npm install``` para que se descarguen los paquetes en su repositorio local.

## Ejecucion en modo desarrollo

Ejecutar `ng serve` en la terminal. Luego escribir en el navegador `http://localhost:4200/` para visualizar la pagina.

## Proyecto para produccion

Ejecutar `ng build` para construir el proyecto y prepararlo para un ambiente de produccion. Los archivos estaran ubicados en el directorio `dist/` . Usar la palabra `--prod` para una construccion en produccion.
