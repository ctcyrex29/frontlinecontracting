# Frontline Contracting Admin Dashboard

A secure admin dashboard for managing the Frontline Contracting website content and analytics.

## Features

### 🔐 Security
- **Password Protection**: Secure login system with session management
- **Session Timeout**: Automatic logout after 24 hours of inactivity
- **Input Validation**: XSS protection and data sanitization
- **Token-based Authentication**: Secure session tokens

### 📊 Analytics Dashboard
- **Visitor Statistics**: Total visits, unique visitors, page views
- **Interactive Charts**: Visitor traffic, page views, traffic sources, device types
- **Popular Pages**: Most viewed pages on the website
- **Recent Activity**: Real-time activity tracking
- **Contact Inquiries**: Track form submissions

### 🖼️ Portfolio Management
- **Add New Projects**: Create new portfolio items with images and details
- **Edit Projects**: Update existing project information
- **Delete Projects**: Remove projects from the portfolio
- **Image Management**: Support for multiple images per project
- **Category Filtering**: Organize projects by category

### ⚙️ Settings
- **Password Management**: Change admin password securely
- **Website Settings**: Update site title, contact email, and phone
- **Data Persistence**: All changes saved to localStorage

## Access Information

### Default Login Credentials
- **Username**: `admin`
- **Password**: `frontline2024`

⚠️ **Important**: Change the default password immediately after first login for security.

### Access URL
Navigate to `/admin/index.html` to access the dashboard.

## Setup Instructions

1. **Access the Dashboard**
   - Open your browser and go to `yourdomain.com/admin/index.html`
   - Enter the default credentials: `admin` / `frontline2024`

2. **Change Default Password**
   - Go to Settings → Change Password
   - Enter current password: `frontline2024`
   - Enter new secure password (minimum 8 characters)
   - Confirm new password

3. **Configure Website Settings**
   - Go to Settings → Website Settings
   - Update site title, contact email, and phone number
   - Save changes

4. **Add Portfolio Projects**
   - Go to Portfolio Management
   - Click "Add New Project"
   - Fill in project details:
     - Title
     - Category (Construction, Infrastructure, Residential, Commercial)
     - Description
     - Location
     - Completion Date
     - Image URLs (one per line)
     - Challenges & Solutions
   - Save project

## Security Best Practices

### Password Security
- Use a strong password (minimum 8 characters)
- Include uppercase, lowercase, numbers, and special characters
- Change password regularly
- Never share credentials

### Session Management
- Logout when finished using the dashboard
- Don't leave the dashboard open on shared computers
- Sessions automatically expire after 24 hours

### Data Protection
- All data is stored locally in the browser
- No data is transmitted to external servers
- Regular backups recommended for important data

## File Structure

```
admin/
├── index.html          # Main admin dashboard
├── admin.css           # Admin dashboard styles
├── admin.js            # Admin dashboard functionality
└── README.md           # This file
```

## Technical Details

### Data Storage
- **localStorage**: All data is stored in the browser's localStorage
- **Portfolio Data**: `portfolioData` key in localStorage
- **Analytics Data**: `analyticsData` key in localStorage
- **Admin Settings**: `adminPassword` and `websiteSettings` keys

### Analytics Tracking
The dashboard automatically tracks:
- Page views on all website pages
- Contact form submissions
- Visitor statistics
- Popular pages

### Integration
- Portfolio changes automatically update the main website
- Analytics data is collected from all website pages
- Real-time updates without page refresh

## Troubleshooting

### Can't Access Dashboard
- Check if you're using the correct URL: `/admin/index.html`
- Verify login credentials
- Clear browser cache and try again

### Portfolio Not Updating
- Refresh the portfolio page after making changes
- Check browser console for errors
- Verify localStorage is enabled in your browser

### Analytics Not Working
- Ensure JavaScript is enabled
- Check if localStorage is available
- Verify the tracking functions are loaded on all pages

## Support

For technical support or questions about the admin dashboard:
- Contact: info@frontlinecontracting.net
- Phone: 00263-242-797241

## Security Notes

⚠️ **Important Security Considerations**:

1. **Production Deployment**: 
   - Change default credentials immediately
   - Consider implementing server-side authentication
   - Use HTTPS for secure data transmission

2. **Data Backup**:
   - Regularly export important data
   - Consider implementing automated backups
   - Store backup data securely

3. **Access Control**:
   - Limit access to authorized personnel only
   - Monitor login attempts
   - Implement IP restrictions if needed

4. **Updates**:
   - Keep the dashboard updated
   - Monitor for security vulnerabilities
   - Regular security audits recommended

## Version Information

- **Version**: 1.0.0
- **Last Updated**: January 2024
- **Compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Requirements**: JavaScript enabled, localStorage support 