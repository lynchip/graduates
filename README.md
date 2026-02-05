# Graduates.com.br - English Teaching Landing Page

A professional landing page for English conversation classes, designed for Brazilian professionals seeking to improve their communication skills.

## About

This website promotes bilingual English teaching services, specializing in:
- Conversation practice for intermediate to advanced students
- Business English for professionals
- Customized learning focused on practical communication
- Classes conducted via Zoom

## Teacher Profile

- Native English speaker
- Fluent in Brazilian Portuguese
- 6+ years of experience teaching Brazilian professionals
- 24+ years living in Brazil
- Background in Science, Project Management, HR, and Intellectual Property

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Framework**: Bootstrap 5
- **Forms**: Smart Forms
- **Animations**: AOS (Animate On Scroll)
- **Analytics**: Google Tag Manager
- **Hosting**: GitHub Pages
- **Additional**: HTMX for dynamic interactions

## Local Development

1. Clone this repository:
```bash
git clone https://github.com/YOUR-USERNAME/graduates.git
cd graduates
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## Deployment to GitHub Pages

### First-time Setup

1. Create a new repository on GitHub (name it `graduates` or similar)

2. Initialize git in your local folder:
```bash
git init
git add .
git commit -m "Initial commit: English teaching landing page"
```

3. Connect to GitHub and push:
```bash
git remote add origin https://github.com/YOUR-USERNAME/graduates.git
git branch -M main
git push -u origin main
```

4. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under "Source", select **main** branch
   - Click **Save**

5. Configure custom domain (graduates.com.br):
   - In the same Pages settings, enter `graduates.com.br` in the "Custom domain" field
   - Click **Save** (this creates the CNAME file)
   - Add DNS records at your domain registrar:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     
     Type: A
     Name: @
     Value: 185.199.109.153
     
     Type: A
     Name: @
     Value: 185.199.110.153
     
     Type: A
     Name: @
     Value: 185.199.111.153
     
     Type: CNAME
     Name: www
     Value: YOUR-USERNAME.github.io
     ```

### Future Updates

To update the site:
```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically rebuild and deploy your site within a few minutes.

## File Structure

```
graduates/
├── index.html              # Main landing page
├── contato.html           # Contact form page
├── confirmed.html         # Form submission confirmation
├── manifest.json          # PWA manifest
├── robots.txt            # Search engine directives
├── ads.txt               # Ad platform authentication
├── app-ads.txt           # Mobile ad authentication
├── CNAME                 # Custom domain configuration
├── assets/
│   ├── bootstrap/        # Bootstrap framework
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   └── img/              # Images
└── README.md             # This file
```

## Contact Form

The contact form uses Smart Forms for submission. Make sure to configure your form endpoint in [contato.html](contato.html).

## SEO Optimization

The site includes:
- Semantic HTML structure
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Structured data (Schema.org)
- Sitemap-friendly structure
- Mobile-responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2000-2026 Michael's English Classes - All rights reserved

## Contact

For classes or inquiries, visit [graduates.com.br](https://graduates.com.br) and use the contact form.
