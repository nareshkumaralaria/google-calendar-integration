import { google } from 'googleapis';
import 'dotenv/config';

const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);

const GoogleCalendarRedirectView = async (req, res) => {
    const code = req.query.code;

    try {
        // Exchange authorization code for access token
        const { tokens } = await oauth2Client.getToken(code);

        // Set the access token on the OAuth2 client
        oauth2Client.setCredentials(tokens);

        // Get a list of events in the user's calendar using the access token
        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
        const eventsResponse = await calendar.events.list({
            calendarId: 'primary'
        });

        const events = eventsResponse.data.items;

        // Do something with the events (e.g., send them as the API response)
        res.json(events);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('An error occurred');
    }
}

export default GoogleCalendarRedirectView;