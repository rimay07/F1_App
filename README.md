# MobiquityApp F1 Application using Angular5

This application was created using Angular Framework. 

Features of the application:
1. Load Main page with a dropdown year selector for the application to load
2. Connect to ergast.com api's 
3. Process the api and display them on the table
4. Show winners per race 
5. Highlight the world champion row
6. Paginate the table

Prerequiste:
1. Nodejs

Notes:
1. Supports multi-screen viewing
2. Testing was not done as of this time.

## Install Dependencies

Install Nodejs

Download and Install:
https://nodejs.org/en/download/

Using a Package Manager:
https://nodejs.org/en/download/package-manager/

## Using the F1 app

Create Directory to your project

```shell
mkdir <project_name>
```

Clone the F1_App

```shell
git clone https://github.com/rimay07/F1_App.git
```

Go to application folder

```shell
cd <project_name>/F1_App
```

### Starting the F1 app

Installing libraries

```shell
npm install
```

Starting the application
```shell
npm start
```

Browser should automatically start at port 8081
If not open your browser to http://localhost:8081 to view the F1 application

## Building the App

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Directory Layout of Main Files
    
    package.json            			--> for npm
    src/                 				--> client side files
      app/						
		app.component.css				--> css files
		app.component.spec				--> testing files
		app.component.html				--> main HTML page
		app.component					--> main component
		app.module						--> main module
		app-routing.module				--> routing module
        race-year/						--> race folder
			race-year.component.css		--> css files
			race-year.component.html	--> race HTML
			race-year.component.spec	--> race testing files
			race-year.component			--> race component
			race-year.service			--> race service file

