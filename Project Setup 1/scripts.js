document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.category-card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Check if the clicked card is already highlighted
            if (this.classList.contains('highlighted')) {
                // If it is highlighted, remove the highlight
                this.classList.remove('highlighted');
            } else {
                // If it is not highlighted, remove highlight from all cards
                cards.forEach(c => c.classList.remove('highlighted'));
                // Add highlight to the clicked card
                this.classList.add('highlighted');
            }
        });
    });
});
