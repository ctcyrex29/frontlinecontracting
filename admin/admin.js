// Admin Dashboard JavaScript
class AdminDashboard {
    constructor() {
        this.isAuthenticated = false;
        this.currentUser = null;
        this.portfolioData = [];
        this.analyticsData = {};
        this.charts = {};
        
        this.loadAdminCredentials();
        
        this.init();
    }

    loadAdminCredentials() {
        // Load admin credentials securely via an API call or server-side logic
        // Placeholder: Remove these lines
        this.adminCredentials = {
            username: 'admin',
            password: 'frontline2024' // Server call to retrieve secure credentials
        };
    }

    init() {
        this.checkAuth();
        this.bindEvents();
        this.loadData();
    }

    // Authentication
    checkAuth() {
        const token = localStorage.getItem('adminToken');
        const sessionExpiry = localStorage.getItem('sessionExpiry');
        
        if (token && sessionExpiry && new Date().getTime() < parseInt(sessionExpiry)) {
            this.isAuthenticated = true;
            this.showDashboard();
        } else {
            this.showLogin();
        }
    }

    showLogin() {
        document.getElementById('loginScreen').style.display = 'flex';
        document.getElementById('adminDashboard').style.display = 'none';
    }

    showDashboard() {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'block';
        this.loadDashboardData();
    }

    authenticate(username, password) {
        // Simple authentication (in production, use proper server-side auth)
        if (username === this.adminCredentials.username && 
            password === this.adminCredentials.password) {
            
            const token = this.generateToken();
            const expiry = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours
            
            localStorage.setItem('adminToken', token);
            localStorage.setItem('sessionExpiry', expiry.toString());
            
            this.isAuthenticated = true;
            this.currentUser = { username };
            this.showDashboard();
            return true;
        }
        return false;
    }

