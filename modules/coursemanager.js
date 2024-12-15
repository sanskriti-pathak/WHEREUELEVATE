import Course from './course.js';

export default class CourseManager {
    constructor(coursesData) {
        this.courses = Object.keys(coursesData).reduce((acc, courseName) => {
            acc[courseName] = new Course(coursesData[courseName]);
            return acc;
        }, {});
    }

    calculateTotalFee() {
        try {
            return Object.values(this.courses).reduce((total, course) => total + course.fee, 0);
        } catch (error) {
            console.error(`Error in calculateTotalFee: ${error.message}`);
            return 0;
        }
    }