# vite-mern-template

[![Depfu](https://badges.depfu.com/badges/1b70410a7764005553d576dd171dce8d/status.svg)](https://depfu.com)
[![Depfu](https://badges.depfu.com/badges/1b70410a7764005553d576dd171dce8d/count.svg)](https://depfu.com/github/apicgg/vite-mern-template?project_id=38988)

> Simple opinionated boilerplate for MERN stack with Vite and Redux Toolkit.
> This includes React+TypeScript with familiar configuration for vite.config.ts for front-end and Express+TypeScript for back-end.

This has been created with the official [Vite](https://vitejs.dev/) template (`npm create vite@latest`) and some extended setup. There are two separate folders called `server` and `client`. The entry point for the backend is `server/src/index.js`.

Any package manager can be used with this project (e.g. npm, yarn or pnpm).

> Thanks to [awesome-vite](https://github.com/vitejs/awesome-vite) for publishing this project.

## Tools

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [Express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [express-async-handler](https://www.npmjs.com/package/express-async-handler)
- [material-ui](https://mui.com/)

## Requirements

- [Node.js](https://nodejs.org/en/) 18+

## Installation

```bash
npx degit aceamarco/vite-mern-template my-app
```

## Install dependencies (npm or yarn or pnpm)

- Backend

```bash
npm install
```

- Frontend

```bash
cd client
npm install
```

## Start the development server

- Backend

```bash
npm run watch
npm run server
```

- Frontend

```bash
npm run client
```

- Remove the .git folder and initialize your own git repository.
- In this case `npm run watch` needs to be executed before starting the development server with `npm run server` on different terminal sessions as the TypeScript files (backend) need to be compiled to JavaScript before staring the dev server with node.
- To build run `npm run build:server` and `npm run build:client`.

## License

MIT License.

Please review the [License](https://github.com/apicgg/vite-mern-template/blob/main/LICENSE).

## Contributors ✨

Contributions of any kind welcome! Kindly have a look into [Contributing Guidelines](CONTRIBUTING.md)
