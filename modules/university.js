export default class University {
    constructor(data) {
        this.name = data.university.name;
        this.studentsCount = data.university.studentsCount;
        this.isCollegeOpen = data.university.isCollegeOpen;
    }