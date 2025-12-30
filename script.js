// Interactive animations and effects
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    // Observe all feature cards, testimonial cards, and pricing cards
    document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card').forEach(card => {
        observer.observe(card);
    });

    // Add stagger animation to feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.setProperty('--i', index);
    });

    // Add stagger animation to testimonial cards
    document.querySelectorAll('.testimonial-card').forEach((card, index) => {
        card.style.setProperty('--i', index);
    });

    // Add stagger animation to pricing cards
    document.querySelectorAll('.pricing-card').forEach((card, index) => {
        card.style.setProperty('--i', index);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Create floating background orbs
    function createFloatingOrb() {
        const orb = document.createElement('div');
        orb.className = 'floating-orb';
        orb.style.left = Math.random() * 100 + '%';
        orb.style.top = Math.random() * 100 + '%';
        orb.style.animationDuration = (Math.random() * 10 + 10) + 's';
        orb.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(orb);

        setTimeout(() => {
            orb.remove();
        }, 15000);
    }

    // Create floating orbs every 2 seconds
    setInterval(createFloatingOrb, 2000);

    // Add particle effect to hero section
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        document.querySelector('.hero').appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 5000);
    }

    // Create particles every 300ms
    setInterval(createParticle, 300);

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);

    // Add hover sound effect (visual feedback)
    document.querySelectorAll('.btn, .feature-card, .pricing-card').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Add scroll-based header background change
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c)';
            header.style.backdropFilter = 'blur(10px)';
        }
    });

    // Add click ripple effect
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            this.appendChild(ripple);

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add mouse follower effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add parallax effect to background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        document.querySelectorAll('.floating-orb').forEach(orb => {
            orb.style.transform = `translateY(${rate * 0.1}px)`;
        });
    });
});

// Add CSS for particles, orbs, and cursor
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: float 5s linear infinite;
        top: 100%;
    }

    .floating-orb {
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        animation: float 15s ease-in-out infinite;
        z-index: -1;
    }

    .cursor-glow {
        position: fixed;
        width: 30px;
        height: 30px;
        background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        transform: translate(-50%, -50%);
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);