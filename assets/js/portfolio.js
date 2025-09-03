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

        console.log('Saved portfolioData:', savedData);
        if (savedData && JSON.parse(savedData).length > 0) {
            portfolioData = JSON.parse(savedData);
        } else {
            // If no admin data, show all images from resources folder as portfolio items
            // This list can be generated server-side, but for static use, we'll hardcode the file names
            const resourceImages = [
                "IMG-20250805-WA0040.jpg",
                "IMG-20250805-WA0045.jpg",
                "IMG-20250805-WA0046.jpg",
                "IMG-20250805-WA0047.jpg",
                "IMG-20250805-WA0048.jpg",
                "IMG-20250805-WA0049.jpg",
                "IMG-20250805-WA0050.jpg",
                "IMG-20250805-WA0061.jpg",
                "IMG-20250805-WA0062.jpg",
                "IMG-20250805-WA0065.jpg",
                "IMG-20250805-WA0066.jpg",
                "IMG-20250805-WA0067.jpg",
                "IMG-20250805-WA0068.jpg",
                "IMG-20250805-WA0069.jpg",
                "IMG-20250805-WA0070.jpg",
                "IMG-20250805-WA0071.jpg",
                "IMG-20250805-WA0072.jpg",
                "IMG-20250805-WA0073.jpg",
                "IMG-20250805-WA0074.jpg",
                "IMG-20250805-WA0075.jpg",
                "IMG-20250805-WA0076.jpg",
                "IMG-20250805-WA0077.jpg",
                "IMG-20250805-WA0078.jpg",
                "IMG-20250805-WA0079.jpg",
                "IMG-20250805-WA0080.jpg",
                "IMG-20250805-WA0081.jpg",
                "IMG-20250805-WA0082.jpg",
                "IMG-20250805-WA0083.jpg",
                "IMG-20250805-WA0084.jpg",
                "IMG-20250805-WA0085.jpg",
                "IMG-20250805-WA0086.jpg",
                "IMG-20250805-WA0087.jpg",
                "IMG-20250805-WA0088.jpg",
                "IMG-20250805-WA0089.jpg",
                "IMG-20250805-WA0090.jpg",
                "IMG-20250805-WA0091.jpg",
                "IMG-20250805-WA0092.jpg",
                "IMG-20250805-WA0093.jpg",
                "IMG-20250805-WA0094.jpg",
                "IMG-20250805-WA0095.jpg",
                "IMG-20250805-WA0096.jpg",
                "IMG-20250805-WA0097.jpg",
                "IMG-20250805-WA0098.jpg",
                "IMG-20250805-WA0099.jpg",
                "IMG-20250805-WA0100.jpg",
                "IMG-20250805-WA0101.jpg",
                "IMG-20250805-WA0102.jpg",
                "IMG-20250805-WA0103.jpg",
                "IMG-20250805-WA0104.jpg",
                "IMG-20250805-WA0105.jpg",
                "IMG-20250805-WA0106.jpg",
                "IMG-20250805-WA0107.jpg",
                "IMG-20250805-WA0108.jpg",
                "IMG-20250805-WA0109.jpg",
                "IMG-20250805-WA0110.jpg",
                "IMG-20250805-WA0111.jpg",
                "IMG-20250805-WA0112.jpg",
                "IMG-20250805-WA0113.jpg",
                "IMG-20250805-WA0114.jpg",
                "IMG-20250805-WA0115.jpg",
                "IMG-20250805-WA0116.jpg",
                "IMG-20250805-WA0117.jpg",
                "IMG-20250805-WA0121.jpg",
                "IMG-20250805-WA0122.jpg",
                "IMG-20250805-WA0123.jpg",
                "IMG-20250805-WA0124.jpg",
                "IMG-20250805-WA0125.jpg",
                "IMG-20250805-WA0126.jpg",
                "IMG-20250805-WA0127.jpg",
                "IMG-20250805-WA0128.jpg",
                "IMG-20250805-WA0129.jpg",
                "IMG-20250805-WA0130.jpg",
                "IMG-20250805-WA0131.jpg",
                "IMG-20250805-WA0132.jpg"
            ];
            portfolioData = resourceImages.map((img, idx) => {
                const imgPath = "/resources/" + img;
                console.log('Adding fallback image:', imgPath);
                return {
                    id: idx + 1,
                    title: `Project Image ${idx + 1}`,
                    category: "general",
                    description: "Portfolio project image.",
                    location: "",
                    date: "",
                    images: [imgPath],
                    challenges: ""
                };
            });
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