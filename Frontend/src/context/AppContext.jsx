import React, { createContext, useEffect, useState } from 'react'
import { courseTags, dummyCourses } from '../assets/assets.js';

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

    useEffect(() => {
        fetchAllCourses(); fetchAllCourseTags();
    }, []);
    

    const value = {
      currency,
      allCourses,
      allCourseTags,
      calculateRating,
      isEducator,
      setIsEducator
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}