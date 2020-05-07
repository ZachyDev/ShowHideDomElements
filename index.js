const button = document.querySelector('button');
button.addEventListener('click',() => {
    const details = document.getElementById('details');
    if (details.classList.contains('details')) {
        details.classList.remove('details');
        button.textContent = 'Show Details';
    }
    else {
        details.classList.add('details')
        button.textContent = 'Close details';
    }
});