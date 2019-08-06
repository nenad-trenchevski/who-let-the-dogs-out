## NOTE
Some code is added only for demonstrating purposes, and might not be suitable for a real-world application

## Instructions
The development server can be run locally using NPM. This allows testing of the application's code locally.

No dependencies (other than [NodeJS](https://nodejs.org/)) are required on the host PC.

## Building and Running the Local Development Server
1. Ensure that Node.js is installed on the host PC (or Mac) - Supported version is 10.16.x but others might also work
2. In the terminal, go to root folder of the source (the folder containing this readme)
3. Run the following command from the terminal in order to install the necessary dependencies:
```
npm install
```
4. Wait a few seconds
5. To start the development server, run the following command:
```
npm start
```
6. Wait for the server to start
7. You should now be able to see the application running (at localhost:3000)

## Creating a Production Build
1. Running 'npm run build' creates a build directory with a production build of the app

## Docker
1. Ensure that Docker is installed on the host PC
2. To build and tag the Docker image use the following command:
```
docker build -t sample:dev .
```
3. To create a new container instance from the image created above, run
```
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev
```
4. You should now be able to see the application running (at http://localhost:3001/) - tested on Ubuntu

## Testing the App
1. To run the test, execute the following command:
```
npm test -- {theSpecFileYouWantToRun}
