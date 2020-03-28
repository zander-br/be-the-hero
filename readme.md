<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img src="frontend/src/assets/logo.svg" alt="Be the hero" />
  </a>
</p>
<h1 align="center">
  Be the hero
</h1>

> Open source application developed to help ONGs reach heroes for their cases.

Application developed following the week Omnistack 11 da [Rocketseat](https://rocketseat.com.br/).

## Table of Contents

- [Screenshots](#screenshots)
- [Technology](#technology)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Mobile](#mobile)
- [Tools](tools)
- [Contribute](contribute)
- [License](license)

## Screenshots

Screenshots of the application both web and mobile.

> Screenshot login (Web)

![Logon](screenshot/login.png)

> Screenshot list incidents (Web)

![List Web](screenshot/list-web.png)

> Screenshot create incident (Web)

![Crate incident](screenshot/create.png)

> Screenshot splash screen (Mobile)

<p align="center">
  <img src="screenshot/splash.jpeg" alt="Splash screen" height="650px" />
</p>

> Screenshot list incidents (Mobile)

<p align="center">
  <img src="screenshot/list-mobile.jpeg" alt="List incidents" height="650px" />
</p>

> Screenshot details incident (Mobile)

<p align="center">
  <img src="screenshot/detail.jpeg" alt="Detail incident" height="650px" />
</p>

## Technology :construction:

The technologies used to create the applications were divided into three sections, to facilitate the explanation of each one. We will cover the most representative technologies for each project.

### Backend

The application backend was developed in [node.js](https://nodejs.org)  using [yarn](https://yarnpkg.com/) to install packages.

The entire application was developed using the [Airbnb style guid](https://github.com/airbnb/javascript) using [ESLint](https://eslint.org/) as a linter tool.

The API was created using the [express](https://expressjs.com) framework using MVC architecture concepts. The backend validations were done using the [celebrate](https://github.com/arb/celebrate) library, which has a very good integration with express.

Because it is an application for study only, the [SQLite](https://www.sqlite.org) database was used and for the connection SQL query builder [Knex.js](http://knexjs.org/) was used, which provides a nice interface with the database. To allow our frontend to access the server, it was necessary to use [cors](https://github.com/expressjs/cors).

Finally, some unit tests and integration tests were created using [Jest](https://jestjs.io/) test suite.

### Frontend :construction:

### Mobile :construction:

## Tools :construction:

## Contribute :construction:

## License :construction:
