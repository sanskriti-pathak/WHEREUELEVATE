import Course from './course.js';

export default class CourseManager {
    constructor(coursesData) {
        this.courses = Object.keys(coursesData).reduce((acc, courseName) => {
            acc[courseName] = new Course(coursesData[courseName]);
            return acc;
        }, {});
    }