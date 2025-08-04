// Portfolio Filtering and Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load and render portfolio items dynamically
    loadPortfolioItems();
    
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    let portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Project modal functionality
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.close-modal');
    const viewProjectButtons = document.querySelectorAll('.view-project-btn');

    // Load project data from admin dashboard or use default data
    function loadProjectData() {
        const savedData = localStorage.getItem('portfolioData');
        if (savedData) {
            const portfolioData = JSON.parse(savedData);
            const projectData = {};
            
            portfolioData.forEach((item, index) => {
                const projectId = `project-${item.id}`;
                projectData[projectId] = {
                    title: item.title,
                    category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
                    type: item.category.charAt(0).toUpperCase() + item.category.slice(1) + ' Project',
                    duration: 'Completed',
                    size: 'Various',
                    services: 'Construction, Project Management',
                    description: item.description,
                    challenges: item.challenges || 'Project completed successfully with high quality standards.',
                    images: item.images.length > 0 ? item.images : ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800']
                };
            });
            
            return projectData;
        }
        
        // Default project data if no admin data exists
        return {
            'project-1': {
                title: 'Modern Office Complex',
                category: 'Commercial',
                type: 'Office Building',
                duration: '14 months',
                size: '25,000 sq ft',
                services: 'Commercial Construction, Interior Build-out',
                description: 'A state-of-the-art office complex featuring sustainable design and modern amenities.',
                challenges: 'Complex foundation work due to soil conditions. Implemented advanced piling techniques.',
                images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800']
            },
            'project-2': {
                title: 'Residential Estate Development',
                category: 'Residential',
                type: 'Multi-Unit Development',
                duration: '12 months',
                size: '6,500 sq ft total',
                services: 'Architecture, Construction, Interior Design',
                description: 'Luxury residential estate with 50 units, featuring modern architecture and landscaping.',
                challenges: 'Coordinated multiple contractors and maintained quality standards across all units.',
                images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800']
            },
            'project-3': {
                title: 'Highway Bridge Construction',
                category: 'Infrastructure',
                type: 'Bridge Construction',
                duration: '18 months',
                size: 'Major Infrastructure',
                services: 'Civil Engineering, Construction',
                description: 'Major bridge construction project connecting two major highways.',
                challenges: 'Complex engineering requirements and traffic management during construction.',
                images: ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800']
            }
        };
    }

    const projectData = loadProjectData();

    // Function to load and render portfolio items
    function loadPortfolioItems() {
        const portfolioGrid = document.getElementById('dynamicPortfolioGrid');
        if (!portfolioGrid) return;

        const savedData = localStorage.getItem('portfolioData');
        let portfolioData = [];

        if (savedData) {
            portfolioData = JSON.parse(savedData);
        } else {
            // Default portfolio data if no admin data exists
            portfolioData = [
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
        }

        // Clear existing content
        portfolioGrid.innerHTML = '';

        // Render portfolio items
        portfolioData.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.setAttribute('data-category', item.category);
            
            portfolioItem.innerHTML = `
                <div class="portfolio-image">
                    <img src="${item.images[0] || 'https://via.placeholder.com/400x300?text=No+Image'}" alt="${item.title}">
                    <div class="portfolio-overlay">
                        <div class="overlay-content">
                            <h3>${item.title}</h3>
                            <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)} Project</p>
                            <button class="view-project-btn" data-project="project-${item.id}">View Details</button>
                        </div>
                    </div>
                </div>
                <div class="portfolio-info">
                    <h3>${item.title}</h3>
                    <p class="project-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                    <p class="project-description">${item.description}</p>
                </div>
            `;
            
            portfolioGrid.appendChild(portfolioItem);
        });

        // Re-bind event listeners for new items
        portfolioItems = document.querySelectorAll('.portfolio-item');
        bindPortfolioEvents();
    }

    // Function to bind portfolio events
    function bindPortfolioEvents() {
        // Re-bind view project buttons
        const viewProjectButtons = document.querySelectorAll('.view-project-btn');
        viewProjectButtons.forEach(button => {
            button.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                const project = projectData[projectId];
                
                if (project) {
                    openProjectModal(project);
                }
            });
        });
    }

    // Function to open project modal
    function openProjectModal(project) {
        // Populate modal content
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-category').textContent = project.category;
        document.getElementById('modal-type').textContent = project.type;
        document.getElementById('modal-duration').textContent = project.duration;
        document.getElementById('modal-size').textContent = project.size;
        document.getElementById('modal-services').textContent = project.services;
        document.getElementById('modal-description').textContent = project.description;
        document.getElementById('modal-challenges').textContent = project.challenges;
        
        // Set main image
        document.getElementById('modal-main-image').src = project.images[0];
        document.getElementById('modal-main-image').alt = project.title;
        
        // Set thumbnails
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumb, index) => {
            if (project.images[index]) {
                thumb.src = project.images[index];
                thumb.alt = project.title;
                thumb.style.display = 'block';
            } else {
                thumb.style.display = 'none';
            }
        });
        
        // Show modal
        const modal = document.getElementById('project-modal');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Open modal - This will be handled by bindPortfolioEvents() now

    // Close modal
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Thumbnail gallery functionality
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('thumbnail')) {
            // Remove active class from all thumbnails
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            
            // Add active class to clicked thumbnail
            event.target.classList.add('active');
            
            // Update main image
            document.getElementById('modal-main-image').src = event.target.src;
        }
    });

    // Keyboard navigation for modal
    document.addEventListener('keydown', function(event) {
        if (modal.style.display === 'block') {
            if (event.key === 'Escape') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Animate portfolio items on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe portfolio items
    portfolioItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .portfolio-item {
        animation: fadeIn 0.5s ease-in;
    }
`;
document.head.appendChild(style); 