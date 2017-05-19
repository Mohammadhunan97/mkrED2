foobar
  
  ![mkrED screenshot of homepage](https://image.ibb.co/c70xNa/Screen_Shot_2017_05_19_at_9_58_18_AM.png "mkrED screenshot")		  ![mkrED screenshot of homepage](https://image.ibb.co/c70xNa/Screen_Shot_2017_05_19_at_9_58_18_AM.png "mkrED screenshot")
 
 
 Technologies Used:
 Meteor JS 1.4.4
 MongoDB 3.2.12
 
 
 These technologies were selected for their ease of creating single page applications and their real time capabilities through websockets.
 
 Approach I took:
   I created this app around the idea that users could create, read, update and delete their lessons. This was done through two collections, a users collection and a lessons collection which contained a reference to the user collection. I then created templates (similar to react components) for each piece of the app (for example the form to create a new lesson was a template). Users could interact with these templates on the main page, and only the templates that the user is using at the time is visible, this allowed me to easily make it a single page application. 
 
 How to install meteor (this installation includes mongodb):
 https://www.meteor.com/install
 
 Hurdles:
 Pivoting, the assignment was to complete this within a week and a lot of the time spent was going from one idea to another, just because I wanted to create the best app for my users. I hope to continue updating this app so it can become an ideal platform for instructors.