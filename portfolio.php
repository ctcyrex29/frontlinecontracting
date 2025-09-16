<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" type="image/png" href="resources/logo/logo300.png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="View our portfolio of completed construction projects including residential homes, commercial buildings, and renovations. Quality workmanship showcased.">
    <title>Portfolio - Frontline Construction</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="container">
                <div class="logo">
                    <a href="index.html" style="display: flex; align-items: center; text-decoration: none;">
                        <img src="resources/logo/logo300.png" alt="Frontline Contracting Pvt Ltd Logo" style="height:40px; width:auto; margin-right:10px;">
                        <h2 style="margin:0; color:var(--primary-blue);">Frontline Contracting Pvt Ltd</h2>
                    </a>
                </div>
                <ul class="nav-menu">
                    <li><a href="index.html" class="nav-link">Home</a></li>
                    <li><a href="about.html" class="nav-link">About Us</a></li>
                    <li><a href="services.html" class="nav-link">Services</a></li>
                    <li><a href="portfolio.html" class="nav-link active">Portfolio</a></li>
                    <li><a href="testimonials.html" class="nav-link">Testimonials</a></li>
                    <li><a href="blog.html" class="nav-link">Blog</a></li>
                    <li><a href="contact.html" class="nav-link">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <!-- Page Header -->
        <section class="page-header">
            <div class="container">
                <h1>Our Portfolio</h1>
                <p>Showcasing our finest construction projects and achievements</p>
            </div>
        </section>

        <!-- Portfolio Filter -->
        <section class="portfolio-filter">
            <div class="container">
                <div class="filter-buttons">
                    <button class="filter-btn active" data-filter="all">All Projects</button>
                    <button class="filter-btn" data-filter="residential">Residential</button>
                    <button class="filter-btn" data-filter="commercial">Commercial</button>
                    <button class="filter-btn" data-filter="renovation">Renovations</button>
                    <button class="filter-btn" data-filter="interior">Interior</button>
                </div>
            </div>
        </section>

        <!-- Portfolio Grid -->
        <section class="portfolio-grid-section">
            <div class="container">
                <div class="portfolio-grid" id="dynamicPortfolioGrid">
                    <!-- Portfolio items will be loaded dynamically from admin data -->
                </div>
            </div>
        </section>

        <!-- Project Statistics -->
        <section class="project-stats">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">150+</div>
                        <div class="stat-label">Projects Completed</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Happy Clients</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">15+</div>
                        <div class="stat-label">Years Experience</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">Satisfaction Rate</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section">
            <div class="container">
                <div class="cta-content">
                    <h2>Ready to Start Your Project?</h2>
                    <p>Let's discuss your construction needs and create something amazing together.</p>
                    <a href="contact.html" class="btn btn-primary">Get Free Quote</a>
                </div>
            </div>
        </section>
    </main>

    <!-- Project Modal -->
    <div id="project-modal" class="modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <div class="project-gallery">
                    <div class="main-image">
                        <img id="modal-main-image" src="" alt="">
                    </div>
                    <div class="thumbnail-gallery">
                        <img class="thumbnail active" src="" alt="">
                        <img class="thumbnail" src="" alt="">
                        <img class="thumbnail" src="" alt="">
                    </div>
                </div>
                <div class="project-details">
                    <h2 id="modal-title"></h2>
                    <p class="project-category" id="modal-category"></p>
                    <div class="project-info">
                        <div class="info-item">
                            <strong>Project Type:</strong>
                            <span id="modal-type"></span>
                        </div>
                        <div class="info-item">
                            <strong>Duration:</strong>
                            <span id="modal-duration"></span>
                        </div>
                        <div class="info-item">
                            <strong>Size:</strong>
                            <span id="modal-size"></span>
                        </div>
                        <div class="info-item">
                            <strong>Services:</strong>
                            <span id="modal-services"></span>
                        </div>
                    </div>
                    <div class="project-description">
                        <h3>Project Description</h3>
                        <p id="modal-description"></p>
                    </div>
                    <div class="project-challenges">
                        <h3>Challenges & Solutions</h3>
                        <p id="modal-challenges"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Frontline Construction</h3>
                    <p>Building excellence, delivering satisfaction.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><span>📘</span></a>
                        <a href="#" aria-label="Instagram"><span>📷</span></a>
                        <a href="#" aria-label="LinkedIn"><span>💼</span></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="services.html#residential">Residential Construction</a></li>
                        <li><a href="services.html#commercial">Commercial Projects</a></li>
                        <li><a href="services.html#renovations">Renovations</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="testimonials.html">Testimonials</a></li>
                        <li><a href="blog.html">Blog</a></li>
                    </ul>
                </div>
                <div class="footer-section contact">
    <h4>Contact</h4>
    <p>Email: <a href="mailto:info@frontlinecontracting.net">info@frontlinecontracting.net</a></p>
    <p>Phone: <a href="tel:00263242797241">00263-242-797241 / 3</a></p>
    <p>Mobile: <a href="tel:00263715887199">00263 715 887 199</a><br><a href="tel:00263714755022">00263 714 755 022</a><br><a href="tel:00263734176488">00263 734 176 488</a></p>
    <p>Address: 9th Floor BARD House<br>69 Samora Machel Ave<br>Harare, Zimbabwe</p>
</div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 <a href="mailto:inkgenius.co@gmail.com" style="color:inherit;text-decoration:underline;">Inkgenius.co</a></p>
            </div>
        </div>
    </footer>

    <script src="assets/js/script.js"></script>
    <script src="assets/js/portfolio.js"></script>
</body>
</html> 