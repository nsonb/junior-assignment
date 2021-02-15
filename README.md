# Junior Assignment

This project was bootstrapped with create-react-app. (https://github.com/facebook/create-react-app) and typechecked\
using typescript.

## Project detail

The goal of the application is to fetch information from the provided api and display it on the web browser\
under specified conditions. The application is coded to be responsive with its minimum screen width scaling\
down to 280p. The design of the application is minimal and uses minimal aesthetics to accentuate on the core\
information without too much details.

### useContainerDimensions
To help with the responsiveness of the application, useContainerDimensions is another custom hook used to detect the change\
in width of the component and helps with conditional rendering of the components. It is still not working correctly yet and needs\
further development but it is working adequately in the confine of this application.

### User input
The user input includes <input type = 'date'> (startDate and endDate) which allows for easy picking up date from\
a drop down calendar. The calendar itself is browser-dependant so how it works can vary between browsers.\
The allowed range for the date input is from 2017-05-01 to 2017-06-15, whereas start_date cannot go later than\
end_date and vice versa.
Another input is the token, which only allows people with api key to access the information. The fetch happens\
simultaneously with the user's typing, but is throttled by only fetching after the user has stopped fetching for\
1 second to limit the number of requests to the api server.

### useLocalStorage
The user input is stored in localStorage by using the useLocalStorage custom hook. The stored value is remembered\
and displayed upon starting up application, and the data is fetched and shown immediately. The code for the useLocalStorage\
custom hook can be checked out at /src/hooks/useStoredData.tsx

### Graph
The graph is rendered using victory (https://formidable.com/open-source/victory/) using data fetched from the server.

## Starting the project

To start the project, use `npm install` to install all dependencies necessary for the application to run.\
The simply type `npm start` in the console, this will start the application in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view.

## Test

The project utilizes jest (which is already included during the create-react-app). At the current state,\
the test is only used for the useStoredData custom hook in the project. The test can be viewed under\
/src/__test__/useDate.test.tsx.

To start the test, use `npm test` in the console.

## Deployment and Production

The application utilizes vercel to deploy a demo production build, which can be viewed here:/
https://job-assignment-l3k1445fe.vercel.app/



