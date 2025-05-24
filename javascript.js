// Combined JavaScript for CyberXinfo Website

// Global variables
let mouseX = 0;
let mouseY = 0;
let scannerElement = null;
let isMenuOpen = false;

// Initialize all interactive elements
function initWebsite() {
    // Initialize futuristic navbar
    initFuturisticNavbar();
    
    // Log that the site has loaded
    console.log('CyberXinfo website loaded successfully');
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add hover effect for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(77, 92, 109, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Initialize floating particles
    initFloatingParticles();
}

// Initialize futuristic navbar features
function initFuturisticNavbar() {
    // Create scanner element if it doesn't exist
    if (!document.querySelector(".cyber-scanner")) {
        scannerElement = document.createElement("div");
        scannerElement.classList.add("cyber-scanner");
        document.querySelector("header").appendChild(scannerElement);
    } else {
        scannerElement = document.querySelector(".cyber-scanner");
    }

    // Initialize scanner tracking
    document.addEventListener("mousemove", trackMousePosition);

    // Update scanner position on animation frame
    requestAnimationFrame(updateScanner);

    // Add digital noise effect
    addDigitalNoise();

    // Add hover sound effects
    addHoverSoundEffects();

    // Add scroll effects
    window.addEventListener("scroll", handleScroll);

    // Initial navbar state
    handleScroll();
}

// Initialize floating particles effect
function initFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    if (particlesContainer) {
        const numberOfParticles = 15;
        
        for (let i = 0; i < numberOfParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random size between 5 and 15px
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            particle.style.animation = `float ${duration}s infinite ease-in-out`;
            
            particlesContainer.appendChild(particle);
        }
    }
}

// Toggle mobile menu
function toggleMenu() {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileNavOverlay = document.getElementById("mobile-nav-overlay");

    isMenuOpen = !isMenuOpen;

    if (mobileMenuToggle) {
        mobileMenuToggle.classList.toggle("active");
    }

    if (mobileNavOverlay) {
        mobileNavOverlay.classList.toggle("active");

        // Prevent body scrolling when menu is open
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        // Add scan line effect when opening menu
        if (isMenuOpen) {
            addScanLineEffect(mobileNavOverlay);
        }
    }
}

// Track mouse position
function trackMousePosition(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

// Update scanner position with smooth animation
function updateScanner() {
    if (scannerElement) {
        scannerElement.style.left = `${mouseX}px`;
        scannerElement.style.top = `${mouseY}px`;
    }
    requestAnimationFrame(updateScanner);
}

// Add digital noise effect to header
function addDigitalNoise() {
    const header = document.querySelector("header");

    // Create noise overlay if it doesn't exist
    if (!document.querySelector(".cyber-noise")) {
        const noiseElement = document.createElement("div");
        noiseElement.classList.add("cyber-noise");
        noiseElement.style.position = "absolute";
        noiseElement.style.inset = "0";
        noiseElement.style.opacity = "0.05";
        noiseElement.style.pointerEvents = "none";
        noiseElement.style.mixBlendMode = "overlay";
        noiseElement.style.zIndex = "1";

        header.appendChild(noiseElement);

        // Animate noise
        animateNoise(noiseElement);
    }
}

// Animate digital noise
function animateNoise(element) {
    let frames = 0;

    function updateNoise() {
        frames++;
        if (frames % 4 === 0) {
            // Update every 4 frames for performance
            const noise = generateNoiseDataURL(3, 0.1);
            element.style.backgroundImage = `url(${noise})`;
        }
        requestAnimationFrame(updateNoise);
    }

    requestAnimationFrame(updateNoise);
}

// Generate noise pattern
function generateNoiseDataURL(size, opacity) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;

    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = Math.random() * 255 * opacity;
    }

    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL("image/png");
}

// Trigger glitch text effect
function triggerGlitchEffect(e) {
    const element = e.target;
    element.classList.add("cyber-glitch-text");

    // Store the original text
    const originalText = element.textContent;
    const glitchInterval = setInterval(() => {
        element.textContent = generateGlitchText(originalText);
    }, 50);

    // Stop glitch effect after 500ms and restore original text
    setTimeout(() => {
        clearInterval(glitchInterval);
        element.textContent = originalText;
        element.classList.remove("cyber-glitch-text");
    }, 500);
}

