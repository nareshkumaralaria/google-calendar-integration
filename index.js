import express from 'express';
import 'dotenv/config';
import { GoogleCalendarInitView, GoogleCalendarRedirectView } from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 9002;

// Step 1: Start OAuth flow - Prompt user for credentials
app.get('/rest/v1/calendar/init/', GoogleCalendarInitView);

// Step 2: Handle redirect requests from Google
app.get('/rest/v1/calendar/redirect/', GoogleCalendarRedirectView);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
});