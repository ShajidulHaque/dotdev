<h1 align="center">environment variable</h1>

## dotdev

* read my all file sothat you can know all code where how happening.
* connect index.js file into your js file, follow the rule of connecting index.js file

## step 1

* rule 1.1
* download my all file
	* copy dotdev folder into your project folder as you can see my project file is environment-variable and here will have one folder is dotdev
	* connect index.js file into your .js file
	
```
	const { dotdev } = require('./dotdev/index.js');
```

* rule 1.2
	* then you create dev.env file as you can see i createed. write your all environment variable
	* and you can use it as like

```
	dev.env file have all variable
	
	NAME=dotdev
	AUTHOR=SH Shihab
	
	.js use it
	console.log(dotdev.NAME);
	console.log(dotdev.AUTHOR);
```
* rule 1.3
	* what type of name you can have, or you can use in dotdev as "variable name"
	* if you have writing number on dev.env file you can do it
	* you can use it as a number

## step 2

* rule 2.1
* environment variables
	* when you write your variable you must follow this role
	* this is the formats you must follow
	
```
	NAME=dotdev
	AUTHOR=SH Shihab
	PORT = 3000
```
* rule 2.2
	* when your one variable was finished then you write another variable on another line, or you get an error
	* thank you

## logo
!["logo"](devenv.jpg)
