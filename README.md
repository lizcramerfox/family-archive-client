# Family Archive App
This is a simple React-based SPI application which allows an authenticated user to create, read, update, and delete a set of their memories (v1 is text-only), while being able to access those memories from any device with an internet connection. User authentication and data storage are handled by a custom Rails-based API (see links below).

#### Application Links
- [Client Repository](https://github.com/lizcramerfox/family-archive-client)
- [API Repository](https://github.com/lizcramerfox/Family-Archive-API)
- [Deployed API](https://nameless-earth-46490.herokuapp.com/)
- [Deployed Client](https://lizcramerfox.github.io/family-archive-client/)

#### Technologies Used
- Express **|** JavaScript **|** AJAX
- Ruby on Rails **|** Ruby
- HTML **|** CSS **|** Bootstrap

#### Application Screenshot
>![https://lizcramerfox.github.io/family-archive-client/](https://i.imgur.com/MDBSAqy.png)


# Planning & Development
#### Project Managment & Development Strategy
> Although this wasn't a team project, I still made an early decision to use a [Gihub Project Board](https://help.github.com/en/github/managing-your-work-on-github/about-project-boards) as my central planning and development environment. The kanban dashboard's automated interaction with the linked repositories' issue queues made it possible to break down the project into smaller and smaller tranches on an as-needed basis, allowing me to focus on invidual, solvable problems.
>
> In the kanban, linked issues from the repo queues were an easy place to keep track of both my planning notes (checklists, reminders, links to trainings & source documentation, etc.) *and* notes tracking my development process - the latter of which proved exceptionally helpful in crafting meaningful commit messages. I also found myself pushing commits more frequently because I would close each issue in the kanban by referencing the issue's ID number in a commit message.
>
> Having had very limited experience with the React framework prior to beginning this project, I found the client side of this project particularly challenging, as I was essentially teaching myself how to implement a working React application as I went through each step. This was where my earlier planning in the Github Project Board paid of most of all, as it provided a much-needed roadmap during the learning process. I am forever grateful that this project pushed me through what was a very steep learning curve, because learning every last possible thing about React programming has since become one of my career-life's missions (and a bit a personal one too).

#### Screenshot of Planning Board
> ![](https://i.imgur.com/HyuwA5u.png)

#### Entity Relationship Diagram (ERD)
>![ERD](https://i.imgur.com/iXq1296.jpg)

#### API Routes
| Prefix | Verb | URI Pattern | Controller#Action |
| --- | --- | --- | --- |
| memories | GET | /memories(.:format) | memories#index |
| memories | POST | /memories(.:format) | memories#create |
| memory | GET | /memories/:id(.:format) | memories#show |
| memory | PATCH | /memories/:id(.:format) | memories#update |
| memory | PUT | /memories/:id(.:format) | memories#update |
| memory | DELETE | /memories/:id(.:format) | memories#destroy |
| sign_up | POST | /sign-up(.:format) | users#signup |
| sign_in | POST | /sign-in(.:format) | users#signin |
| sign_out | DELETE | /sign-out(.:format) | users#signout |
| change_password | PATCH | /change-password(.:format) | users#changepw |


#### User Stories
- As a **NEW USER** I would like to... _**register a new account with my email and a password**_
- As a **NEW USER** I would like to... _**log in to my account**_
- As a **NEW USER** I would like to... _**change my password**_
- As a **NEW USER** I would like to... _**log out of my account**_
- As a **REGISTERED USER** I would like to... _**save a memory (text) of my family member (CREATE)**_
- As a **REGISTERED USER** I would like to... _**view all my memories (INDEX)**_
- As a **MEMORY OWNER** I would like to... _**add a text `Title` and `Description` to my memory**_
- As a **MEMORY OWNER** I would like to... _**add people related to my memory in a text field called `People`**_
- As a **MEMORY OWNER** I would like to... _**view details of ONE of my memories (SHOW)**_
- As a **MEMORY OWNER** I would like to... _**change the text or tags in my memory (UPDATE)**_
- As a **MEMORY OWNER** I would like to... _**delete the memory (DELETE)**_


# Unsolved Problems for Future Iterations
#### Version 2.0:
- When a user views or is redirected to their MemoryIndex (e.g. via the "View My Memories" link), an "Add New Memory" button should appear at the top of the list of their memories
- A user shoud be able to tag people in their memory through a new many-to-many linked resource called `People` (a Memory can have many `People` tags, and a `People` tag can belong to many Memories)

#### Version 3.0:
- A Memory should be able to accept an image (such as a photo or document)
- A User should be able to invite verified non-Users to view their Memories without being able to edit them (guest login)

#### Version 4.0:
- A Memory should be able to accept multiple image/document uploads
- A User should be able to place `People` tags directly on an image (to specify individuals in a group)
- A User should be able to connect related memories with custom tag types (e.g. `College`, `Thanksgiving`, `Family` `Reunion`, etc.)

#### Version 5.0 *et al.*:
- A User should be able to form a mutual connect with other Users and view their Memories
- A User should be able to comment on a connected User's memories
- A User should be able to suggest `People` tags on a connected User's memories
- A User should be able to accept (add) or ignore (remove) `People` tags in their Memories that are suggested by other Users
- A User should be able to view a list of all connected memories with a specified People tag (i.e. all User-connected Memories tagged with `Jane Doe`)
- Integrate with Google Maps API to allow codified `Location` tags


# Resources
#### General Assembly Prompt & Templates
- https://git.generalassemb.ly/ga-wdi-boston/capstone-project
- https://git.generalassemb.ly/ga-wdi-boston/rails-api-template
- https://git.generalassemb.ly/ga-wdi-boston/react-auth-template

#### General Assembly Tutorials
- https://git.generalassemb.ly/ga-wdi-boston/rails-api-single-resource
- https://git.generalassemb.ly/ga-wdi-boston/rails-api-one-to-many
- https://git.generalassemb.ly/ga-wdi-boston/rails-heroku-setup-guide
- https://git.generalassemb.ly/ga-wdi-boston/react-crud
- https://git.generalassemb.ly/ga-wdi-boston/react-auth-template/tree/09/training
- https://git.generalassemb.ly/ga-wdi-boston/react-components-and-state
- https://git.generalassemb.ly/ga-wdi-boston/react-router
- https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide

#### Outside Resources
- https://reactjs.org/docs
- https://react-bootstrap.github.io
- https://guides.rubyonrails.org/
- https://help.github.com/en/github/managing-your-work-on-github/about-project-boards

#### Acknowledgments
- Special thanks to _**Eron Salling**_, _**Dan Fox**_, and _**Eric Hummel**_ for their expert assistance in React and Ruby on Rails during the development process.
