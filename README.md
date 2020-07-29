# Landmark Remark

## Brief

You are to create a simple mobile application – working title: “Landmark Remark” - that allows users to save location based notes on a map. These notes can be displayed on the map where they were saved and viewed by the user that created the note as well as other users of the application. The application must demonstrate the functionality captured in the following user stories:

1. As a user (of the application) I can see my current location on a map
2. As a user I can save a short note at my current location
3. As a user I can see notes that I have saved at the location they were saved on the map
4. As a user I can see the location, text, and user-name of notes other users have saved
5. As a user I have the ability to search for a note based on contained text or user-name

---

## MVP Checklist
- Render a map
- Obtain geolocation info
- Push info into database
  - User name
  - User note
- Search function. Results by name or note

---

## Build log
- Boiler plate template commenced. Strategy for tackling checklist planned.

---

## Thinking out loud
**Map functionality**
- I already have access rights and an API key for Bing Maps
- Should just use that to proceed

**Geolocation info**
- Obtainable through API. Not required for MVP
- Manual input of lat long
- Insert placeholders for testing purposes

**Database**
- PG database, can be hosted onto heroku
- Database structure:
  - User > Unique serial, Username, ~~Password~~
    - Secure password hashing not required for MVP
  - Notes > Location (lat, long), Note writer, Note content

**Search function**
- Read from database, return results that match
  - Remember to account for when no results returned

---

## React Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
