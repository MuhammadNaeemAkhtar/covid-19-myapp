# Covid19 App

SURGE URL: http://covid19-analytics-mna.surge.sh/

## Libraries used

npm install --save axios react-chartjs-2 react-countup classnames

npm install --save @material-ui/core  // To get predefined UI

npm install chartjs-plugin-labels

axios -> helps to get request to the API

react-chartjs-2 -> Library to make charts

react-countup -> help to make animations while counting

classnames -> to put multiple classes together

## NOTES

Cards.module.css -> if we don't use module then css will be applied over all the components

import { Cards, Chart, CountryPicker } from './components'; "To make it work we need to create index.js file in components folder"

fetchData function to be asychronous to feth data asychronously , it makes both easier read and write

Best place to fetch data in class based components  -> componentDidMount() {}

to get data asynchronously we usually put async before parenthesis, since componentDidMount() is a special function we put async before the function name

state is used to bring data from componentDidMount down to Cards to diplay it

Using state constructur is defined in the backend

//<Grid container spacing={3} justify="center"></Grid>    //Grid that grabs all the other cards
														//Has the property of container, spacing to space out the cards

//Grid type of item, inside the component of that item 											
//<Grid item component={Card}

//<CardContent></CardContent>

//<Typography color="textSecondary" gutterBottom>  //is used for text, gutterBottom for fadding, 

//<Typography variant="h5">

//<Typography color="textSecondary">  //is used for text, gutterBottom for fadding, 

//<Typography variant="body2">  //is used for text, gutterBottom for fadding, 

//<CountUp start={0}  end={confirmed.value} duration={2.5} separator=","/> self closing component a going to have few different properties

on mobile devices take all the spaces xs={12}
on medium or upper devices take 3 spaces md={3}

Since we are using material ui we need to use !important in css.


//********************************************

Automatically generated documentation

//*******************************************

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
