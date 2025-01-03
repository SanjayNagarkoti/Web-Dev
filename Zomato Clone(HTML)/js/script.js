// Script for potential interactive functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Zomato Clone loaded! Ready to add interactivity.');

    // Example: Input field focus effect
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.border = '2px solid #ff0000';
        });
        input.addEventListener('blur', () => {
            input.style.border = 'none';
        });
    });
});
