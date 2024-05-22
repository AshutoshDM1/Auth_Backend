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
| Vercel | Vercel  | To Deploy Project in Vercel  |

### All Data You get or post on Routes should be in JSON 

## User Routes 
###Here you can signup , login , signout , and 

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


