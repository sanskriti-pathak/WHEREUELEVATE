export const updateWelcomeMessage = () => {
    const welcomeElement = document.querySelector('.welcome-message');
    if (welcomeElement) welcomeElement.textContent = 'Welcome to our University Portal';
};
