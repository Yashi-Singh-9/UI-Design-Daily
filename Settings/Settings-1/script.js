document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Dark Mode Toggle
    const darkModeToggle = document.querySelector('input[type="checkbox"][checked]');
    darkModeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });

    // Desktop Notification Toggle
    const notificationToggle = document.querySelector('input[type="checkbox"]:not([checked])');
    notificationToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            alert('Desktop notifications enabled.');
        } else {
            alert('Desktop notifications disabled.');
        }
    });

    // Focused Inbox Toggle
    const focusedInboxToggle = document.querySelectorAll('input[type="checkbox"]:not([checked])')[1];
    focusedInboxToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            alert('Focused Inbox enabled.');
        } else {
            alert('Focused Inbox disabled.');
        }
    });

    // Conversation View Radio Buttons
    document.querySelectorAll('input[name="conv-view"]').forEach((radio) => {
        radio.addEventListener('change', (e) => {
            const label = document.querySelector(`label[for="${e.target.id}"]`);
                alert(`Conversation View set to: ${label.textContent}`);
        });
    });

    // Reading Panel Radio Buttons
    const readingRadios = document.querySelectorAll('input[name="read-panel"]');
    readingRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const label = document.querySelector(`label[for="${e.target.id}"]`);
                alert(`Reading panel set to: ${label.textContent}`);
        });
    });
});