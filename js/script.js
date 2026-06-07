// ===========================
// Typing Animation
// ===========================

const roles = [
    "AI & Data Science Student",
    "Aspiring Software Developer",
    "Data Analytics Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ===========================
// Navbar Background Effect
// ===========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(11,17,32,0.95)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        navbar.style.background =
            "rgba(17,24,39,.7)";

        navbar.style.boxShadow = "none";
    }
});


// ===========================
// Scroll Reveal Animation
// ===========================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform =
                "translateY(0px)";
        }

    });

},

{
    threshold: 0.15
}

);

const animatedElements = document.querySelectorAll(
    ".skill-item, .project-card, .stat-card, .contact-card, .timeline-content, .achievement-card"
);

animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition =
        "all 0.8s ease";

    observer.observe(element);

});


// ===========================
// Animated Stats Counter
// ===========================

const stats = document.querySelectorAll(".stat-card h2");

const counterObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter =
                entry.target;

            const text =
                counter.innerText;

            const number =
                parseInt(text);

            if (isNaN(number))
                return;

            let count = 0;

            const speed =
                number / 50;

            const updateCounter = () => {

                if (count < number) {

                    count += speed;

                    counter.innerText =
                        Math.floor(count) + "+";

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.innerText =
                        text;
                }
            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},

{
    threshold: 0.5
}

);

stats.forEach(stat => {
    counterObserver.observe(stat);
});


// ===========================
// Smooth Active Navbar Links
// ===========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// ===========================
// Console Message
// ===========================

console.log(
    "Portfolio Developed by Madhumitha P"
);


// ===========================
// Contact Form Handler
// ===========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const formElements = this.elements;
        const name = formElements[0].value;
        const email = formElements[1].value;
        const subject = formElements[2].value;
        const message = formElements[3].value;

        // Send email via EmailJS (optional) or just show success message
        // For now, we'll show a success message
        
        alert("Thank you " + name + "! Your message has been sent successfully.\nI'll get back to you soon at " + email);
        
        // Reset form
        contactForm.reset();
    });
}