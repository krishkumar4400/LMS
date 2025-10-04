import { useContext, useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { AppContext } from '../../context/AppContext.jsx';
import Loading from '../../components/students/Loading.jsx';
import { assets } from '../../assets/assets.js';

const CourseDetails = () => {
  const {id} = useParams();
  const [courseData, setCourseData] = useState(null);
  const { allCourses, calculateRating } = useContext(AppContext);
  const navigate = useNavigate();

  const fetchCourseData = async () => {
    const findCourse = allCourses.find(course => course._id === id);
    setCourseData(findCourse);
}

useEffect(() => {
  fetchCourseData();
}, []);

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-96 -z-1 bg-gradient-to-b from-cyan-100/70"></div>
        {/* left column */}
        <div className="max-w-xl z-10 text-gray-500">
          <h2 className="md:text-4xl text-2xl font-semibold text-gray-800">
            {courseData.courseTitle}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
            className="pt-4 md:text-base text-sm"
          ></p>
          {/* review and rating */}

          <div className="flex items-center gap-2 space-x-2 my-2">
            <p>{calculateRating(courseData)}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <img
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  className="w-3.5 h-3.5 "
                  alt="Star"
                  key={i}
                />
              ))}
            </div>
            <p className="text-blue-600">
              ({courseData.courseRatings.length}
              {courseData.courseRatings.length > 1 ? " ratings" : " rating"})
            </p>
            <p>
              {courseData.enrolledStudents.length}
              {courseData.enrolledStudents.length > 1 ? " Students" : "Student"}
            </p>
          </div>
          <p className="text-sm text-gray-600 my-4 cursor-pointer">
            Course by{" "}
            <span
              onClick={() => navigate("/educator/my-courses")}
              className="text-blue-600 underline"
            >
              Krish
            </span>
          </p>
        </div>

        {/* right column */}
        <div></div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default CourseDetails
