# 1337 Test app

Try out application on Heroku: [Demo](https://test-app-tretton37.herokuapp.com/)

## Technology stack

This is a test React application for 1337.

- [React](https://reactjs.org/)
- [MUI](https://mui.com/) - React UI framework
- [Vite](https://vitejs.dev/) - Build tool

## Stories

- Typescript
- Available public url
- Sort by name and office
- Filter by name and office
- Responsive design and modern CSS

## Available Scripts

### `yarn install`

Installs the project dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Make sure to set API KEY env variable:
VITE_AUTH_API_KEY=[api-key]

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
Command also runs eslint and typescript check.

### `yarn tsc:watch`

Starts a TypeScript compiler with --watch parameter, with the ability to react to compilation status.

### `yarn lint`

Runs Eslint check.

## To Do

- Add unit tests with @testing-library
- Add pagination
- Set up CI/CD pipeline with GitHub (see [issue](https://status.heroku.com/incidents/2413))
- Check accessibility
