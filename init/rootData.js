const rootdata = {
  auth_backend: {
    keyFeatures: {
      userAuthentication: {
        description: "User signup and login functionality.",
        features: [
          "Password hashing and verification using bcrypt.",
          "JWT (JSON Web Token) based authentication.",
        ],
      },
      userManagement: {
        description:
          "Routes for creating, reading, updating, and deleting user data.",
        features: ["Middleware for user validation and authentication."],
      },
      security: {
        description: "HTTPS support for secure communication.",
        features: [
          "Environment configuration for managing sensitive information like JWT secret keys.",
        ],
      },
      databaseIntegration: {
        description: "MongoDB for data storage.",
        features: ["Mongoose for schema definition and data validation."],
      },
    },
    userRoutes: {
      description: "Here you can signup, login, signout, and more.",
      routes: [
        {
          routeName: "/",
          requestType: "GET",
          url: "https://auth-backend-dm.vercel.app/",
          need: "Nothing",
          get: "Welcome message",
        },
        {
          routeName: "/v1/user/signup",
          requestType: "POST",
          url: "https://auth-backend-dm.vercel.app/v1/user/signup/",
          need: "Username, email, password, gender",
          get: "Success Message",
        },
        {
          routeName: "/v1/user/login",
          requestType: "POST",
          url: "https://auth-backend-dm.vercel.app/v1/user/login/",
          need: "Existing Username, Password",
          get: "Success Message",
        },
        {
          routeName: "/v1/user/signout",
          requestType: "GET",
          url: "https://auth-backend-dm.vercel.app/v1/user/signout/",
          need: "Username, Password",
          get: "Success Message",
        },
        {
          routeName: "/v1/user/users",
          requestType: "GET",
          url: "https://auth-backend-dm.vercel.app/v1/user/users/",
          need: "JWT token",
          get: "All Users Data",
        },
      ],
    },
    postRoutes: {
      description: "This route is designed like a chat app.",
      routes: [
        {
          routeName: "/v1/user/chat/post",
          requestType: "GET",
          url: "https://auth-backend-dm.vercel.app/v1/user/chat/post",
          need: "JWT token",
          get: "All posts",
        },
        {
          routeName: "/v1/user/chat/post",
          requestType: "POST",
          url: "https://auth-backend-dm.vercel.app/v1/user/chat/post",
          need: "JWT token, Username, title, message",
          get: "Success Message, your post",
        },
        {
          routeName: "/v1/user/chat/post/:id",
          requestType: "GET",
          url: "https://auth-backend-dm.vercel.app/v1/user/chat/post/:id",
          need: "JWT token, postId",
          get: "Post",
        },
        {
          routeName: "/v1/user/chat/post/:id",
          requestType: "PUT",
          url: "https://auth-backend-dm.vercel.app/v1/user/chat/post/:id",
          need: "JWT token, postId, new title and message",
          get: "Success Message, New Post",
        },
        {
          routeName: "/v1/user/chat/post/:id",
          requestType: "DELETE",
          url: "https://auth-backend-dm.vercel.app/v1/user/chat/post/:id",
          need: "JWT token, postId",
          get: "Success Message",
        },
        {
          routeName: "/v1/user/chat/deleteAllPosts",
          requestType: "DELETE",
          url: "https://auth-backend-dm.vercel.app/v1/user/chat/deleteAllPosts",
          need: "JWT token",
          get: "Success Message",
        },
      ],
    },
  },
};

module.exports = { rootdata };
