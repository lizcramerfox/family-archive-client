# Family Archive App (Client)
>This is a simple SPI application where an authenticated user can create, read, update, and delete a set of their memories (v.1. is text-only), while being able to access those memories from any device with an internet connection.
>
>User authentication and data storage are handled by a custom back-end API (see links below).

## Relevant Links
- Link to [Client Repository](https://github.com/lizcramerfox/family-archive-client)
- Link to [API Repository](https://github.com/lizcramerfox/Family-Archive-API)
- Link to [Deployed API](https://nameless-earth-46490.herokuapp.com/)
- Link to [Deployed Client](https://lizcramerfox.github.io/family-archive-client/)

## Technologies Used
- Express.js, JavaScript, AJAX
- Ruby on Rails, Ruby
- HTML, CSS, Bootstrap

## User Stories
###### As a new user, I’d like to:
- Register a new account with my email and a password
- Log in to my account
- Change my password
- Log out of my account

###### As a registered user, I’d like to:
- Upload a memory (v1: text-only; v2: text & images) of my family member **(CREATE)**
- View all my memories **(INDEX)**

###### As a memory's owner, I’d like to:
- Add a text **Title** and **Description** to my memory
- Add people related to my memory in a text field called **People**
- View details of ONE of my memories **(SHOW)**, through which I can:
  - Change the text or tags in my memory **(UPDATE)**
  - Delete the memory **(DELETE)**

## Wireframe & User Stories
###### [Wireframe:](https://i.imgur.com/dFtP4SS.jpg)
![Wireframe](https://i.imgur.com/dFtP4SS.jpg)
###### [ERD:](https://i.imgur.com/iXq1296.jpg)
![ERD](https://i.imgur.com/iXq1296.jpg)
