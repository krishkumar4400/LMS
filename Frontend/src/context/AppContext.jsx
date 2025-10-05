import React, { createContext, useEffect, useState } from 'react'
import { courseTags, dummyCourses } from '../assets/assets.js';
import humanizeDuration from 'humanize-duration';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY;

    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(false);

    // Fetch All Courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);
    }

    const [allCourseTags, setAllCourseTags] = useState([]);
    const fetchAllCourseTags = async () => {
        setAllCourseTags(courseTags);
    }

    // Function to calculate average rating of course
    const calculateRating = (course) => {
        if(course.courseRatings.length === 0) {
            return 0;
        }

        let totalRating = 0;
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating;
        });

        // return average rating
        return totalRating / course.courseRatings.length;
    };

    // Function to calculate course chapter time
    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.map((lecture) => time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, {units: ['h', 'm']});
    }

    // Function to calculate the course duration
    const calculateCourseDuration = (course) => {
        let time = 0;
        course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) => time += lecture.lectureDuration));
        return humanizeDuration(time * 60 * 1000, {units: ['h','m']});
    }

    // Function to calculate the number of lectures in the course
    const calculateNoOfLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.forEach((chapter) => {
            if(Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length;
            }
        });
        return totalLectures;
    }

    useEffect(() => {
        fetchAllCourses(); fetchAllCourseTags();
    }, []);
    

    const value = {
      currency,
      allCourses,
      allCourseTags,
      calculateRating,
      isEducator,
      setIsEducator,
      calculateChapterTime,
      calculateCourseDuration,
      calculateNoOfLectures,
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}