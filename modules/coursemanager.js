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

    isCourseAvailable(courseName) {
        try {
            if (typeof courseName !== 'string') {
                throw new Error('Course name should be a string');
            }
            return courseName in this.courses;
        } catch (error) {
            console.error(`Error in isCourseAvailable: ${error.message}`);
            return false;
        }
    }

    getHOD(courseName) {
        try {
            if (typeof courseName !== 'string') {
                throw new Error('Course name should be a string');
            }
            return this.courses[courseName]?.hod || 'Course not found';
        } catch (error) {
            console.error(`Error in getHOD: ${error.message}`);
            return 'Error retrieving HOD';
        }
    }