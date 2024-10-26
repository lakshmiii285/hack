// Initialize barba.js for smooth page transitions
document.addEventListener('DOMContentLoaded', () => {
    barba.init({
        transitions: [{
            name: 'fade',
            leave(data) {
                return gsap.to(data.current.container, { opacity: 0 });
            },
            enter(data) {
                return gsap.from(data.next.container, { opacity: 0 });
            }
        }]
    });
});

// Navigate between pages
function navigateTo(url) {
    window.location.href = url;
}

// Show details when an event is clicked
function showEventDetails(eventName) {
    alert(`More information about: ${eventName}`);
}
