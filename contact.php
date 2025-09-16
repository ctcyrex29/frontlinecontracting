<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Contact Frontline Construction for your construction needs. Get a free quote, schedule a consultation, or learn more about our services.">
    <title>Contact Us - Frontline Construction</title>
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
                <h1>Contact Us</h1>
                <p>Get in touch with us for your construction needs</p>
            </div>
        </section>

        <!-- Contact Information -->
        <section class="contact-info">
            <div class="container">
                <div class="contact-grid">
                    <div class="contact-card">
                        <div class="contact-icon">📞</div>
                        <h3>Phone</h3>
                        <p>00263-242-797241 / 3</p>
                        <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon">📧</div>
                        <h3>Email</h3>
                        <p>info@frontlinecontracting.net</p>
                        <p>We respond within 24 hours</p>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon">📍</div>
                        <h3>Address</h3>
                        <p>9th Floor BARD House</p>
                        <p>69 Samora Machel Ave, Harare, Zimbabwe</p>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon">⏰</div>
                        <h3>Business Hours</h3>
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 3:00 PM</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Form Section -->
        <section class="contact-form-section">
            <div class="container">
                <div class="contact-content">
                    <div class="contact-form-container">
                        <h2>Get a Free Quote</h2>
                        <p>Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.</p>

                        <form id="contact-form" class="contact-form" method="POST" action="#" novalidate>
                            <input type="hidden" name="csrf_token" id="csrf_token" value="">
                            <input type="hidden" name="timestamp" id="timestamp" value="">
                            <div class="honeypot" style="display: none;">
                                <input type="text" name="website" tabindex="-1" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label for="name">Full Name *</label>
                                <input type="text" id="name" name="name" required>
                            </div>

                            <div class="form-group">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" name="email" required>
                            </div>

                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone">
                            </div>

                            <div class="form-group">
                                <label for="service">Service Type</label>
                                <select id="service" name="service">
                                    <option value="">Select a service</option>
                                    <option value="residential">Residential Construction</option>
                                    <option value="commercial">Commercial Projects</option>
                                    <option value="renovation">Renovations</option>
                                    <option value="consultation">Design Consultation</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="project-type">Project Type</label>
                                <select id="project-type" name="project-type">
                                    <option value="">Select project type</option>
                                    <option value="new-construction">New Construction</option>
                                    <option value="addition">Addition</option>
                                    <option value="renovation">Renovation</option>
                                    <option value="remodeling">Remodeling</option>
                                    <option value="repair">Repair</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="budget">Budget Range</label>
                                <select id="budget" name="budget">
                                    <option value="">Select budget range</option>
                                    <option value="under-50k">Under $50,000</option>
                                    <option value="50k-100k">$50,000 - $100,000</option>
                                    <option value="100k-250k">$100,000 - $250,000</option>
                                    <option value="250k-500k">$250,000 - $500,000</option>
                                    <option value="over-500k">Over $500,000</option>
                                    <option value="not-sure">Not sure yet</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="timeline">Preferred Timeline</label>
                                <select id="timeline" name="timeline">
                                    <option value="">Select timeline</option>
                                    <option value="asap">As soon as possible</option>
                                    <option value="1-3-months">1-3 months</option>
                                    <option value="3-6-months">3-6 months</option>
                                    <option value="6-12-months">6-12 months</option>
                                    <option value="over-12-months">Over 12 months</option>
                                    <option value="flexible">Flexible</option>
                                </select>
                            </div>

                            <div class="form-group full-width">
                                <label for="message">Project Description *</label>
                                <textarea id="message" name="message" rows="5" placeholder="Please describe your project in detail..." required></textarea>
                            </div>

                            <div class="form-group full-width">
                                <label class="checkbox-label">
                                    <input type="checkbox" id="newsletter" name="newsletter">
                                    <span class="checkmark"></span>
                                    Subscribe to our newsletter for construction tips and updates
                                </label>
                            </div>

                            <div class="form-group full-width">
                                <button type="submit" class="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>

                    <div class="contact-sidebar">
                        <div class="sidebar-content">
                            <h3>Why Choose Us?</h3>
                            <ul>
                                <li>✅ Free consultations and quotes</li>
                                <li>✅ Licensed and insured</li>
                                <li>✅ Experienced team</li>
                                <li>✅ Quality workmanship</li>
                                <li>✅ On-time completion</li>
                                <li>✅ Competitive pricing</li>
                            </ul>

                            <div class="emergency-contact">
                                <h4>Emergency Service</h4>
                                <p>For urgent construction issues:</p>
                                <p class="emergency-phone">00263 715 887 199<br>00263 714 755 022<br>00263 734 176 488</p>
                                <p>Available 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Map Section -->
        <section class="map-section">
            <div class="container">
                <h2>Find Us</h2>
                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps?q=9th+Floor+BARD+House,+69+Samora+Machel+Ave,+Harare,+Zimbabwe&output=embed"
                        width="100%"
                        height="450"
                        style="border:0; border-radius:8px;"
                        allowfullscreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
            <div class="container">
                <div class="section-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Common questions about our services and process</p>
                </div>
                <div class="faq-grid">
                    <div class="faq-item">
                        <h3>How long does a typical construction project take?</h3>
                        <p>Project timelines vary depending on scope and complexity. A small renovation might take 2-4 weeks, while a custom home could take 6-12 months. We'll provide a detailed timeline during consultation.</p>
                    </div>
                    <div class="faq-item">
                        <h3>Do you provide free estimates?</h3>
                        <p>Yes, we offer free consultations and detailed estimates for all projects. We'll visit your site, discuss your needs, and provide a comprehensive quote with no obligation.</p>
                    </div>
                    <div class="faq-item">
                        <h3>Are you licensed and insured?</h3>
                        <p>Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage for your protection.</p>
                    </div>
                    <div class="faq-item">
                        <h3>What areas do you serve?</h3>
                        <p>We serve the greater metropolitan area and surrounding communities within a 50-mile radius. Contact us to confirm if we cover your specific location.</p>
                    </div>
                    <div class="faq-item">
                        <h3>Do you handle permits and inspections?</h3>
                        <p>Yes, we handle all necessary permits, inspections, and compliance requirements. Our team is experienced with local building codes and regulations.</p>
                    </div>
                    <div class="faq-item">
                        <h3>What payment terms do you offer?</h3>
                        <p>We offer flexible payment terms including progress payments and financing options. We'll discuss payment schedules during the contract phase.</p>
                    </div>
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