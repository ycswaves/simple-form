# simple-form
This project is set up using [create-react-app](https://github.com/facebook/create-react-app) by facebook.

## Live Demo
Available at [https://goo.gl/J5TrWH](https://goo.gl/J5TrWH)

**Heads up**: to proceed to the wallet page, please use "**2018**" as the OTP in order to pass the validation.

## Design Decisions
1. `toast message` appearance animation in the wallet page was applied with **scaling** and **opacity** transformation to create a "pop-up" effect to attract user's attention. It disappeared in the "reverse" form by scaling down to 0 and become totally transparent before it's removed completely from the page.

2. `tooltip` appearance animation in the wallet page was also applied with **scaling**. In addition, `transform-origin` is set to `top right` to guide the user to the direction of the subject refered in the tooltip. 

## How to run this project locally
1. run `npm install` to install all the dependencies.
2. run `npm start` to run the app in the development mode.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

