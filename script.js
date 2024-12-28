
document.getElementById('playButton').addEventListener('click', function() {
    alert('Вы начали играть в Raketka!');
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert('Спасибо за сообщение, ' + name + '! Мы свяжемся с вами по email: ' + email);
});


document.querySelectorAll('.interactive-image').forEach(function(img) {
    img.addEventListener('mouseover', function() {
        const hoverSrc = img.getAttribute('data-hover');
        img.setAttribute('src', hoverSrc);
    });

    img.addEventListener('mouseout', function() {
        const originalSrc = img.getAttribute('src');
        img.setAttribute('src', originalSrc);
    });
});
