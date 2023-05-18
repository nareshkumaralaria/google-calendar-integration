import { google } from 'googleapis';
import 'dotenv/config';

const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);

const GoogleCalendarInitView = async (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
        scope: ['https://www.googleapis.com/auth/calendar.readonly']
    });
    res.redirect(authUrl);
}

export default GoogleCalendarInitView;