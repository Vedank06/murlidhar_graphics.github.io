      // Close mobile menu when clicking on a nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Smooth scrolling for all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Portfolio Section
        const portfolioGrid = document.querySelector('.portfolio-grid');
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        // Portfolio projects data
        const projects = [
            {
                title: "LED Board ",
                category: "LED Board",
                images: [
                    { 
                        src: "/image/LED-1.jpg", 
                        alt: "LED board installation at a shopping mall displaying colorful advertisements",
                        desc: ""
                    },
                    { 
                        src: "/image/LED-2.jpg", 
                        alt: "Close-up view of LED board components showing technical specifications",
                        desc: ""
                    },
                    { 
                        src: "/image/LED-3.jpg", 
                        alt: "Night time view of LED board illuminating the surrounding area",
                        desc: ""
                    },
                    { 
                        src: "/image/LED-4.jpg", 
                        alt: "Night time view of LED board illuminating the surrounding area",
                        desc:""
                    },
                    { 
                        src: "/image/LED-5.jpg", 
                        alt: "Night time view of LED board illuminating the surrounding area",
                        desc: ""
                    },
                    
                ]
            },
            {
                title: "ACP Work",
                category: "ACP Work",
                images: [
                    { 
                        src: "/image/acp work-1.jpg", 
                        alt: "ACP façade installation at an educational institution's main building",
                        desc: "Completed ACP cladding for a prestigious school, featuring custom color selections to match their brand identity."
                    },
                    { 
                        src: "/image/acp work-2.jpg", 
                        alt: "Detailed view of ACP panel joints and architectural elements",
                        desc: "Precision engineering of ACP panels ensuring perfect alignment and weather resistance."
                    },
                    { 
                        src: "/image/acp work-3.jpg", 
                        alt: "Completed installation showing the full architectural impact",
                        desc: "The completed ACP transformation created a modern, durable exterior for the school."
                    },
                    {
                     src: "/image/acp work-4.jpg", 
                        alt: "Completed installation showing the full architectural impact",
                        desc: "The completed ACP transformation created a modern, durable exterior for the school."
                    },
                {
                     src: "/image/acp work-5.jpg", 
                        alt: "Completed installation showing the full architectural impact",
                        desc: "The completed ACP transformation created a modern, durable exterior for the school."
                    },
                ]

                    
            
            },
            {
                title:"ALL TYPE OF PRINTING",
                category:"ALL TYPE OF PRINTING",
                images: [
                    { 
                        src: "/image/all tye-1.jpg", 
                        alt: "Homepage of an elegant e-commerce website with featured products",
                        desc: "Modern, responsive e-commerce platform designed for optimal user experience and conversions."
                    },
                    { 
                        src: "/image/all tye-2.jpg", 
                        alt: "Product showcase page with detailed descriptions and pricing",
                        desc: "Product pages featuring high-quality imagery and comprehensive product information."
                    },
                    { 
                        src: "/image/all tye-3.jpg", 
                        alt: "Mobile view of checkout process showing seamless experience",
                        desc: "Optimized mobile checkout flow ensuring high conversion rates across all devices."
                    },
                    {
                     src: "/image/all tye-4.jpg", 
                        alt: "Completed installation showing the full architectural impact",
                        desc: "The completed ACP transformation created a modern, durable exterior for the school."
                    },
                    {
                     src: "/image/all tye-5.jpg", 
                        alt: "Completed installation showing the full architectural impact",
                        desc: "The completed ACP transformation created a modern, durable exterior for the school."
                    },
                
            
                ]
            },
            {
                title: "OFFSET PRINTING",
                category: "OFFSET PRINTING",
                images: [
                    { 
                        src: "/image/OFFSET-1.jpg", 
                        alt: "Mobile app dashboard showing account summary and quick actions",
                        desc: "Intuitive dashboard design providing users with clear financial overviews."
                    },
                    { 
                        src: "/image/OFFSET-2.jpg", 
                        alt: "Transaction details screen with categorization and charts",
                        desc: "Detailed transaction analytics helping users better understand their spending."
                    },
                    { 
                        src: "/image/OFFSET-3.jpg",
                        alt: "Biometric login screen demonstrating secure authentication",
                        desc: "Advanced security features including facial recognition and fingerprint login."
                    },
                     { 
                        src: "/image/OFFSET-4.jpg", 
                        alt: "Mobile app dashboard showing account summary and quick actions",
                        desc: "Intuitive dashboard design providing users with clear financial overviews."
                    },
                    { 
                        src: "/image/OFFSET-5.JPG", 
                        alt: "Transaction details screen with categorization and charts",
                        desc: "Detailed transaction analytics helping users better understand their spending."
                    },
                ]
            },
            {
                title: "ACYRLIC LOGO",
                category: "ACYRLIC LOGO",
                images: [
                    { 
                        src: "/image/ACYRLIC-1.jpg", 
                        alt: "Logo design variations showing color and typography options",
                        desc: "Comprehensive brand identity system with versatile logo applications."
                    },
                    { 
                        src: "/image/ACYRLIC-2.jpg", 
                        alt: "Brand collateral including business cards and stationary",
                        desc: "Printed materials maintaining perfect brand consistency across touchpoints."
                    },
                    { 
                        src: "/image/ACYRLIC-3.jpg", 
                        alt: "Digital applications of brand identity across various platforms",
                        desc: "Digital brand implementation ensuring recognition across all online platforms."
                    },
                     { 
                        src: "/image/ACYRLIC-4.jpg", 
                        alt: "Mobile app dashboard showing account summary and quick actions",
                        desc: "Intuitive dashboard design providing users with clear financial overviews."
                    },
                    { 
                        src: "/image/ACYRLIC-5.jpg", 
                        alt: "Transaction details screen with categorization and charts",
                        desc: "Detailed transaction analytics helping users better understand their spending."
                    },
                ]
            },
            {
                title: "NEON SIGN BOARD",
                category: "NEON SIGN BOARD",
                images: [
                    { 
                        src: "/image/neon-1.jpg", 
                        alt: "Social media campaign visuals showing different ad creatives",
                        desc: "Multi-platform social media campaign driving engagement and conversions."
                    },
                    { 
                        src: "/image/neon-2.jpg", 
                        alt: "Analytics dashboard showing campaign performance metrics",
                        desc: "Data-driven campaign optimization based on real-time performance analytics."
                    },
                    { 
                        src: "/image/neon-3.jpg", 
                        alt: "Email marketing templates with responsive design",
                        desc: "Custom email marketing templates designed for high open and click-through rates."
                    },
                     { 
                        src: "/image/neon-4.jpg", 
                        alt: "Mobile app dashboard showing account summary and quick actions",
                        desc: "Intuitive dashboard design providing users with clear financial overviews."
                    },
                    { 
                        src: "/image/neon-5.jpg", 
                        alt: "Transaction details screen with categorization and charts",
                        desc: "Detailed transaction analytics helping users better understand their spending."
                    },
                ]
            }
        ];
        
        // Display projects
        function displayProjects(filter = 'all') {
            portfolioGrid.innerHTML = '';
            
            const filteredProjects = filter === 'all' ? 
                projects : projects.filter(project => project.category === filter);
                
            filteredProjects.forEach(project => {
                const projectItem = document.createElement('div');
                projectItem.className = 'portfolio-item';
                projectItem.dataset.category = project.category;
                
                projectItem.innerHTML = `
                    <img src="${project.images[0].src}" alt="${project.images[0].alt}">
                    <div class="portfolio-overlay">
                        <h3>${project.title}</h3>
                        <p>${project.images[0].desc}</p>
                    </div>
                `;
                
                projectItem.addEventListener('click', () => openProjectModal(project));
                portfolioGrid.appendChild(projectItem);
            });
        }
        
        // Filter projects
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');
                displayProjects(btn.dataset.filter);
            });
        });
        
        // Portfolio Modal
        const portfolioModal = document.querySelector('.portfolio-modal');
        const modalSlider = document.querySelector('.modal-slider');
        const modalNav = document.querySelector('.modal-nav');
        const modalClose = document.querySelector('.modal-close');
        
        function openProjectModal(project) {
            modalSlider.innerHTML = '';
            modalNav.innerHTML = '';
            
            project.images.forEach((image, index) => {
                // Add slide
                const slide = document.createElement('div');
                slide.className = 'modal-slide';
                
                slide.innerHTML = `
                    <img src="${image.src}" alt="${image.alt}">
                    <h3>${project.title}</h3>
                    <p>${image.desc}</p>
                `;
                
                modalSlider.appendChild(slide);
                
                // Add navigation dot
                const navItem = document.createElement('div');
                navItem.className = 'modal-nav-item';
                if (index === 0) navItem.classList.add('active');
                
                navItem.addEventListener('click', () => {
                    goToSlide(index);
                });
                
                modalNav.appendChild(navItem);
            });
            
            portfolioModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        modalClose.addEventListener('click', () => {
            portfolioModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        portfolioModal.addEventListener('click', (e) => {
            if (e.target === portfolioModal) {
                portfolioModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        function goToSlide(index) {
            const slides = document.querySelectorAll('.modal-slide');
            if (index >= slides.length) index = 0;
            if (index < 0) index = slides.length - 1;
            
            modalSlider.style.transform = `translateX(-${index * 100}%)`;
            
            document.querySelectorAll('.modal-nav-item').forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
        }
        
        // Display initial projects
        displayProjects();
        
        // Testimonials Section
        const testimonials = [
            {
                quote: "Murlidhar graphics Impression is a new-age design thinking company having immense expertise in design and execution. We have been serving our client with  in advertising and commercial design & Printing for the last 20 years.",
                name: "Dr. Mittal",
                role:"⭐️⭐️⭐️⭐️⭐",
                img: "/image/logo.jpeg"
            },
            {
                quote: " We have helped various leading organizations from multiple domains including Entertainment, Finance, Real Estate, Food and Hospitality, FMCG, E-Commerce, Retail, Interior, Government agencies and Hospitals with impactful design solutions & printing solution",
                name: "Parth Mistry",
                role:"⭐️⭐️⭐️⭐️⭐",
                img: "/image/logo-2.jpeg"
            },
            {
                quote: "Outstanding work on our ACP installation. They delivered on time, within budget, and the quality is exceptional.",
                name: "Akshay Kollur",
                role:"⭐️⭐️⭐️⭐️⭐",
                img: "/image/logo-3.jpeg"
            },
            {
                quote: "Our LED display project was complex, but Black Team managed everything perfectly from concept to installation.",
                name: "Sahil Panchal",
                role:"⭐️⭐️⭐️⭐️⭐",
                img: "/image/logo-4.jpeg"
            },
            {
                quote: "Working with Black Team was a game-changer for our brand. Their strategic consultation was worth every penny.",
                name: "Minish",
                role: "⭐️⭐️⭐️⭐️⭐",
                img: "/image/logo-5.jpeg"
            }
        ];
        
        const testimonialsSlider = document.querySelector('.testimonials-slider');
        const sliderDots = document.querySelector('.slider-nav');
        let currentTestimonial = 0;
        
        function displayTestimonials() {
            testimonialsSlider.innerHTML = '';
            
            testimonials.forEach((testimonial, index) => {
                const testimonialItem = document.createElement('div');
                testimonialItem.className = `testimonials-slide ${index === currentTestimonial ? 'active' : ''}`;
                
                testimonialItem.innerHTML = `
                    <div class="client-img">
                        <img src="${testimonial.img}" alt="Portrait of ${testimonial.name}, ${testimonial.role}">
                    </div>
                    <p class="client-quote">"${testimonial.quote}"</p>
                    <h4 class="client-name">${testimonial.name}</h4>
                    <p class="client-role">${testimonial.role}</p>
                `;
                
                testimonialsSlider.appendChild(testimonialItem);
            });
            
            // Update dots
            sliderDots.innerHTML = '';
            testimonials.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = `slider-dot ${index === currentTestimonial ? 'active' : ''}`;
                dot.addEventListener('click', () => {
                    currentTestimonial = index;
                    displayTestimonials();
                });
                sliderDots.appendChild(dot);
            });
        }
        
        function rotateTestimonials() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            displayTestimonials();
        }
        
        // Display initial testimonials
        displayTestimonials();
        
        // Rotate testimonials every 5 seconds
        setInterval(rotateTestimonials, 5000);
        
        // Contact Form Submission
        const contactForm = document.querySelector('.contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
        
        // Add animation on scroll
        function animateOnScroll() {
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight - 100) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Set initial styles for animation
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.6s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);