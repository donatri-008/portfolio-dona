// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  const icon = mobileMenuBtn.querySelector("i");
  if (mobileMenu.classList.contains("hidden")) {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  } else {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    // Close mobile menu if open
    mobileMenu.classList.add("hidden");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});

// Project buttons redirect to detail page
document.querySelectorAll(".view-project-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const projectCard = e.target.closest("[data-project]");
    const projectKey = projectCard.dataset.project;
    window.location.href = `project-detail.html?project=${projectKey}`;
  });
});

// Contact form handling
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Simple validation
  if (!name || !email || !subject || !message) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Mohon lengkapi semua field!',
      confirmButtonColor: '#344CB7',
      background: '#344CB7',
      color: '#ffffff',
      customClass: {
        popup: 'rounded-2xl p-4',
        title: 'font-bold text-2xl',
        htmlContainer: 'text-lg',
        confirmButton: 'rounded-full py-2 px-6 text-white hover:bg-[#52B2CF] transition-colors duration-300'
      }
    });
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Format email tidak valid!',
      width: '400px',
      confirmButtonColor: '#344CB7',
      background: '#344CB7',
      color: '#ffffff',
      customClass: {
        popup: 'rounded-2xl p-4',
        title: 'font-bold text-2xl',
        htmlContainer: 'text-lg',
        confirmButton: 'rounded-full py-2 px-6 text-white hover:bg-[#52B2CF] transition-colors duration-300'
      }
    });
    return;
  }

  // Update button state
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Mengirim...';
  submitBtn.disabled = true;

  try {
    // Send form data to Netlify
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.',
        width: '400px',
        confirmButtonColor: '#344CB7',
        background: '#ffffff',
        color: '#000000',
        iconColor: '#344CB7',
        customClass: {
          popup: 'rounded-2xl p-4',
          title: 'font-bold text-2xl',
          htmlContainer: 'text-lg',
          confirmButton: 'rounded-full py-2 px-6 text-white hover:bg-[#6366f1] transition-colors duration-300'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          contactForm.reset();
        }
      });
    } else {
      throw new Error("Gagal mengirim pesan.");
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.',
      width: '400px',
      confirmButtonColor: '#344CB7',
      background: '#ffffff',
      color: '#000000',
      customClass: {
        popup: 'rounded-2xl p-4',
        title: 'font-bold text-2xl',
        htmlContainer: 'text-lg',
        confirmButton: 'rounded-full py-2 px-6 text-white hover:bg-[#6366f1] transition-colors duration-300'
      }
    });
    console.error(error);
  } finally {
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.classList.add("animate-fade-in");
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".skill-item, section > div").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  observer.observe(el);
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add shadow on scroll
  if (scrollTop > 100) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }

  lastScrollTop = scrollTop;
});

// Back to top button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.pointerEvents = "auto";
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.pointerEvents = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// CSS animations
const style = document.createElement("style");
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
        50% { box-shadow: 0 0 40pxrgb(99, 102, 241); }
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .nav-link {
        position: relative;
    }
    
    .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 50%;
        background: linear-gradient(to right, #344CB7, #52B2CF);
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }
    
    .nav-link:hover::after {
        width: 100%;
    }
    
    .skill-item:hover {
        transform: scale(1.02);
        transition: all 0.3s ease;
    }
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #344CB7, #52B2CF);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #52B2CF, #10B981);
    }
    
    /* Smooth transitions for all interactive elements */
    * {
        transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// Initialize scroll animations
const initScrollAnimations = () => {
  const elements = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));
};

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initScrollAnimations);

// Performance optimization: Lazy load images
const lazyImages = document.querySelectorAll("img[data-src]");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach((img) => imageObserver.observe(img));
