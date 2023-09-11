onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

// Define the target date and time for availability (September 12, 2023, 01:00 AM)
const targetDate = new Date('2023-09-11T16:32:00');

// Get the current date and time
const currentDate = new Date();

// Compare the current date with the target date
if (currentDate < targetDate) {
    // Page is not yet available, display a message
    document.getElementById('content').innerHTML = "<h1>Page non disponible pour l'instant</h1><p>Veuillez consulter à nouveau cette page le 12 septembre 2023.</p>";
}

