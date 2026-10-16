document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 2. Dark/Light Theme Switcher with LocalStorage
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Light Mode';
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙 Dark Mode';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️ Light Mode';
        }
    });

    // 3. Form Validation
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const formSuccess = document.getElementById('form-success');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (isValid) {
            formSuccess.style.display = 'block';
            form.reset();
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 4000);
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const loadBtn = document.getElementById('load-data-btn');
    const dataContainer = document.getElementById('data-container');
    const loadingIndicator = document.getElementById('loading');

    loadBtn.addEventListener('click', async () => {
        // 1. Show loading state & clear previous data
        loadingIndicator.style.display = 'block';
        dataContainer.innerHTML = '';

        try {
            // 2. Await the fetch request
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');

            // 3. Check if response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // 4. Parse the response as JSON
            const posts = await response.json();

            // 5. Render data dynamically into the DOM
            posts.forEach(post => {
                const card = document.createElement('article');
                card.classList.add('card');
                
                card.innerHTML = `
                    <h4>${post.title}</h4>
                    <p>${post.body}</p>
                `;
                
                dataContainer.appendChild(card);
            });

        } catch (error) {
            // 6. Handle errors gracefully
            console.p("Fetch error:", error);
            dataContainer.innerHTML = `<p class="error-message">Failed to load data. Please try again later.</p>`;
        } finally {
            // 7. Hide loading indicator whether successful or failed
            loadingIndicator.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const loadBtn = document.getElementById('load-data-btn');
    const dataContainer = document.getElementById('data-container');
    const loadingIndicator = document.getElementById('loading');

    loadBtn.addEventListener('click', async () => {
        // 1. Show loading state & clear previous data
        loadingIndicator.style.display = 'block';
        dataContainer.innerHTML = '';

        try {
            // 2. Await the fetch request
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');

            // 3. Check if response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // 4. Parse the response as JSON
            const posts = await response.json();

            // 5. Render data dynamically into the DOM
            posts.forEach(post => {
                const card = document.createElement('article');
                card.classList.add('card');
                
                card.innerHTML = `
                    <h4>${post.title}</h4>
                    <p>${post.body}</p>
                `;
                
                dataContainer.appendChild(card);
            });

        } catch (error) {
            // 6. Handle errors gracefully
            console.p("Fetch error:", error);
            dataContainer.innerHTML = `<p class="error-message">Failed to load data. Please try again later.</p>`;
        } finally {
            // 7. Hide loading indicator whether successful or failed
            loadingIndicator.style.display = 'none';
        }
    });
});