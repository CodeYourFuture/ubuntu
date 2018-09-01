# ubuntu

Glasgow Graduation Project - Women Shelter system

## Getting started

1.  Add upstream repo `git@github.com:CodeYourFuture/ubuntu.git`
2.  Check if upstream has been added `git remote -v`
3.  Create branch `git checkout -b setup` Do everything in your branch

## Running the project locally

- If you have not done so, setup the database first so it runs locally as a process (See **Database** section below)
- First time (and then each time you update the schema) run `npm run recreate-db`
- Run `npm start` from top-level (root folder)

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

Start the DB: `sudo service postgresql start`

Switch to the `postgres` system user: `sudo -i -u postgres`

Launch postgresql client: `psql`

The first time you create the database, you will need to run these commands (three of them separately) in `psql`

```sql
DROP ROLE IF EXISTS cyf;
```

```sql
CREATE USER cyf WITH PASSWORD 'password';
```

```sql
CREATE DATABASE ubuntu OWNER cyf;
```

You can verify role has been added correctly: `\du`
Switch to ubuntu DB: `\c ubuntu`

Command for getting into ubuntu database directly as the `cyf` user `psql -U cyf ubuntu`

## Updating DB schema

We use `knex` for changing the DB schema

[knex](https://knexjs.org/)

Schema file you need to change the DB: `server/migrations/20180811161248_base-schema.js`

Once you change it run: `npm run recreate-db`
