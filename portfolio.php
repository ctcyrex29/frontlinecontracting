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

    <?php
    include "includes/head.php";
    ?>


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

    <?php
    include "includes/foot.php";
    ?>


    <script src="assets/js/script.js"></script>
    <script src="assets/js/portfolio.js"></script>
</body>

</html>