export const updateWelcomeMessage = () => {
    const welcomeElement = document.querySelector('.welcome-message');
    if (welcomeElement) welcomeElement.textContent = 'Welcome to our University Portal';
};

export const populateCoursesList = (courses) => {
    const coursesList = document.getElementById('coursesList');
    if (coursesList) {
        coursesList.innerHTML = '';
        Object.keys(courses).forEach(course => {
            const listItem = document.createElement('li');
            listItem.textContent = course;
            coursesList.appendChild(listItem);
        });
    }
};