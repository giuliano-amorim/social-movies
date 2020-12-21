# The Movie Network

A social platform for movie buffs. 

We built this as a final project for the Web Development course (CS5610) at Northeastern University. This project is built on top of the MERN Stack using React and Redux for the front-end and Node.js for the backend. You can view the published webapp at: https://themovienetwork.herokuapp.com

### Features 

  * User roles:
	1. Regular user (Registered/Unregistered)
		* Regular user can follow other users including critics and actors.
		* He/She can like a movie.
		* This event would be visible on those users who followed the user who liked the movie.
	2. Movie critic
		* A movie critic can post a review on a movie, that would be visible on his feed, on his followers feed and the movies page.
	3. Actor
		* An actor can be reached by clicking links mentioned in the movie page.
		* They can promote their movies by posting information related to their events on their feed.
		* This would also be visible on feeds of all users following this actor.
	
  * APIs
    1. TMDb for movies.
	2. New York Times API for news related to particular movies.
	
  * Homepage		
	* This would be the landing page of our project.
	* It would be different for regular user, critic and actor.
	
  * Login / Register
    * Login/Register Functionality would be added that allows users to register and login. 
    * Anonymous users would also be able to use the web app without the need to login in. They could search movies, lookup movies of different genres/times/ratings etc. based on different filters. They can also view actors or critics or search other users.
	* To view specific information and access the social network features a user has to log in.
    * He/She would be able to login with credentials from third parties such as Google and Facebook.
	
  * Profile
    * Profile of the different user roles would look different according to the features. 
	* It would allow them to edit their personal information and navigate to objects related to the user.
	* Every user would be able to view a feed showing information relevant to them. (Regular user can view followed users' liked movies and critics' reviews on movies; every user can view news articles regarding the latest movies or movies they liked/reviewed or acted in.) 	
	
  * Search / Search Results
    * Allows users to search for movies. Search results would be shown as a summarized list. 
    * Clicking on a search result navigates to a details page for the movie. 
	
  * Details Page
    * Shows a detailed information related to the movie searched such as its trailer, description, rating, and reviews by critics etc. 
    * Clicking on the critic that posted the review navigates to that critic's profile.
	
  * Social Networking
    * Provides social networking features such as discovering other users, following other users, view other's likes/comments etc.
	
  * User Admin 
    * A user with admin credentials would be able to create, view, update and remove all other users. 
	
### UML diagram
![](https://raw.githubusercontent.com/Aniruddha-Tapas/The-Movie-Network/master/Design/UML_class_diagram.png)	
	
<hr>	