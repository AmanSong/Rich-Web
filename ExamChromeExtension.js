// Replace the domain in anchor elements
document.querySelectorAll('a').forEach(function (a) {
    a.href = a.href.replace('://www.dit.ie/', '://www.tudublin.ie/');
});

// Style paragraphs on mouseover
document.addEventListener('mouseover', function (event) {
    if (event.target.tagName.toLowerCase() === 'p') {
        event.target.style.fontWeight = 'bold';
        event.target.style.fontSize = '133%';
        event.target.style.width = '80%';
        event.target.style.backgroundColor = 'yellow';
    }
});

// Hide paragraphs on click
document.addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() === 'p') {
        event.target.style.display = 'none';
    }
});
