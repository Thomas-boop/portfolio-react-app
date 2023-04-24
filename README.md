# Bootstrapping a React Project

This guide will walk you through the steps to bootstrap a new React project using the create-react-app tool.

# Portfolio-react-app

[ This is a SovTech Single page application project I used yarn So please use that. ]

# Table of Contents

    Installation
    Usage
    Features
    Technologies Used
    Contributing
    License

# Installation

    Clone the repository to your local machine using git clone https://github.com/Thomas-boop/portfolio-react-app
    Install the necessary dependencies using yarn install
    Run the application using yarn start

Usage

[To bootstrap the a component, you need to first import them into your file. For instance, you can import like this:]

import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

Then you can Bootstrap each component like this:

function Work() {
return (
<div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
<Container className='py-8'>
<Row className='justify-content-center'>
<h1 className='text-center text-white fw-bold pb-4 border-bottom border-pink-600'>Work</h1>
<p className='text-center py-6'>// Check out some of our favorite work</p>
</Row>
<Row xs={1} md={2} lg={3} className='g-4'>
<Col>
<div className='content-div group container rounded-md shadow-lg shadow-[#040c16] flex justify-center items-center mx-auto'
style={{ backgroundImage: `url(${weather})` }}>
<div className='opacity-0 group-hover:opacity-100'>
<h3 className='text-white fw-bold text-center tracking-wider'>Weather App application</h3>
<div className='text-center pt-8'>
<a href='https://thomas-boop.github.io/Weather-app/' target='_blank' rel='noopener noreferrer'>
<Button variant='outline-light' size='lg' className='m-2'>Demo</Button>
</a>
<a href='https://github.com/Thomas-boop/Weather-app' target='_blank' rel='noopener noreferrer'>
<Button variant='outline-light' size='lg' className='m-2'>Code</Button>
</a>
</div>
</div>
</div>
</Col>
<Col>
<div className='content-div group container rounded-md shadow-lg shadow-[#040c16] flex justify-center items-center mx-auto'
style={{ backgroundImage: `url(${paint})` }}>
<div className='opacity

This is just an example but it can work

Features

[List of application features go here]
Technologies Used

    React
    Bootstrap
    TailWind
    Yarn

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
