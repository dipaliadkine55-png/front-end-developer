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