# Squiddit

A discussion forum for all things squid related. Unit 2 Project for General Assembly Web Development Immersive.

### Features

- Anonymous users can view and vote on any conversation topic
- Topics ranked by number of votes
- All individual topics are viewable, along with their comments and subcomments, by anonymous users

- Users can create their own accounts (except where usernames already exist)
- Users can log into and out of their accounts
- Users can post ONLY when they are logged in
- Users can only delete their own comments and topics

- Input fields allow HTML formatting


### Wireframe

![Wireframe](./plan/wireframe.png)

### ERD

![ERD](.plan/ERD.png)

### Modules Used

- Node.js/Express.js - server side functionality, routing
- Path - Normalizes filepaths for static assets
- Body-parser - Retrieves request data from page forms
- Method-Override - Allows PUT and DELETE requests
- Morgan - A helpful logging module
- Express-Session - Used to create and destroy user sessions within the app
- EJS - Page rendering 
- Pg-promise - SQL queries w/ JS


### Instructions -

Fork/clone this repo, navigate to its directory in terminal and fire up the server with nodemon. From there, the entry point will be accessible in the browser via (localhost:3000/squiddit)
