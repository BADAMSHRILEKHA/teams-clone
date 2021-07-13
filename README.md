MICROSOFT TEAMS CLONE

•	Tech Stack:
	React.js, Node.js (Express.js), WEBRTC, Socket.io, Auth0, CSS, JavaScript, EJS, HTML.

•	Features Incorporated
	1:1 video call
	User authentication
  
Run the command "npm init -y" to create a package.json file in the root  directory

Download all the dependencies listed in th package.json files in both root and client directories respectively.

clone my git repository in your code editor to run the application.

After cloning all the files

Go to auth0 website 

https://auth0.com/

and create your account and create a new node.js regular web application


![Screenshot 2021-07-13 164431](https://user-images.githubusercontent.com/87368752/125442692-24c1e183-5d8d-48c6-a5a8-56acbcfe402b.jpg)

you will find your domain url and client ID in this way in settings menu of you auth0 application you created

Now paste your client ID and domain URL in .env file (in CLIENTID and ISSUER respectively)

Now in Auth0 go to Settings of the application you created => change the callback and logout URL to localhost:5000

![Screenshot 2021-07-13 164911](https://user-images.githubusercontent.com/87368752/125443657-7f07486e-1ab5-4d36-b180-a5bf0960f657.jpg)





Run the command “node index.js” in the terminal (make sure you are on the root folder) to start the web application.
 
![terminal](https://user-images.githubusercontent.com/87368752/125441888-97a645e1-646d-4ad6-8959-68da3a2b1620.png)

Now, split the current terminal in your code editor and run the command “cd client” to change your directory. After directory gets changed run the command “npm start”.A new page having the URL http://localhost:3000  will be opened in a browser. Close that page.

![terminal2](https://user-images.githubusercontent.com/87368752/125442112-f91772c3-8726-4eb9-be22-02ccfcf7b4a8.png)

Now, open a web browser and go to http://localhost:5000 to see your running application

