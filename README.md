Cassandra attempts to give more equal access to information and educational recourses for all. (essentially an online educational recourses hub).


**Major Features:**
1. Searchability

*Adding categories to posts enables quick searching and filtering of posts.
*Filtering of posts can be done through 
*Cross page searching sends updates the state of the posts page, when redirected, with the search entered into the home searchbar enabling searching from any page.

2. Voting
*A simple voting system sorts the posts by number of votes to enable users to sort through the different recources for eachother.

3. AWS
*File uploading enables adding of photos to posts to improve user experience.

4. Frontend Authentication
*enables the password to never be sent between the client and server, therefore maintaining security, only the password digest that has been encrypted using bcrypt will ever be sent to the server. 
*Persistent login using session controllers/tokens




**Production Timeline:**

**1. Created frontend User Authentication. New account creation and login. (11/03/2019, 2 days)**

* Users can sign up, sign in, log out
* Users can't use certain features without logging in (creating posts, voting and commenting)

**2. Posts (13/03/2019, 2 days)**

* Logged in users can create posts
* Users can view a list posts
* Logged in users can comment on posts

**3. Voting (15/03/2019, 1 day)**

* Logged in users can vote for posts
* posts are sorted by number of votes
* The vote count is displayed for each posts

**4. Uploading of images (23/03/2019, 1 day)**

* Enabled uploading of images for posts with AWS
* Displaying of uploaded image for each post 

**5. Categorisation for filtering and searching (05/04/2019, 1 day)**

* Enabled adding multiple categories when creating a post
* Enabled filtering and cross page searching for posts by category or title

**6. Production README (15/04/2019, 0.5 days)**
