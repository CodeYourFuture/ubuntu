# ubuntu
Glasgow Graduation Project - Women Shelter system

## Getting started

1.  Add upstream repo `git@github.com:CodeYourFuture/ubuntu.git`
2.  Check if upstream has been added `git remote -v`

- Locally, run `npm run dev` from `server` directory to have hot reload.

3.  Create branch `git checkout -b setup` Do everything in your branch
4.  Create a new react app `create-react-app client`
5.  Do
    `cd client`
    `npm start`
6.  Lets commit everything
    stage `git add .`
    commit `git commit -m "setup react app"`
    push : `git push origin setup`
7.  Open pull request
8.  The rest team members should pull from upstream `git pull upstream master`
9.  Create a new branch `git check -b setupserver`
10. create a folder with the name `server`
11. Go inside server and install package.json `npm init` and follow the command
12. install express `npm install express -- save`
13. create `app.js` file within the server folder
14. Paste some code inside the app.js, code can be found `http://expressjs.com/en/starter/hello-world.html`

```js
const SERVER_PORT = process.env.PORT || 3000
const express = require(‘express’)
const app = express()

app.get(‘/’, (req, res) => res.send(‘Hello World!’))

app.listen(SERVER_PORT, () => console.log(‘Example app listening on port 3000!’))
```

15. open the app `node app.js`
16. Go to package.json and add this code to script `"start": "node app.js"`
17. Install nodemon `npm install --save-dev nodemon`
18. Add Alias `"npm run dev": "nodemon app.js`
19. Run `npm install --save body-parser cors express-handlebars knex pg sqlite3`
20. Change the test exit in package.json from 1 to 0
21. Commit, push and create pull request
22. add this code to package.json script
    `"migrate": "knex migrate:latest && knex seed:run",`
    `"create-migration": "knex migrate:make $1",`
    `"create-seed": "knex seed:make $1"`
23. run `./node_modules/.bin/knex init` in `server` folder in terminal
24. run `npm run create-migration status` then
    `npm create-seed status`
25. copy paste this

```js // Update with your config settings.
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}``
26. copy paste this
`` js exports.up = function (knex, Promise) {
  return knex.raw(
    `
    CREATE  TABLE status (
        status varchar(200)
    )
    `
  )
}

exports.down = function (knex, Promise) { }``
27. copy paste this
``js exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('status').del().then(function () {
    // Inserts seed entries
    return knex('status').insert([{ status: 'OK' }])
  })
} ``
```

## Workflow

Our workflow is a variation of [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html)

1.  Pick a card from trello (assign it to yourself and make sure there is enough description)

2.  Locally, switch to `master`, then `git pull upstream master`. NOTE: If you get a merge message, that means you made a mistake and you worked on `master` by accident. Clean your master (i.e. `git reset --hard previous_commit` - ask a mentor to help)

3.  Create a branch based on the story `git checkout -b feature-title`.

If you're working on a feature for _adding a student_, then name the branch `add-student` for example.

4.  Work on the branch (add, commit and push)

5.  Create a Pull Request when you are finished.

6.  Repeat.

# Database

The first time you create the database, you will need to run these commands (three of them separately) in `postgres`

```sql
DROP ROLE IF EXISTS cyf;
```

```sql
CREATE USER cyf WITH PASSWORD 'password';
```

```sql
CREATE DATABASE ubuntu OWNER cyf;
```

Command for getting into ubuntu database `psql -U cyf ubuntu`

## Migrations

We use `knex` for migrations, but we created alias helpers on `package.json` to make it easier to run the commands.

[knex](https://knexjs.org/)

1.  Create a migration `npm run create-migration table_name`
2.  Create a seed `npm run create-seed table_name`
