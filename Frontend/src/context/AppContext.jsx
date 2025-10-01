import React, { createContext, useEffect, useState } from 'react'
import { courseTags, dummyCourses } from '../assets/assets.js';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY;

    const [allCourses, setAllCourses] = useState([]);
    // Fetch All Courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);
    }

    const [allCourseTags, setAllCourseTags] = useState([]);
    const fetchAllCourseTags = async () => {
        setAllCourseTags(courseTags);
    }

    useEffect(() => {
        fetchAllCourses(); fetchAllCourseTags();
    }, []);
    

    const value = {
      currency,
      allCourses,
      allCourseTags,
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}