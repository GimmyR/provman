# ProvMan

## Prerequisites

* **PHP** version **8.1.2**
* **Composer** version **2.5.8**
* **Symfony CLI** version **5.7.3**
* **Node** version **18.18.0**
* **NPM** version **9.7.1**
* **Postgres** version **14.9**

## Environment variables

The environment variables that must be supplied are :

* *DATABASE_URL*

## Dependency installation

Run commands `composer install` and `npm install`.

## Create the database and the tables

* Run the command `php bin/console doctrine:database:create` to create the database.
* Then, run `php bin/console doctrine:migrations:migrate` for making migration.

## Seed the database

* Go to `/seeding/state` on a browser to seed database with the correct states.
* I didn't create yet the sign up functionality then edit *src/Controller/SeedingController.php* as you want and go to `/seeding/user` on a browser to seed database with the correct user.

## Server launch

* Run the command `symfony server:start`.
* If you are in developement mode, run the command `npm run watch` on another terminal.

## Build Front-End part for production

Run the command `npm run build`.