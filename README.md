# My App

### Author: <b>Abzed Mohammed</b>

## Description

This is a  `Polymer JS` applicatin integrated with `Lit-Element`. This app allows fast delivery and navigation by pre-caching components required by the app and progressively loading them on-demand as the user navigates through the app.

The application has three major routes:

1. View 1
2. View 2
3. View 3

### <b>View 1</b>

`/view1`

This route consist of a form for a user to fill and return an alert box containing data captured from the user input. It also prints to the browser console the user data, in form of a json object.

### <b>View 2</b>

`/view2`

This route contains a landing page of a hotel site showing one of the rooms and services offered.

### <b>View 3</b>

`/view3`

This route is responsible for fetching data from an API endpoint `https://jsonplaceholder.typicode.com/todos?_limit=5` then displays the result in the console. The result is also iterated and displayed in the HTML inform of a card. Completed tasks are displayed as checked.

## Setup

#### Prerequisites

Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli@next

#### Cloning from Github

clone the app from this [link](https://github.com/abzedmohammed/my-app)

    cd my-app
    npm install

### Start the development server

This command serves the app at `http://127.0.0.1:8081` and provides URL routing mentioned above:

    npm start


