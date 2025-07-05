// Project data
const projectData = {
    stokify: {
        title: "Stokify - Sistem Manajemen Inventaris",
        subtitle: "Web-based Inventory Management System",
        description: "Sistem inventaris berbasis web menggunakan Laravel dengan fokus pada implementasi sistem CRUD dan pengelolaan database yang optimal.",
        images: [
            "/img/inventaris (4).png",
            "/img/inventaris (1).png",
            "/img/inventaris (5).png",
            "/img/inventaris (2).png",
            "/img/inventaris (3).png",
            "/img/inventaris (6).png"
        ],
        technologies: ["Laravel", "MySQL", "PHP", "HTML", "CSS", "JavaScript"],
        features: [
            "Sistem CRUD lengkap untuk manajemen inventaris",
            "Dashboard dengan statistik inventaris",
            "Sistem autentikasi pengguna",
            "Interface responsif dan user-friendly",
            "Manajemen kategori produk"
        ],
        role: "Frontend & Backend Developer",
        team: "4 orang",
        duration: "Mei 2025",
        achievements: [
            "Implementasi database yang optimal",
            "Sistem CRUD yang efisien",
            "Interface yang user-friendly"
        ]
    },
    lamanliterasi: {
        title: "LamanLiterasi - Aplikasi Manajemen Buku",
        subtitle: "Book Management Web Application",
        description: "Aplikasi web untuk manajemen buku dengan arsitektur database MySQL dan REST API dengan autentikasi JWT.",
        images: [
            "/img/LamanLiterasi (2).png",
            "/img/LamanLiterasi (1).png",
            "/img/LamanLiterasi (3).png"
        ],
        technologies: ["Laravel", "MySQL", "REST API", "JWT", "Blade Templating"],
        features: [
            "REST API lengkap untuk operasi CRUD buku",
            "Sistem autentikasi JWT",
            "Interface responsif dengan Blade Templating",
            "Pencarian dan filter buku",
            "Sistem kategori buku"
        ],
        role: "Frontend & Backend Developer",
        team: "3 orang",
        duration: "Mei 2025",
        achievements: [
            "Implementasi keamanan sistem yang robust",
            "API yang terstruktur dengan baik",
            "Performa optimal"
        ]
    },
    uxperience: {
        title: "UXperience - Desain UI/UX Aplikasi Pulsa",
        subtitle: "Mobile App UI/UX Design",
        description: "Desain wireframe, prototipe interaktif, dan desain visual responsif untuk aplikasi pembelian pulsa menggunakan Figma.",
        images: [
            "/img/uxperience (1).png",
            "/img/uxperience (2).png",
            "/img/uxperience (4).png",
            "/img/uxperience (5).png",
        ],
        technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
        features: [
            "User research dan persona development",
            "Wireframe dan user flow mapping",
            "High-fidelity prototype interaktif",
            "Responsive design untuk mobile",
            "Usability testing",
            "Design system"
        ],
        role: "UI/UX Designer",
        team: "3 orang",
        duration: "Feb 2025",
        achievements: [
            "Feedback positif dari user testing",
            "Design system yang konsisten",
            "Prototype interaktif yang intuitive"
        ]
    },
    taskbloom: {
    title: "TaskBloom - Desain UI/UX Manajemen Tugas",
    subtitle: "Task Management App Design",
    description: "Mockup dan prototipe interaktif untuk aplikasi manajemen tugas sederhana dengan fokus pada user experience yang intuitif, mendukung fitur dasar seperti sign up/sign in, lupa password, menambahkan tugas, dan menandai tugas selesai/belum.",
    images: [
        "/img/taskbloom (1).png",
        "/img/taskbloom (2).png",
        "/img/taskbloom (4).png"
    ],
    technologies: ["Figma", "UI/UX Design", "Mockup", "Interactive Prototype"],
    features: [
        "Sign up and sign in functionality",
        "Forgot password feature",
        "Add new tasks",
        "Mark tasks as complete or incomplete"
    ],
    role: "UI/UX Designer",
    team: "3 orang",
    duration: "Mei 2025",
    achievements: [
        "Prototipe interaktif dengan feedback positif",
        "Design yang user-friendly",
        "Comprehensive design documentation"
    ]
},
    portfolio: {
        title: "Portfolio Website - Web Interaktif",
        subtitle: "Interactive & Responsive Portfolio",
        description: "Website portofolio interaktif dan responsif untuk menampilkan profil, keahlian, dan proyek dengan fokus pada user experience dan performance optimization.",
        images: [
            "/img/portfolio (1).png",
            "/img/portfolio (3).png",
            "/img/portfolio (4).png",
            "/img/portfolio (5).png",
            "/img/portfolio (2).png"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "MySQL", "Responsive Design", "SEO Optimization"],
        features: [
            "Design responsif untuk semua device",
            "Animasi interaktif dengan CSS dan JavaScript",
            "Formulir kontak dinamis dengan validation",
            "Optimasi SEO dan performance"
        ],
        role: "Frontend Developer",
        team: "3 orang",
        duration: "Des 2024 - Jan 2025",
        achievements: [
            "Website fully responsive di semua device",
            "Loading time yang optimal",
            "SEO optimization yang baik"
        ]
    },
};

