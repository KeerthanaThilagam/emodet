# EMOTION DETECTION USING FACE-API

## INTRODUCTION

Web browsers get more powerful by the day. Websites and web applications are also increasing in complexity. Operations that required a supercomputer some decades ago now runs on a smartphone. One of those things is face detection.
The ability to detect and analyse a facial emotion is super useful, as it enables us to add clever features. Face-api.js is a library that enables developers to use face detection in their apps without requiring a background in machine learning
Our project is to find the emotion of the user along with the age and gender. This is implemented using four pretrained models which helps in detecting the face, landmark detection of 68 point on faces , face recognition and finally age and gender model.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Hardware Requirements

```
Processor:   i3 or more
 RAM     :4 GB or more

```
Software Requirements
```
Operating System                  :   Windows 7 / 8 / 10
Language                          :   HTML, CSS
Developing Tool                   :   Visual Studio
Technologies                      :   JavaScript

```
The Visual Studio IDE is a creative launching pad that you can use to edit, debug, and build code, and then publish an app.  
JavaScript is used by programmers across the world to create dynamic and interactive web content like applications and browsers.


### Installation
#### Step 1 :

•	Download VS code from here Link.( https://code.visualstudio.com/download)

#### Step 2 :

•	Download the Visual Studio Code installer for Windows. Once it is downloaded, run the installer (VSCodeUserSetup-{version}.exe). Then, run the file – it will only take a minute

•	Accept the agreement and click “next.”

•	After accepting all the requests press finish button. By default, VS Code installs under: “C:\users{username}\AppData\Local\Programs\Microsoft VS Code.”

•	If the installation is successful, you will see the visual studio workplace.

### Live Server

Launch a local development server with live reload feature for static & dynamic pages.
Start/Stop Server

1. Open a project and click to Go Live from the status bar to turn the server on/off.

2. Right click on a HTML file from Explorer Window and click on Open with Live Server.

3. Open a HTML file and right-click on the editor and click on Open with Live Server.

4. Hit (alt+L, alt+O) to Open the Server and (alt+L, alt+C) to Stop the server (You can change the shortcut form keybinding). [On MAC, cmd+L, cmd+O and cmd+L, cmd+C]

5. Open the Command Pallete by pressing F1 or ctrl+shift+P and type Live Server: Open With Live Server to start a server or type Live Server: Stop Live Server to stop a server.

### Deployment

1.	Navigate to visual studio and click live server
	
2.	The page is now Navigated to http://localhost:8888/ in Chrome to run the program.

3.	New User can register using the username,password and name. Existing user can login using correct credentials.
Click the start button to start the webcam 

## MODELS:

### Face detection:
To get the boundaries of one or multiple faces. This is useful for determining where and how big the faces are in a picture.

### Face landmark detection:
To get the position and shape of the eyebrows, eyes, nose, mouth and lips, and chin. This can be used to determine facing direction or to project graphics on specific regions, like a moustache between the nose and lips.

### Face recognition: 
To determine who’s in the picture.

### Face expression detection: 
To get the expression from a face. Note that the mileage may vary for different cultures.

### Age and gender detection:
To get the age and gender from a face. Note that for “gender” classification, it classifies a face as feminine or masculine, which doesn’t necessarily reveal their gender.

# End to end tests breakdown

### User/Admin Registration

- Click on Register in Homepage
- Enter the  username,mail id and password
- Check if the password meets the requirement
- Click on Register button
Note: Login can be done one after admin's approval.

### Registration Authentication

- Login as Admin by filling in the credentials
- The credentials are authenticated by the system 


### Enabling webcam

- click on the button to start webcam
- Allow the necessary permissions to access the webcam 

### Face detection

- The bounding boxes appears for all the detected faces
- The facial feature points are extracted
- The emotion of the user along with the age and gender is displayed to user.
NOTE: avoid using sunglasses.

## Built With

*	[HTML 5, CSS 3] https://developer.mozilla.org/en-US/docs/Web/HTML https://developer.mozilla.org/en-US/docs/Web/CSS - For Web Designing
*	[JQuery] https://api.jquery.com/) - Used to generate Animation Effect
*	[JavaScript] https://developer.mozilla.org/en-US/docs/Web/JavaScript - For Scripting
*	[Bootstrap 3] https://getbootstrap.com/docs/3.3/ - Used for FrontEnd Framework
*	[Typescript] https://www.tutorialspoint.com/typescript/index.htm

## References

*	https://visualstudio.microsoft.com/
*	https://developer.mozilla.org/en-US/docs/Web/HTML
*	https://devdocs.io/javascript/\
*	https://justadudewhohacks.github.io/face-api.js/docs/index.html
