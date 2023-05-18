# Google Calendar Integration using REST API
This project demonstrates the integration of Google Calendar using the REST API and OAuth2 authentication mechanism.


## How to run this project locally


### Installation

- Clone the repository to your local machine:
```bash
git clone https://github.com/nareshkumaralaria/google-calendar-integration.git

```
- Navigate to the project directory:
```bash
cd google-calendar-integration

```

- Install the dependencies:
```bash
npm install

```
### Usage
- Obtain your Google OAuth2 client credentials by following these steps:

```bash
1. Go to the Google Cloud Console: https://console.cloud.google.com/
2. Create a new project or select an existing project.
3. Enable the Google Calendar API for the project.
4. Configure the OAuth consent screen with the necessary details.
5. Create OAuth credentials (Web application) and note down the Client ID.
```

- Update the `CLIENT_ID`, `CLIENT_SECRET`, and `REDIRECT_URL` in the code (`.env` file) with your own credentials obtained from the Google Cloud Console.

- Start the development server:
```bash
node start

```

- Open your web browser and navigate to http://localhost:9002/rest/v1/calendar/init to initiate the OAuth2 flow and grant access to your Google Calendar.

- Once you grant access, you will be redirected to http://localhost:3000/rest/v1/calendar/redirect, and the browser will display the list of events (JSON format) from your Google Calendar.


## Demo video


https://github.com/nareshkumaralaria/google-calendar-integration/assets/57484597/9a2f5a66-9324-48da-ba99-0e06cf01d1b2



## Explanation of Code
- The `GoogleCalendarInitView` endpoint (`/rest/v1/calendar/init`) starts the OAuth2 flow by redirecting the user to the Google login page to grant access to their calendar.

- The `GoogleCalendarRedirectView` endpoint (`/rest/v1/calendar/redirect`) handles the redirect from Google after authentication. It exchanges the authorization code for an access token and retrieves the user's calendar events using the Google Calendar API.


## Authors

- [@nareshkumaralaria](https://github.com/nareshkumaralaria) (Naresh Kumar)
