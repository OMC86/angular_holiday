# Angular Travel App

## Overview

### What is this app for?

This is a promotional web app for Emerald Travel Montserrat aimed at users who may want to holiday in Montserrat for the St.Patricks day carnival.  

### What does it do?

This app gives users infromation regarding the bespoke holiday package Emerald has on offer as well as general information about Montserrat. Users will be able to join a mailing list, submit a contact form and interact with a calculator which will provide an approximate price of a holiday based on thier selections.

### How does it work?

This app uses javascript for form validation and logic. The site is styled with bootstrap and uses Angular as the framework.

## Features

### Existing Features
- User based features
  - Interactive forms
    - claculator
    - contact form
  - App based features
    - Calculating the cost of a holiday.
    - Display the cost as the user makes selections.
    - Display a personal message on submittance of contact form.
    - Form validation with message to help users who entered incorrect format.
    - Register e-mail for mailing list.
    - Carousel to display accomodation photos.
    - Embedded youtube music videos.


## Structure

### Root Directory
- App
  - Contains the app's routing, logic and templates.
- Assets
  - Contains images used on the site.
- Bower-components
  - Contains libraries and frameworks.
- Javascript-testing
  - Contains Jasmine tests.
- Other files
  - Index.html, Readme.md.

### App Directory
- App.js contains the routing and modules to be injected into controllers.
- Components
  - The components directory is organised in such a way that each individual page in the app has its own directory containing it's template.html, css file and controller. There is also a directory which houses all the directives.
- Directives
  - Each directive has it's own directory containing it's template, css, controller and directive file.
- CSS
  - There is a base css file in the components directory which houses common css used on each page. For example the same font and margins are used throught the site. 


## Tech Used

### Some of the tech used includes:

- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to build custom. directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout.
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application.
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks.
- [Jasmine](https://jasmine.github.io/)
    - **Jasmine** is used to test javascript code.


## Contributing

### Getting the code up and running

1. Firstly you will need to clone this repository by running the ```git clone https://github.com/OMC86/angular_holiday``` command
2. After that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request