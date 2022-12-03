# knex-migration

Used for maintaining knex migration scripts on relational database.

## Getting Started

Make sure you have `knex` installed globally, so you can call the knex cli command.

```bash
$ npm i knex -g
```

Alternatively you can call knex cli command by accessing the binary in `node_modules` after installing it locally.

```bash
$ ./node_modules/knex/bin/cli.js -V
```

Install modules.

```bash
$ npm i
```

Set the environment variables, the example can be found at `.env.example` file.

## Migration

1. Make sure you have already done with the above steps.
2. List all migrations files with status.

```bash
$ knex migrate:list
```

4. Run all migrations that have not yet been run.

```bash
$ knex migrate:latest
```

5. Add a new migration script.

```
$ knex migrate:make migration_name
```

6. Write your migration script to the newly created migration file in the `migrations` folder.

7. Run the next, or the specified migration that has not yet been run.

```bash
$ knex migrate:up

# or

$ knex migrate:up 001_migration_name.js
```

8. Undo the last, or the specified migration that was already run.

```bash
$ knex migrate:down

# or

$ knex migrate:down 001_migration_name.js
```

## Seed

1. Add a new seed script.

```
$ knex seed:make seed_name
```

2. Write your seed script to the newly created migration file in the `seeds` folder.

3. Seed files are executed in alphabetical order. Unlike migrations, every seed file will be executed when you run the command.

4. Run all or the specified seed file.

```bash
$ knex seed:run

# or

$ knex seed:run --specific=seed-filename.js
```

## Some References

For more information consult the web documentation or CLI help.

```bash
knex --help
```

- [Knex migration](http://knexjs.org/#Migrations)
- [Migration example#1](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261)
- [Migration example#2](https://www.heady.io/blog/knex-migration-for-schema-and-seeds-with-postgresql)
