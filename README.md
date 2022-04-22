# 1337 Test app

Try out application on Heroku: [Demo](https://test-app-tretton37.herokuapp.com/)

## Technology stack

This is a test React application for 1337.

- [React](https://reactjs.org/)
- [MUI](https://mui.com/) - React UI framework
- [Vite](https://vitejs.dev/) - Build tool (I like to try out new technologies, so I've chosen to use Vite instead of Webpack for this app).

## Stories

- Typescript \
  I always use TypeScript and I think that it is helpful to developers and projects in so many ways.
- Available public url \
  I think it is easier to see the app right away without having to run it first. It is also a must for every real project, so I wanted to add a base for the future. CI/CD can be added.
- Sort by name and office and Filter by name and office \
  I think the page is not very useful if a user cannot sort or filter, so I've added that functionality.
- Responsive design and modern CSS \
  I've used MUI to achieve responsiveness and better UI. It is great component library and in general using component library is a good practice.

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

There are several things that I would like to add at minimum to this project as I have time:

- Add unit tests with @testing-library
- Add pagination
- Set up CI/CD pipeline with GitHub (see [issue](https://status.heroku.com/incidents/2413))
- Check accessibility
