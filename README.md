# Karvi API
This is an Application developed with NodeJS & TypeScript.
The project is based on this [documentation](https://marshy-ravioli-b6a.notion.site/Backend-9d829cc916bf4500ae658e18e782d5ad)

## Installation
1) Download or Clone the project locally
2) Use the package manager [npm](https://www.npmjs.com/) to install dependencies;
```bash
npm install
```

## Run server
Once the dependencies are installed, run the project locally with this command
```bash
npm run dev
```
You'll see the message: *"Server is running on port 1000"*. (In case you need to change the port, you can do it on this file *"src\app.ts"*)

## Usage
Once the server is running, you'll have two endpoints available to use.
1) (GET Request) http://localhost:1000/karvi/cars
2) (GET Request) http://localhost:1000/karvi/filteredCars

Is mandatory to use the following configuration;
1) The parameter *site* for both endpoints, and also *ids* for the second one.
2) The header *api-key* whose value is the provided in the documentation.

Here, you have a collection link, ready to import in postman: https://www.getpostman.com/collections/cd50d0f55737581be531

## Production
The project is also deployed in Heroku, you can refer to this host to use both endpoints as well: https://karviwh.herokuapp.com/karvi

In case you need support, just let me know.


