const card = document.getElementById('card');

// Toggle card open/close
card.addEventListener('click', (e) => {
    // Don't close if they click the celebrate button specifically
    if (e.target.tagName === 'BUTTON') return;

    const isOpen = card.classList.toggle('open');
    if (isOpen) {
        setTimeout(launchConfetti, 600);
    }
});

function party(e) {
    e.stopPropagation();
    launchConfetti();
}

function launchConfetti() {
    const end = Date.now() + (2 * 1000);
    const colors = ['#6c5ce7', '#fd79a8', '#fab1a0', '#00cec9'];

    (function frame() {
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 },
            colors: colors
        });
        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.7 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}