// Get project key from URL
const urlParams = new URLSearchParams(window.location.search);
const projectKey = urlParams.get('project');
const project = projectData[projectKey];

if (project) {
    // Populate project details
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-subtitle').textContent = project.subtitle;
    document.getElementById('project-description').textContent = project.description;
    document.getElementById('project-role').textContent = project.role;
    document.getElementById('project-team').textContent = project.team;
    document.getElementById('project-duration').textContent = project.duration;

    // Populate technologies
    const technologiesContainer = document.getElementById('project-technologies');
    technologiesContainer.innerHTML = project.technologies
        .map(tech => `
            <span class="bg-gradient-to-r from-primary/10 to-primary/5 text-violet-blue px-3 py-1 rounded-full text-sm font-medium border border-primary/20">${tech}</span>
        `).join('');

    // Populate achievements
    const achievementsContainer = document.getElementById('project-achievements');
    achievementsContainer.innerHTML = project.achievements
        .map(achievement => `<li>${achievement}</li>`).join('');

    // Populate features
    const featuresContainer = document.getElementById('project-features');
    featuresContainer.innerHTML = project.features
        .map(feature => `
            <div class="flex items-start space-x-3 p-3 bg-gradient-to-r from-violet-blue/10 to-violet-blue/5 rounded-xl">
                <i class="fas fa-check-circle text-secondary/70 mt-1 flex-shrink-0"></i>
                <span class="text-violet-blue/80">${feature}</span>
            </div>
        `).join('');

    // Populate carousel
    const galleryContainer = document.getElementById('project-gallery');
    let imageHTML = '';
    if (projectKey === 'stokify') {
        imageHTML = project.images
            .map(image => `
                <div class="carousel-item flex-shrink-0 w-full">
                    <div class="relative w-full aspect-[1893/819] rounded-xl overflow-hidden shadow-lg">
                        <img src="${image}" alt="${project.title} Image" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            `).join('');
    } else if (projectKey === 'portfolio') {
        imageHTML = project.images
            .map(image => `
                <div class="carousel-item flex-shrink-0 w-full">
                    <div class="relative w-full aspect-[1901/850] rounded-xl overflow-hidden shadow-lg">
                        <img src="${image}" alt="${project.title} Image" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            `).join('');
    } else {
        imageHTML = project.images
            .map(image => `
                <div class="carousel-item flex-shrink-0 w-full">
                    <div class="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                        <img src="${image}" alt="${project.title} Image" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            `).join('');
    }
    galleryContainer.innerHTML = imageHTML;

    // Carousel functionality
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    let currentIndex = 0;

    // Create indicators
    project.images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const updateCarousel = () => {
        carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    };

    const goToSlide = (index) => {
        currentIndex = index;
        if (currentIndex >= carouselItems.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = carouselItems.length - 1;
        updateCarousel();
    };

    prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));

    setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 5000);
} else {
    window.location.href = 'index.html#projects';
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        window.location.href = targetId;
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('#project-content > div').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});
