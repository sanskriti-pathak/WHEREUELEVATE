export default class University {
    constructor(data) {
        this.name = data.university.name;
        this.studentsCount = data.university.studentsCount;
        this.isCollegeOpen = data.university.isCollegeOpen;
    }

    displayInfo() {
        console.log(`Welcome to ${this.name}`);
        console.log(`Total Students: ${this.studentsCount}`);
        console.log(`College Open: ${this.isCollegeOpen}`);
    }