// Generate glitched text (for .cyber-x, only use X-like/cyber characters)
function generateGlitchText(text) {
    // If the text is a single character (like 'X'), use only X-like glitch chars
    if (text.length === 1) {
        const glitchChars = ['X', '×', '✗', '✕', '⨯', '⤫', '𐌗', 'Ж', '⨉', '𝕏', '𝖃', '𝘟', '𝑿', '𝓧', '𝔛'];
        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
    }
    // Otherwise, use the original random glitch for other text
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?|';
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (Math.random() > 0.85) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        } else {
            result += text[i];
        }
    }
    return result;
}

// Add hover sound effects to navigation items
function addHoverSoundEffects() {
    const navItems = document.querySelectorAll(".cyber-nav-item, .cyber-mobile-nav-item");

    navItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            playHoverSound(200 + Math.random() * 100);
        });
    });
}

// Play hover sound with Web Audio API
function playHoverSound(frequency) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime); // Very quiet

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
        oscillator.stop(audioCtx.currentTime + 0.2);
    } catch (e) {
        // Silently fail if audio context isn't available
        console.log("Audio not available");
    }
}

// Handle scroll effects
function handleScroll() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector("header");

    if (scrollPosition > 20) {
        header.classList.add("scrolled");

        // Add scan line effect on scroll
        if (!document.querySelector(".cyber-scan-line") && Math.random() > 0.7) {
            addScanLineEffect(header);
        }
    } else {
        header.classList.remove("scrolled");
    }
}

// Add scan line effect
function addScanLineEffect(element) {
    const scanLine = document.createElement("div");
    scanLine.classList.add("cyber-scan-line");
    scanLine.style.position = "absolute";
    scanLine.style.height = "2px";
    scanLine.style.width = "100%";
    scanLine.style.background = "linear-gradient(90deg, transparent, rgba(156, 124, 214, 0.8), transparent)";
    scanLine.style.top = "0";
    scanLine.style.left = "0";
    scanLine.style.zIndex = "2";
    scanLine.style.animation = "scanLineMove 2s linear forwards";

    element.appendChild(scanLine);

    // Remove scan line after animation completes
    setTimeout(() => {
        scanLine.remove();
    }, 2000);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initWebsite);

// Set active class on navbar based on current page (robust version)
function normalizePageName(name) {
    return name.replace(/\.html$/, "").replace(/\\/g, "/");
}

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.cyber-nav-item');
    let currentPage = window.location.href.split('/').pop().split('?')[0].split('#')[0];

    // If on root or empty, treat as index.html
    if (!currentPage || currentPage === "" || currentPage === "/" || currentPage === "index.html") {
        currentPage = "index.html";
    }

    currentPage = normalizePageName(currentPage);

    navLinks.forEach(link => {
        link.classList.remove('active');
        let linkHref = normalizePageName(link.getAttribute('href'));
        if (
            linkHref === currentPage ||
            (linkHref === "index" && currentPage === "index.html") ||
            (linkHref === "index" && currentPage === "index")
        ) {
            link.classList.add('active');
        }
    });
});

// Set active class on mobile navbar based on current page (robust version)
document.addEventListener("DOMContentLoaded", function() {
    const mobileNavLinks = document.querySelectorAll('.cyber-mobile-nav-item');
    let currentPage = window.location.href.split('/').pop().split('?')[0].split('#')[0];

    if (!currentPage || currentPage === "" || currentPage === "/" || currentPage === "index.html") {
        currentPage = "index.html";
    }

    currentPage = normalizePageName(currentPage);

    mobileNavLinks.forEach(link => {
        link.classList.remove('active');
        let linkHref = normalizePageName(link.getAttribute('href'));
        if (
            linkHref === currentPage ||
            (linkHref === "index" && currentPage === "index.html") ||
            (linkHref === "index" && currentPage === "index")
        ) {
            link.classList.add('active');
        }
    });
});









