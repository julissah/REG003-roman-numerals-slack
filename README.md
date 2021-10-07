# Números romanos: slash command de Slack

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

Ver proyecto `roman-numerals`.

## 2. Resumen del proyecto

Este proyecto depende del proyecto `roman-numerals`,
así que se asume que ya completaste o planeas completar dicho proyecto por
separado, o que trabajarás con una o más compañeras en paralelo, quienes
proveeran la librería `roman-numerals` para poder integrar esta funcionalidad en
un [_slash command_ de Slack](https://api.slack.com/interactivity/slash-commands).

En este proyecto crearás una _app_ de Slack que implemente un _slash command_
(comandos que se pueden agregar a Slack), que permita a las usuarias convertir
números enteros en números romanos y viceversa. Para ofrecer esta funcionalidad
tendrás que implementar y desplegar un servidor HTTP que se encargue de responder
las consultas enviadas desde Slack.

## 3. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### Node.js

- [ ] **Instalar y usar módulos con npm**

  <details><summary>Links</summary><p>

  * [Sitio oficial de npm (en inglés)](https://www.npmjs.com/)
</p></details>

- [ ] **Configuración de package.json**

  <details><summary>Links</summary><p>

  * [package.json - Documentación oficial (en inglés)](https://docs.npmjs.com/files/package.json)
</p></details>

- [ ] **Configuración de npm-scripts**

  <details><summary>Links</summary><p>

  * [scripts - Documentación oficial (en inglés)](https://docs.npmjs.com/misc/scripts)
</p></details>

### JavaScript

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [ ] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

- [ ] **Módulos de CommonJS**

  <details><summary>Links</summary><p>

  * [Modules: CommonJS modules - Node.js Docs](https://nodejs.org/docs/latest/api/modules.html)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### Express.js

- [ ] **Manejo de rutas**

- [ ] **Uso y creación de middleware**

### HTTP

- [ ] **Consulta o petición (request) y respuesta (response).**

  <details><summary>Links</summary><p>

  * [Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
  * [Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
</p></details>

- [ ] **Cuerpo (body)**

  <details><summary>Links</summary><p>

  * [Cuerpo de Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages#cuerpo)
</p></details>

- [ ] **Verbos HTTP**

  <details><summary>Links</summary><p>

  * [Métodos de petición HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
</p></details>

- [ ] **Codigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>

- [ ] **Encodings y JSON**

  <details><summary>Links</summary><p>

  * [Introducción a JSON - Documentación oficial](https://www.json.org/json-es.html)
</p></details>

### WebOps

- [ ] **cloud-functions**

### slack

- [ ] **Slash commands de Slack**

  <details><summary>Links</summary><p>

  * [Enabling interactivity with Slash Commands - Slack Docs](https://api.slack.com/interactivity/slash-commands)
</p></details>

## 4. Consideraciones generales

* El equipo de coaches te dará un tiempo sugerido e indicaciones sobre si
  trabajar sola o en equipo. Recuerda que cada una aprende a diferente ritmo.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no
  te preocupes, lo aprenderás durante este proyecto.

## 5. Criterios de aceptación mínimos del proyecto

### [Slash Commands](https://api.slack.com/interactivity/slash-commands)

```text
/roman-numerals MMXX
2020
```

```text
/roman-numerals 2020
MMXX
```

```text
/roman-numerals help
```

```text
/roman-numerals version
```

### Servidor HTTP

Dos endpoints:

* `GET /`: Debe responder con un objeto JSON con dos propiedades (`name` y
  `version`). Ejemplo:

  ```json
  {
    "name": "roman-numerals-slack",
    "version": "1.0.0"
  }
  ```

* `POST /`: Este es el endpoint al que Slack enviará los comandos escritos por
  las usuarias (en el cuerpo - _body_ - de las consultas - _requests_) y
  responderá en formato JSON con un objeto como este:

  ```json
  {
    "response_type": "in_channel",
    "text": "El texto que aparecerá como respuesta en el chat de Slack"
  }
  ```

  Puedes encontrar más detalles en la [documentación oficial de Slack](https://api.slack.com/interactivity/slash-commands).

## 6. Pistas, tips y lecturas complementarias

### Servidor HTTP

En este proyecto tendrás que implementar y desplegar un endpoint que reciba
_requests_ (consultas HTTP) de Slack (cada vez que alguien invoca nuestro _slash
command_). Esto significa que nuestro _endpoint_ debe estar desplegado en una
URL pública. Para esto pueden usar la plataforma que prefieran. Algunas opciones
que pueden explorar:

* Firebase Cloud functions
* AWS Lambda
* Docker + GPC o AWS ECS
* Heroku
* Now (Zeit)

### Apps en Slack

Para poder trabajar en este proyecto necesitas seguir estos pasos:

1. Crea un _workspace_ de Slack gratuito e invita a tus compañeras de equipo y
   otras personas que quieres que tenan acceso a tu entorno de desarrollo.
2. [Crea una App en la plataforma para developers de Slack](https://api.slack.com/apps)
   y asóciala al _workspace_ que hayas creado en el punto `1`.
3. En tu nueva app, crea un [_slash command_](https://api.slack.com/interactivity/slash-commands)
   para que tus usuarias puedan invocar tu endpoint. Para hacer esto necesitarás
   ya tener la URL pública del endpoint de tu servidor HTTP, así que asegúrate
   de _desplegar_ tu servidor HTTP y tener la URL del endpoint a la mano.
4. Instala la App en tu workspace.
5. Una vez instalada la app en tu workspace podrás invocar el _slash command_
   desde el chat de Slack.

### Otros recursos y lecturas complementarias

* [Slack API](https://api.slack.com/)
* [Slack API - Slash Commands](https://api.slack.com/interactivity/slash-commands)
* [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
* [learnyounode](https://github.com/workshopper/learnyounode)
* [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
* [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
* [Node.js y npm](https://roman-numerals-api.herokuapp.com/)
