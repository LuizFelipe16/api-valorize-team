![Banner](/assets/banner.png)

<br/>

# API Valorize Team

### A good team is a united team, in which each of the participants knows their importance to the project, but it's hard to talk openly about other people's positive points, but that's the idea of this project. An api for users (people from the team) to register and share positive tags so everyone can give praise to a certain person.

<br/>
<br/>

[![PyPi license](https://badgen.net/pypi/license/pip/)](https://pypi.com/project/pip/) ![Badge](https://img.shields.io/static/v1?label=MadeWith&message=TypeScript&color=OO7accstyle=for-the-badge&logo=ghost) ![Badge](https://img.shields.io/static/v1?label=Usage&message=NodeJS&color=007accstyle=for-the-badge&logo=ghost) [![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/releases/)

<br/>
<br/>

🛠 Technologies
=================
The following tools were used in building the project:

- 👉 [TypeScript](https://www.typescriptlang.org/)
- 👉 [TypeORM](https://typeorm.io/)
- 👉 [SQLite](https://www.sqlite.org/docs.html)
- 👉 [Express](https://expressjs.com/pt-br/)
- 👉 [Cors](https://github.com/expressjs/cors)
- 👉 [uuid](https://www.npmjs.com/package/uuid)
- 👉 [JWT](https://jwt.io)
- 👉 [Bcrypt](https://www.npmjs.com/package/bcrypt)

<br/>

<p align="center">
  🤖 Project Status 🚀 Complete! 🤖
</p>
<br/>

Getting Started
=================

These instructions will get you a copy of the full project up and running on your local machine for development and testing purposes.

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't have any installed on your system.

- Npm is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Node.js](https://nodejs.org/en/)

- Yarn is a package manager built by Facebook Team and seems to be faster than npm in general.

<br/>

Features 
=================
<br/>

- ✅ API Rest;
- ✅ Node server running with mini express framework;
- ✅ SQLite Database (which can be changed);
- ✅ Database tables created by migrations;
- ✅ Mapping database tables with TypeORM;
- ✅ Generate id from database information manually with uuid;
- ✅ User registration, tags and compliments;
- ✅ User listing, tags and compliments;
- ✅ Email User Authentication with JWT Token;
- ✅ Authentication middleware implementation;
- ✅ Middleware for validation of administrator users;
- ✅ Implementation business rules:

<br/>

Business Rules
=================

- User registration:

   - `No` is allowed to register more than one user with the same email;

   - `No` is allowed to register user without e-mail.

- Registration of TAGs:

   - `No` is allowed to register more than one tag with the same name;

   - `No` is allowed to register tag without name;

   - `No` is allowed to register by users who are not administrators.

- Registration of compliments:

   - `No` is allowed a user to register a compliment for himself;

   - `No` is allowed to register compliments for invalid users;

   - The user must be authenticated in the application.


<br/>

How to Install
=================

- To download the project follow the instructions bellow:

```bash
1. git clone
2. cd api-valorize-team
```

- Install the dependencies and start:

```bash
3. yarn
4. yarn dev
```
- or

```bash
3. npm install
4. npm run dev
```

- Have fun just like me while programming

<br/>

API Documentation
=================

- under construction...

<br/>

Author
=================

Luiz Felipe S. Felizatti 🎯 

Contact:

- [Linkedin](https://www.linkedin.com/in/luiz-felipe-siqueira-felizatti-00783a1ab/)

- [Instagram](https://www.instagram.com/luiz_2fs/)