    generateToken() {
        return 'admin_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    }

    logout() {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('sessionExpiry');
        this.isAuthenticated = false;
        this.currentUser = null;
        this.showLogin();
    }

    // Event Binding
    bindEvents() {
        // Login form
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // Logout button
        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.logout();
        });

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchSection(e.target.dataset.section);
            });
        });

        // Portfolio management
        document.getElementById('addPortfolioBtn').addEventListener('click', () => {
            this.openPortfolioModal();
        });

        // Portfolio modal
        document.getElementById('portfolioForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.savePortfolioItem();
        });

        document.getElementById('cancelPortfolio').addEventListener('click', () => {
            this.closePortfolioModal();
        });

        document.querySelector('.close-modal').addEventListener('click', () => {
            this.closePortfolioModal();
        });

        // Settings forms
        document.getElementById('changePasswordForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.changePassword();
        });

        document.getElementById('websiteSettingsForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveWebsiteSettings();
        });

        // Modal backdrop click
        document.getElementById('portfolioModal').addEventListener('click', (e) => {
            if (e.target.id === 'portfolioModal') {
                this.closePortfolioModal();
            }
        });
    }

    // Login Handler
    handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('loginError');

        if (this.authenticate(username, password)) {
            errorDiv.style.display = 'none';
        } else {
            errorDiv.textContent = 'Invalid username or password';
            errorDiv.style.display = 'block';
        }
    }

    // Navigation
    switchSection(sectionId) {
        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

        // Update content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');

        // Load section-specific data
        switch(sectionId) {
            case 'dashboard':
                this.loadDashboardData();
                break;
            case 'portfolio':
                this.loadPortfolioData();
                break;
            case 'analytics':
                this.loadAnalyticsData();
                break;
            case 'settings':
                this.loadSettingsData();
                break;
        }
    }

    // Data Loading
    loadData() {
        this.loadPortfolioData();
        this.loadAnalyticsData();
        this.initCsrfToken();
    }

    initCsrfToken() {
        const token = this.generateCSRFToken();
        document.getElementById('csrf_token').value = token;
        document.getElementById('timestamp').value = Date.now();
    }

    generateCSRFToken() {
        return 'csrf_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    }

    loadDashboardData() {
        this.updateStats();
        this.initDashboardCharts();
    }

    loadPortfolioData() {
        // Load portfolio data from localStorage or default data
        const savedData = localStorage.getItem('portfolioData');
        if (savedData) {
            this.portfolioData = JSON.parse(savedData);
        } else {
            // Default portfolio data
            this.portfolioData = [
                {
                    id: 1,
                    title: "Modern Office Complex",
                    category: "commercial",
                    description: "A state-of-the-art office complex featuring sustainable design and modern amenities.",
                    location: "Harare CBD",
                    date: "2024-01-15",
                    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"],
                    challenges: "Complex foundation work due to soil conditions. Implemented advanced piling techniques."
                },
                {
                    id: 2,
                    title: "Residential Estate Development",
                    category: "residential",
                    description: "Luxury residential estate with 50 units, featuring modern architecture and landscaping.",
                    location: "Borrowdale, Harare",
                    date: "2023-12-20",
                    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"],
                    challenges: "Coordinated multiple contractors and maintained quality standards across all units."
                },
                {
                    id: 3,
                    title: "Highway Bridge Construction",
                    category: "infrastructure",
                    description: "Major bridge construction project connecting two major highways.",
                    location: "Mutare Highway",
                    date: "2023-11-10",
                    images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"],
                    challenges: "Complex engineering requirements and traffic management during construction."
                }
            ];
            this.savePortfolioData();
        }
        this.renderPortfolioGrid();
    }

    loadAnalyticsData() {
        // Load analytics data from localStorage or generate mock data
        const savedData = localStorage.getItem('analyticsData');
        if (savedData) {
            this.analyticsData = JSON.parse(savedData);
        } else {
            this.analyticsData = this.generateMockAnalytics();
            this.saveAnalyticsData();
        }
        this.initAnalyticsCharts();
    }

    // Portfolio Management
    renderPortfolioGrid() {
        const grid = document.getElementById('portfolioGrid');
        grid.innerHTML = '';

        this.portfolioData.forEach(item => {
            const itemElement = this.createPortfolioItemElement(item);
            grid.appendChild(itemElement);
        });
    }

    createPortfolioItemElement(item) {
        const div = document.createElement('div');
        div.className = 'portfolio-item-admin';
        div.innerHTML = `
            <img src="${item.images[0] || 'https://via.placeholder.com/300x200?text=No+Image'}" alt="${item.title}">
            <div class="item-content">
                <h4>${this.escapeHtml(item.title)}</h4>
                <p><strong>Category:</strong> ${item.category}</p>
                <p><strong>Location:</strong> ${this.escapeHtml(item.location)}</p>
                <p><strong>Date:</strong> ${item.date}</p>
                <div class="item-actions">
                    <button class="btn btn-primary" onclick="admin.editPortfolioItem(${item.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-danger" onclick="admin.deletePortfolioItem(${item.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `;
        return div;
    }

    openPortfolioModal(itemId = null) {
        console.log('openPortfolioModal called with id:', itemId);
        const modal = document.getElementById('portfolioModal');
        const modalTitle = document.getElementById('modalTitle');
        const form = document.getElementById('portfolioForm');

        if (itemId) {
            // Edit mode
            const item = this.portfolioData.find(i => i.id === itemId);
            if (item) {
                modalTitle.textContent = 'Edit Project';
                this.populatePortfolioForm(item);
                form.dataset.editId = itemId;
            }
        } else {
            // Add mode
            modalTitle.textContent = 'Add New Project';
            form.reset();
            delete form.dataset.editId;
        }

        modal.style.display = 'block';
    }

    closePortfolioModal() {
        document.getElementById('portfolioModal').style.display = 'none';
        document.getElementById('portfolioForm').reset();
    }

    populatePortfolioForm(item) {
        document.getElementById('projectTitle').value = item.title;
        document.getElementById('projectCategory').value = item.category;
        document.getElementById('projectDescription').value = item.description;
        document.getElementById('projectLocation').value = item.location;
        document.getElementById('projectDate').value = item.date;
        document.getElementById('projectImages').value = item.images.join('\n');
        document.getElementById('projectChallenges').value = item.challenges;
    }

    savePortfolioItem() {
    // Helper to check if a string is a URL
    function isUrl(str) {
        try {
            new URL(str);
            return true;
        } catch (e) {
            return false;
        }
    }
        const form = document.getElementById('portfolioForm');
        const formData = new FormData(form);
        
        const itemData = {
            title: formData.get('title'),
            category: formData.get('category'),
            description: formData.get('description'),
            location: formData.get('location'),
            date: formData.get('date'),
            images: formData.get('images').split('\n').map(img => {
    img = img.trim();
    if (!img) return null;
    if (isUrl(img)) return img;
    return '/resources/' + img;
}).filter(Boolean),
            challenges: formData.get('challenges')
        };

        // Validation
        if (!itemData.title || !itemData.category || !itemData.description) {
            this.showMessage('Please fill in all required fields', 'error');
            return;
        }

        const editId = form.dataset.editId;
        if (editId) {
            // Update existing item
            const index = this.portfolioData.findIndex(i => i.id === parseInt(editId));
            if (index !== -1) {
                this.portfolioData[index] = { ...this.portfolioData[index], ...itemData };
            }
        } else {
            // Add new item
            const newId = Math.max(...this.portfolioData.map(i => i.id), 0) + 1;
            itemData.id = newId;
            this.portfolioData.push(itemData);
        }

        this.savePortfolioData();
        this.renderPortfolioGrid();
        this.closePortfolioModal();
        this.showMessage('Portfolio item saved successfully', 'success');
    }

    editPortfolioItem(itemId) {
        console.log('editPortfolioItem called with id:', itemId);
        this.openPortfolioModal(itemId);
    }

    deletePortfolioItem(itemId) {
        console.log('deletePortfolioItem called with id:', itemId);
        if (confirm('Are you sure you want to delete this project?')) {
            this.portfolioData = this.portfolioData.filter(item => item.id !== itemId);
            this.savePortfolioData();
            this.renderPortfolioGrid();
            this.showMessage('Project deleted successfully', 'success');
        }
    }

    savePortfolioData() {
        localStorage.setItem('portfolioData', JSON.stringify(this.portfolioData));
        this.updatePortfolioStats();
    }

    // Analytics
    updateStats() {
        document.getElementById('totalVisits').textContent = this.analyticsData.totalVisits || 0;
        document.getElementById('uniqueVisitors').textContent = this.analyticsData.uniqueVisitors || 0;
        document.getElementById('portfolioItems').textContent = this.portfolioData.length;
        document.getElementById('contactInquiries').textContent = this.analyticsData.contactInquiries || 0;
    }

    updatePortfolioStats() {
        document.getElementById('portfolioItems').textContent = this.portfolioData.length;
    }

    initDashboardCharts() {
        this.initVisitorChart();
        this.initPageViewsChart();
    }

    initAnalyticsCharts() {
        this.initTrafficSourcesChart();
        this.initDeviceTypesChart();
        this.loadPopularPages();
        this.loadRecentActivity();
    }

    initVisitorChart() {
        const ctx = document.getElementById('visitorChart').getContext('2d');
        const data = this.analyticsData.visitorData || this.generateVisitorData();
        
        this.charts.visitor = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Visitors',
                    data: data.values,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    initPageViewsChart() {
        const ctx = document.getElementById('pageViewsChart').getContext('2d');
        const data = this.analyticsData.pageViews || this.generatePageViewsData();
        
        this.charts.pageViews = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Page Views',
                    data: data.values,
                    backgroundColor: '#10b981'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    initTrafficSourcesChart() {
        const ctx = document.getElementById('trafficSourcesChart').getContext('2d');
        const data = this.analyticsData.trafficSources || this.generateTrafficSourcesData();
        
        this.charts.trafficSources = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.labels,
                datasets: [{
                    data: data.values,
                    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    initDeviceTypesChart() {
        const ctx = document.getElementById('deviceTypesChart').getContext('2d');
        const data = this.analyticsData.deviceTypes || this.generateDeviceTypesData();
        
        this.charts.deviceTypes = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: data.labels,
                datasets: [{
                    data: data.values,
                    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    loadPopularPages() {
        const container = document.getElementById('popularPages');
        const pages = this.analyticsData.popularPages || this.generatePopularPagesData();
        
        container.innerHTML = pages.map(page => `
            <div class="page-item">
                <span class="page-name">${page.name}</span>
                <span class="page-views">${page.views} views</span>
            </div>
        `).join('');
    }

    loadRecentActivity() {
        const container = document.getElementById('recentActivity');
        const activities = this.analyticsData.recentActivity || this.generateRecentActivityData();
        
        container.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <span class="activity-text">${activity.text}</span>
                <span class="activity-time">${activity.time}</span>
            </div>
        `).join('');
    }

    // Mock Data Generation
    generateMockAnalytics() {
        return {
            totalVisits: 1247,
            uniqueVisitors: 892,
            contactInquiries: 23,
            visitorData: this.generateVisitorData(),
            pageViews: this.generatePageViewsData(),
            trafficSources: this.generateTrafficSourcesData(),
            deviceTypes: this.generateDeviceTypesData(),
            popularPages: this.generatePopularPagesData(),
            recentActivity: this.generateRecentActivityData()
        };
    }

    generateVisitorData() {
        const labels = [];
        const values = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            labels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
            values.push(Math.floor(Math.random() * 100) + 50);
        }
        return { labels, values };
    }

    generatePageViewsData() {
        return {
            labels: ['Home', 'About', 'Services', 'Portfolio', 'Contact'],
            values: [245, 189, 156, 203, 178]
        };
    }

    generateTrafficSourcesData() {
        return {
            labels: ['Direct', 'Organic Search', 'Social Media', 'Referral'],
            values: [45, 30, 15, 10]
        };
    }

    generateDeviceTypesData() {
        return {
            labels: ['Desktop', 'Mobile', 'Tablet'],
            values: [60, 35, 5]
        };
    }

    generatePopularPagesData() {
        return [
            { name: 'Homepage', views: 245 },
            { name: 'Portfolio', views: 203 },
            { name: 'Services', views: 156 },
            { name: 'About Us', views: 189 },
            { name: 'Contact', views: 178 }
        ];
    }

    generateRecentActivityData() {
        return [
            { text: 'New contact form submission', time: '2 minutes ago' },
            { text: 'Portfolio page viewed', time: '5 minutes ago' },
            { text: 'Services page viewed', time: '12 minutes ago' },
            { text: 'Homepage visited', time: '15 minutes ago' },
            { text: 'Contact page viewed', time: '23 minutes ago' }
        ];
    }

    saveAnalyticsData() {
        localStorage.setItem('analyticsData', JSON.stringify(this.analyticsData));
    }

    // Settings
    changePassword() {
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (currentPassword !== this.adminCredentials.password) {
            this.showMessage('Current password is incorrect', 'error');
            return;
        }

        if (newPassword !== confirmPassword) {
            this.showMessage('New passwords do not match', 'error');
            return;
        }

        if (newPassword.length < 8) {
            this.showMessage('Password must be at least 8 characters long', 'error');
            return;
        }

        this.adminCredentials.password = newPassword;
        localStorage.setItem('adminPassword', newPassword);
        this.showMessage('Password updated successfully', 'success');
        document.getElementById('changePasswordForm').reset();
    }

    saveWebsiteSettings() {
        const settings = {
            siteTitle: document.getElementById('siteTitle').value,
            contactEmail: document.getElementById('contactEmail').value,
            contactPhone: document.getElementById('contactPhone').value
        };

        localStorage.setItem('websiteSettings', JSON.stringify(settings));
        this.showMessage('Website settings saved successfully', 'success');
    }

    // Utility Functions
    showMessage(message, type = 'success') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        
        const adminContent = document.querySelector('.admin-content');
        adminContent.insertBefore(messageDiv, adminContent.firstChild);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Security Functions
    validateInput(input) {
        // Basic XSS protection
        return input.replace(/[<>]/g, '');
    }

    sanitizeData(data) {
        if (typeof data === 'string') {
            return this.validateInput(data);
        }
        if (typeof data === 'object') {
            const sanitized = {};
            for (const key in data) {
                sanitized[key] = this.sanitizeData(data[key]);
            }
            return sanitized;
        }
        return data;
    }
}

// Initialize admin dashboard
const admin = new AdminDashboard();
window.admin = admin;

// Track page views for analytics
function trackPageView(pageName) {
    const analytics = JSON.parse(localStorage.getItem('analyticsData') || '{}');
    analytics.totalVisits = (analytics.totalVisits || 0) + 1;
    
    if (!analytics.pageViews) {
        analytics.pageViews = { labels: [], values: [] };
    }
    
    const pageIndex = analytics.pageViews.labels.indexOf(pageName);
    if (pageIndex !== -1) {
        analytics.pageViews.values[pageIndex]++;
    } else {
        analytics.pageViews.labels.push(pageName);
        analytics.pageViews.values.push(1);
    }
    
    localStorage.setItem('analyticsData', JSON.stringify(analytics));
}

// Track contact form submissions
function trackContactSubmission() {
    const analytics = JSON.parse(localStorage.getItem('analyticsData') || '{}');
    analytics.contactInquiries = (analytics.contactInquiries || 0) + 1;
    localStorage.setItem('analyticsData', JSON.stringify(analytics));
}

// Auto-save session
setInterval(() => {
    if (admin.isAuthenticated) {
        const expiry = new Date().getTime() + (24 * 60 * 60 * 1000);
        localStorage.setItem('sessionExpiry', expiry.toString());
    }
}, 60000); // Every minute

// Prevent session timeout warning
window.addEventListener('beforeunload', () => {
    if (admin.isAuthenticated) {
        const expiry = new Date().getTime() + (24 * 60 * 60 * 1000);
        localStorage.setItem('sessionExpiry', expiry.toString());
    }
}); 