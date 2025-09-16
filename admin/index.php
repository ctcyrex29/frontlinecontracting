<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Frontline Contracting</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="admin.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div id="loginScreen" class="login-screen">
        <div class="login-container">
            <div class="login-header">
                <h2><i class="fas fa-shield-alt"></i> Admin Access</h2>
                <p>Frontline Contracting Dashboard</p>
            </div>
            <form id="loginForm" class="login-form">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <div id="loginError" class="error-message" style="display: none;"></div>
        </div>
    </div>

    <div id="adminDashboard" class="admin-dashboard" style="display: none;">
        <header class="admin-header">
            <div class="header-left">
                <h1><i class="fas fa-tools"></i> Frontline Contracting Admin</h1>
            </div>
            <div class="header-right">
                <span class="admin-info">
                    <i class="fas fa-user"></i> Admin
                </span>
                <button id="logoutBtn" class="btn btn-secondary">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </button>
            </div>
        </header>

        <nav class="admin-nav">
            <ul>
                <li><a href="#dashboard" class="nav-link active" data-section="dashboard">
                    <i class="fas fa-chart-line"></i> Dashboard
                </a></li>
                <li><a href="#portfolio" class="nav-link" data-section="portfolio">
                    <i class="fas fa-images"></i> Portfolio Management
                </a></li>
                <li><a href="#analytics" class="nav-link" data-section="analytics">
                    <i class="fas fa-chart-bar"></i> Analytics
                </a></li>
                <li><a href="#settings" class="nav-link" data-section="settings">
                    <i class="fas fa-cog"></i> Settings
                </a></li>
            </ul>
        </nav>

        <main class="admin-content">
            <section id="dashboard" class="content-section active">
                <div class="section-header">
                    <h2>Dashboard Overview</h2>
                    <p>Welcome to your admin dashboard</p>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-eye"></i>
                        </div>
                        <div class="stat-content">
                            <h3 id="totalVisits">0</h3>
                            <p>Total Visits</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="stat-content">
                            <h3 id="uniqueVisitors">0</h3>
                            <p>Unique Visitors</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-image"></i>
                        </div>
                        <div class="stat-content">
                            <h3 id="portfolioItems">0</h3>
                            <p>Portfolio Items</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="stat-content">
                            <h3 id="contactInquiries">0</h3>
                            <p>Contact Inquiries</p>
                        </div>
                    </div>
                </div>

                <div class="charts-grid">
                    <div class="chart-card">
                        <h3>Visitor Traffic (Last 7 Days)</h3>
                        <canvas id="visitorChart"></canvas>
                    </div>
                    <div class="chart-card">
                        <h3>Page Views</h3>
                        <canvas id="pageViewsChart"></canvas>
                    </div>
                </div>
            </section>

            <section id="portfolio" class="content-section">
                <div class="section-header">
                    <h2>Portfolio Management</h2>
                    <button id="addPortfolioBtn" class="btn btn-primary">
                        <i class="fas fa-plus"></i> Add New Project
                    </button>
                </div>
                
                <div class="portfolio-approval" id="portfolioApproval">
                    <h4>Approve Images from Resources Folder</h4>
                    <div id="resourcesFileList">
                        </div>
                </div>

                <div class="portfolio-grid" id="portfolioGrid">
                    </div>
            </section>

            <section id="analytics" class="content-section">
                <div class="section-header">
                    <h2>Analytics</h2>
                    <p>Comprehensive website statistics</p>
                </div>
                
                <div class="analytics-grid">
                    <div class="analytics-card">
                        <h3>Traffic Sources</h3>
                        <canvas id="trafficSourceChart"></canvas>
                    </div>
                    <div class="analytics-card">
                        <h3>Device Types</h3>
                        <canvas id="deviceTypeChart"></canvas>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col">
                        <div class="analytics-card popular-pages">
                            <h3>Popular Pages</h3>
                            <ul id="popularPagesList">
                                </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="analytics-card recent-activity">
                            <h3>Recent Activity</h3>
                            <ul id="recentActivityList">
                                </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="settings" class="content-section">
                <div class="section-header">
                    <h2>Settings</h2>
                    <p>Update account and website settings</p>
                </div>

                <div class="settings-grid">
                    <div class="settings-card">
                        <h3>Change Password</h3>
                        <form id="changePasswordForm">
                            <div class="form-group">
                                <label for="currentPassword">Current Password</label>
                                <input type="password" id="currentPassword" name="currentPassword" required>
                            </div>
                            <div class="form-group">
                                <label for="newPassword">New Password</label>
                                <input type="password" id="newPassword" name="newPassword" required>
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Confirm New Password</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Update Password</button>
                        </form>
                    </div>
                    
                    <div class="settings-card">
                        <h3>Website Settings</h3>
                        <form id="websiteSettingsForm">
                            <div class="form-group">
                                <label for="siteTitle">Site Title</label>
                                <input type="text" id="siteTitle" name="siteTitle">
                            </div>
                            <div class="form-group">
                                <label for="contactEmail">Contact Email</label>
                                <input type="email" id="contactEmail" name="contactEmail">
                            </div>
                            <div class="form-group">
                                <label for="contactPhone">Contact Phone</label>
                                <input type="tel" id="contactPhone" name="contactPhone">
                            </div>
                            <button type="submit" class="btn btn-primary">Save Settings</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <div id="notificationMessage" class="notification-message" style="display: none;"></div>
    
    <div id="portfolioModal" class="modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3 id="modalTitle">Add New Project</h3>
            <form id="portfolioForm">
                <input type="hidden" name="csrf_token" id="csrf_token">
                <input type="hidden" name="timestamp" id="timestamp">
                
                <div class="form-group">
                    <label for="projectTitle">Project Title</label>
                    <input type="text" id="projectTitle" name="title" required pattern=".{3,}" title="Title must be at least 3 characters long">
                </div>
                <div class="form-group">
                    <label for="projectCategory">Category</label>
                    <select id="projectCategory" name="category" required>
                        <option value="">Select a Category</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="infrastructure">Infrastructure</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="projectDescription">Description</label>
                    <textarea id="projectDescription" name="description" rows="3" required></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="projectLocation">Location</label>
                        <input type="text" id="projectLocation" name="location" required pattern=".{3,}" title="Location must be at least 3 characters long">
                    </div>
                    <div class="form-group">
                        <label for="projectDate">Completion Date</label>
                        <input type="date" id="projectDate" name="date" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="projectImages">Images (URLs, one per line)</label>
                    <textarea id="projectImages" name="images" rows="3" placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"></textarea>
                </div>
                <div class="form-group">
                    <label for="projectChallenges">Challenges & Solutions</label>
                    <textarea id="projectChallenges" name="challenges" rows="3"></textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" id="cancelPortfolio">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Project</button>
                </div>
            </form>
        </div>
    </div>

    <script src="admin.js"></script>
    <script src="admin-db-auth.js"></script>
</body>
</html>