# Angular Travel App

## Overview

### What is this app for?

This is a promotional web app for Emerald Travel Montserrat aimed at users who may want to holiday in Montserrat for the St.Patricks day carnival.  

### What does it do?

This app gives users information regarding the bespoke holiday package Emerald has on offer as well as general information about Montserrat. Users will be able to join a mailing list, submit a contact form and interact with a calculator which will provide an approximate price of a holiday based on thier selections.

### How does it work?

This app uses javascript for form validation and logic. The site is styled with bootstrap and uses Angular as the framework.

## Features

### Existing Features
- User based features
  - Interactive forms
    - calculator
    - contact form
  - App based features
    - Calculating the cost of a holiday.
    - Display the cost as the user makes selections.
    - Display a personal message contact form submit.
    - Form validation with message to help users who entered incorrect format.
    - Register e-mail for mailing list.
    - Carousel to display accommodation photos.
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
  - There is a base css file in the components directory which houses common css used on each page. For example the same font and margins are used throughout the site. 


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


## Testing
To test my calculator controller I used the Jasmine testing framework. To initiate the tests I used the example from the code institute lessons and created a file called calc.js in which I used Red-green-refactor to make sure the tests would both fail and pass.

In the specRunner.html file I had to make sure I loaded all the files I needed in order to test my controller successfully. I [read here](https://docs.angularjs.org/guide/unit-testing) that I could use angular-mocks to 'inject and mock AngularJS services within unit tests'. When I first loaded specRunner.html in the browser I was getting errors such as 'angular is not defined' and 'mock' is not defined. By reading the errors provided by jasmine and looking in the javascript console I determined that my files were not loading correctly due to incorrect paths.

Upon revisioning the order of my script tags and making sure the paths were leading to the intended directories I was able to start writing tests for my controller. I used [this](http://www.bradoncode.com/blog/2015/05/17/angularjs-testing-controller/) tutorial to get me started.

Before each test I used angular mocks to load a new instance of 'EmeraldApp' and then used the 'inject' function to 'resolve a reference of the controller service'. The controller service is then used to get an instance of my 'CalculaterCtrl'.

After the red-green-refactor test, in order for my tests to pass I had to change the way my functions were written in the controller. The first change I made was to add $scope to the functions so that I could use them in the testing suite. 

The second change I made, made for a more defensive programming approach. I used if statements to check if the values being passed into functions were in fact numbers. If a value is not a number then the error would be caught and alert the user that the input should be a number. 

It is through implementing these tests I was able to analyse and change my code to fit better with the defensive programming approach.


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