// 1. Define Content for Arvind Kumar Varma
const pages = {
    home: `
        <div class="fade-in home-container">
            <div class="home-content">
                <h3>Hello, I am</h3>
                <h1>Arvind Kumar Varma</h1>
                <h3>I am a <span class="typing-text"></span></h3>
                <p>A final year BSc IT student passionate about building efficient web applications using PHP and MySQL.</p>
                <div class="btn-group">
                    <a href="#" onclick="loadContent('projects')" class="btn">View My Work</a>
                    <!-- Replace 'resume.pdf' with your actual file -->
                    <a href="resume.pdf" download class="btn btn-outline">Download Resume</a>
                </div>
            </div>
            <div class="home-img">
                <!-- Replace src with your actual photo path -->
                <img src="https://via.placeholder.com/300" alt="Arvind Profile">
            </div>
        </div>
    `,
    about: `
        <div class="fade-in">
            <h1>About <span>Me</span></h1>
            <p>I am Arvind Kumar Varma, currently in my 3rd (Final) year of BSc IT. I specialize in backend development and database management.</p>
            <br>
            <p>My academic focus has been on creating functional web-based systems that solve real-world problems. I enjoy working with logic-heavy backend languages.</p>
            <br>
            <h3>Technical Skills:</h3>
            <ul style="color: var(--text-secondary); margin-left: 20px; margin-top: 10px;">
                <li><strong>Languages:</strong> PHP 8+, JavaScript, HTML5, CSS3</li>
                <li><strong>Database:</strong> MySQL / MariaDB</li>
                <li><strong>Security:</strong> PDO, SQL Injection Prevention</li>
                <li><strong>Tools:</strong> XAMPP, VS Code, Git</li>
            </ul>
        </div>
    `,
    projects: `
        <div class="fade-in">
            <h1>My <span>Projects</span></h1>
            <p>Here are the key projects I have developed:</p>
            
            <div class="projects-grid">
                
                <!-- Project 1: Gyan Shala (Library) -->
                <div class="project-card">
                    <h3 style="color: var(--main-color);">Gyan Shala Library</h3>
                    <p style="margin: 10px 0;">
                        A robust, Role-Based Access Control (RBAC) system. Features include secure user authentication, book inventory, and borrowing lifecycle tracking using <strong>PDO</strong> for security.
                    </p>
                    <div class="tech-stack">PHP • MySQL • PDO • HTML • CSS</div>
                    <a href="https://github.com/ArvindKumar24/Library-Management-System" target="_blank" class="btn" style="padding: 8px 20px; font-size: 14px; margin-top: 15px;">View Code</a>
                </div>

                <!-- Project 2: BMI Calculator -->
                <div class="project-card">
                    <h3 style="color: var(--main-color);">BMI Calculator</h3>
                    <p style="margin: 10px 0;">
                        A responsive health tool that calculates Body Mass Index in real-time. Supports switching between <strong>Metric (kg/cm)</strong> and <strong>Imperial (lbs/in)</strong> units with dynamic UI updates.
                    </p>
                    <div class="tech-stack">JavaScript • HTML5 • CSS3</div>
                    <a href="https://github.com/ArvindKumar24/BMI-Body-mass-index-Calculator" target="_blank" class="btn" style="padding: 8px 20px; font-size: 14px; margin-top: 15px;">View Code</a>
                </div>

                <!-- Project 3: Snake Game -->
                <div class="project-card">
                    <h3 style="color: var(--main-color);">Responsive Snake Game</h3>
                    <p style="margin: 10px 0;">
                        A classic arcade game built for the web. Optimized for both desktop (arrow keys) and mobile (swipe gestures). Features score tracking and collision detection.
                    </p>
                    <div class="tech-stack">JavaScript • HTML5 Canvas • CSS3</div>
                    <a href="https://arvindkumar24.github.io/snake-game/" target="_blank" class="btn" style="padding: 8px 20px; font-size: 14px; margin-top: 15px;">Play Live</a>
                </div>

                <!-- Project 4: Notes Sharing Platform -->
                <div class="project-card">
                    <h3 style="color: var(--main-color);">Notes Sharing Platform</h3>
                    <p style="margin: 10px 0;">
                        An academic collaboration platform allowing students and teachers to upload, search, and download PDF notes. Includes user authentication and file management.
                    </p>
                    <div class="tech-stack">PHP • MySQL • Bootstrap</div>
                    <!-- If you have a link, replace '#' below. If not, keep '#' -->
                    <a href="#" class="btn" style="padding: 8px 20px; font-size: 14px; margin-top: 15px;">View Details</a>
                </div>

            </div>
        </div>
    `,
    contact: `
        <div class="fade-in" style="display:flex; flex-direction:column; align-items:center;">
            <h1>Contact <span>Me</span></h1>
            <p>Have a question or want to work together?</p>
            
            <!-- REMEMBER TO REPLACE 'YOUR_FORMSPREE_ID' WITH YOUR ACTUAL ID -->
            <form id="contact-form" action="https://formspree.io/f/mdkqoyrw" method="POST" onsubmit="submitForm(event)">
                <div class="input-box">
                    <input type="text" name="name" placeholder="Your Name" required>
                </div>
                <div class="input-box">
                    <input type="email" name="email" placeholder="Email Address" required>
                </div>
                <div class="input-box">
                    <textarea name="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" class="btn" style="width:100%;">Send Message</button>
                <div id="form-status"></div>
            </form>
        </div>
    `
};

// 2. Load Content Function
function loadContent(pageName) {
    const app = document.getElementById('app');
    app.innerHTML = pages[pageName] || pages['home'];

    // Highlight Active Link
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    let activeLink = document.getElementById('link-' + pageName);
    if(activeLink) activeLink.classList.add('active');

    // Re-initialize typing effect if on home page
    if (pageName === 'home' || pageName === undefined) {
        setTimeout(startTyping, 100);
    }
}

// 3. Typewriter Effect
function startTyping() {
    const textElement = document.querySelector('.typing-text');
    if(window.typewriterTimeout) clearTimeout(window.typewriterTimeout);
    
    if(textElement) {
        const textToType = "Web Developer";
        textElement.innerText = ""; 
        let i = 0;
        
        function typeWriter() {
            if (i < textToType.length) {
                textElement.innerHTML += textToType.charAt(i);
                i++;
                window.typewriterTimeout = setTimeout(typeWriter, 150); 
            }
        }
        typeWriter();
    }
}

// 4. Theme Toggle Logic
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('theme-toggle');

    if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// 5. AJAX Form Submission
async function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const data = new FormData(event.target);

    status.innerHTML = "Sending...";
    status.style.color = "var(--main-color)";

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Message sent successfully!";
            status.style.color = "#00e676";
            form.reset();
        } else {
            status.innerHTML = "Oops! There was a problem.";
            status.style.color = "#ff5252";
        }
    }).catch(error => {
        status.innerHTML = "Error sending message.";
        status.style.color = "#ff5252";
    });
}

// Initial Load
window.onload = () => loadContent('home');