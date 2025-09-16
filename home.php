<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="icon" type="image/png" href="resources/logo/logo300.png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Frontline Construction - Reliable and innovative construction company specializing in residential and commercial projects. Quality workmanship, timely delivery, and customer satisfaction.">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'; img-src 'self' data: https:; frame-src 'self' https://www.google.com; connect-src 'self';">
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
    <meta http-equiv="X-XSS-Protection" content="1; mode=block">
    <meta http-equiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains">
    <title>Frontline Construction - Quality Construction Services</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>

    <?php
    include "includes/head.php";

    ?>
    <main>
        <section class="map-section" style="margin: 40px 0; text-align: center;">
            <h2>Our Location</h2>
            <div style="width:100%;max-width:600px;margin:0 auto;">
                <iframe
                    src="https://www.google.com/maps?q=9th+Floor+BARD+House,+69+Samora+Machel+Ave,+Harare,+Zimbabwe&output=embed"
                    width="100%" height="350" style="border:0; border-radius: 8px;"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1>Get Your Construction Done By The Best In The Business</h1>
                    <p>Frontline Contracting delivers exceptional quality, innovative solutions, and unmatched reliability for all your construction needs locally and internationally.</p>
                    <div class="hero-buttons">
                        <a href="contact.html" class="btn btn-primary">Call Now: 00263-242-797241</a>
                        <a href="portfolio.html" class="btn btn-secondary">View Our Work</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Overview -->
        <section class="services-overview">
            <div class="container">
                <div class="section-header">
                    <h2>Our Services</h2>
                    <p>Comprehensive construction solutions tailored to your needs</p>
                </div>
                <div class="services-grid">
                    <div class="service-card">
                        <div class="service-icon">🏗️</div>
                        <h3>Construction Equipment</h3>
                        <p>State-of-the-art equipment providing flexibility to maximize project results.</p>
                        <a href="services.html#equipment" class="learn-more">Learn More →</a>
                    </div>
                    <div class="service-card">
                        <div class="service-icon">🏠</div>
                        <h3>Houses</h3>
                        <p>Residential construction with a culture that promotes injury-free environments and safety.</p>
                        <a href="services.html#houses" class="learn-more">Learn More →</a>
                    </div>
                    <div class="service-card">
                        <div class="service-icon">🛣️</div>
                        <h3>Infrastructure</h3>
                        <p>Roads and bridges construction ensuring all infrastructure is nicely done.</p>
                        <a href="services.html#infrastructure" class="learn-more">Learn More →</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us -->
        <section class="why-choose-us">
            <div class="container">
                <div class="section-header">
                    <h2>Why Choose Frontline Construction?</h2>
                    <p>We stand out for our commitment to excellence and customer satisfaction</p>
                </div>
                <div class="features-grid">
                    <div class="feature">
                        <div class="feature-icon">🤝</div>
                        <h3>Integrity</h3>
                        <p>We do the right thing for our clients and employees. We do what we say.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">💰</div>
                        <h3>Viability</h3>
                        <p>We provide great value for a fair return. We strategically re-invest our profits.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">⭐</div>
                        <h3>Client Satisfaction</h3>
                        <p>We listen, we build trusting relationships and we stand behind our work.</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🛡️</div>
                        <h3>Safety First</h3>
                        <p>Our sincere conviction is that the only way to work is to work safely.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Projects -->
        <section class="featured-projects">
            <div class="container">
                <div class="section-header">
                    <h2>Featured Projects</h2>
                    <p>Take a look at some of our recent work</p>
                </div>
                <div class="projects-grid">
                    <div class="project-card">
                        <div class="project-image">
                            <img src="assets/images/project1.jpg" alt="Modern Residential Home">
                        </div>
                        <div class="project-content">
                            <h3>Modern Residential Home</h3>
                            <p>Custom 3-bedroom home with contemporary design and sustainable features.</p>
                            <span class="project-category">Residential</span>
                        </div>
                    </div>
                    <div class="project-card">
                        <div class="project-image">
                            <img src="assets/images/project2.jpg" alt="Commercial Office Building">
                        </div>
                        <div class="project-content">
                            <h3>Commercial Office Building</h3>
                            <p>State-of-the-art office complex with modern amenities and energy-efficient design.</p>
                            <span class="project-category">Commercial</span>
                        </div>
                    </div>
                    <div class="project-card">
                        <div class="project-image">
                            <img src="assets/images/project3.jpg" alt="Kitchen Renovation">
                        </div>
                        <div class="project-content">
                            <h3>Kitchen Renovation</h3>
                            <p>Complete kitchen transformation with custom cabinets and modern appliances.</p>
                            <span class="project-category">Renovation</span>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <a href="portfolio.html" class="btn btn-primary">View All Projects</a>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section">
            <div class="container">
                <div class="cta-content">
                    <h2>Ready to Start Your Project?</h2>
                    <p>Let's discuss your construction needs and bring your vision to life.</p>
                    <a href="contact.html" class="btn btn-primary">Contact Us Today</a>
                </div>
            </div>
        </section>
    </main>

    <?php
    include "includes/foot.php";
    ?>

    <script src="assets/js/script.js"></script>
</body>

</html>