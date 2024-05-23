# Auth_Bankend Project

## Tech Stack

| TechStack Used in this Project | Work |
| -------- | -------- |
| NodeJs  | Server Side Language |
| ExpressJs | To Http Server |
| Zod | To Validate Data  |
| Bcrypte | To Hashing/Encrypting Password  |
| JsonWebToken | To Generate Token and Validate Token  |
| MongoDB  | To Store Data in Database  |
| Mongooes | To Create Schema  |
| Vercel | Deploy Project in Vercel  |

### All Data You get or post on Routes should be in JSON 

## Auth Backend User Interaction Map

![Auth Backend Map](https://i.postimg.cc/Hp9hSRKv/auth-backend-map.png)

## User Routes 
### Here you can signup , login , signout , and 

| Route Name | Request Type | URL | Need | Get |
| -------- | -------- | -------- | --------- | -------- |
| / | Get | [https://auth-backend-dm.vercel.app/](https://auth-backend-dm.vercel.app) | Nothing  | welcome message |
| /v1/user/signup | Post | [https://auth-backend-dm.vercel.app/v1/user/signup/](https://auth-backend-dm.vercel.app/v1/user/signup) | Username , email , password , gender | Success Message |
| /v1/user/login | Post | [https://auth-backend-dm.vercel.app/v1/user/login/](https://auth-backend-dm.vercel.app/v1/user/login) | exsting Username , Password | Success Message |
| /v1/user/signout | Get | [https://auth-backend-dm.vercel.app/v1/user/signout/](https://auth-backend-dm.vercel.app/v1/user/signout) | Username , Password | Success Message |
| /v1/user/users | Get | [https://auth-backend-dm.vercel.app/v1/user/users/](https://auth-backend-dm.vercel.app/v1/user/users) | JWT token | All Users Data |



## Post Routes
### This Route is Designed like a Chat App

| Route Name | Request Type | URL | Need | Get |
| -------- | -------- | -------- | --------- | -------- |
| /v1/user/chat/post | Get | [https://auth-backend-dm.vercel.app/v1/user/chat/post](https://auth-backend-dm.vercel.app/v1/user/chat/post) | JWT token ,   | All posts |
| /v1/user/chat/post | Post | [https://auth-backend-dm.vercel.app/v1/user/chat/post](https://auth-backend-dm.vercel.app/v1/user/chat/post) | JWT token ,Username ,title, message   | Success Message , your post |
| /v1/user/chat/post/(id) | Get | [https://auth-backend-dm.vercel.app/v1/user/chat/post/:id](https://auth-backend-dm.vercel.app/v1/user/chat/post/:id) | JWT token , postId | Post |
| /v1/user/chat/post/(id) | Put | [https://auth-backend-dm.vercel.app/v1/user/chat/post/:id](https://auth-backend-dm.vercel.app/v1/user/chat/post/:id) | JWT token , postId , new title and msg | Success Message , NewPost |
| /v1/user/chat/post/(id) | delete | [https://auth-backend-dm.vercel.app/v1/user/chat/post/:id](https://auth-backend-dm.vercel.app/v1/user/chat/post/:id) | JWT token , postId | Succes Msg |
| /v1/user/chat/deleteAllPosts | delete | [https://auth-backend-dm.vercel.app/v1/user/chat/deleteAllPosts](https://auth-backend-dm.vercel.app/v1/user/chat/deleteAllPosts) | JWT token | Succes Msg |


## Auth Backend Working map

![Auth Backend Working Map](https://i.postimg.cc/mgXFkbk6/auth-backend-working-map.png)


## Key Features

### User Authentication:
User signup and login functionality.
Password hashing and verification using bcrypt.
JWT (JSON Web Token) based authentication.
### User Management:
Routes for creating, reading, updating, and deleting user data.
Middleware for user validation and authentication.
### Security:
HTTPS support for secure communication.
Environment configuration for managing sensitive information like JWT secret keys.
### Database Integration:
MongoDB for data storage.
Mongoose for schema definition and data validation.



