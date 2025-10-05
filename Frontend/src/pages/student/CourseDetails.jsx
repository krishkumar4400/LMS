import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext.jsx";
import Loading from "../../components/students/Loading.jsx";
import { assets } from "../../assets/assets.js";
import humanizeDuration from "humanize-duration";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const {
    allCourses,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState({});

  const fetchCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-10 text-left bg-gradient-to-t to-cyan-300/70">
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

          <div className="flex items-center gap-2 space-x-2 pb-1 text-sm my-2">
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
          <p className="text-sm text-gray-600 mb-3 cursor-pointer">
            Course by{" "}
            <span
              onClick={() => navigate("/educator/my-courses")}
              className="text-blue-600 underline"
            >
              Krish
            </span>
          </p>
          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>
            <div className="pt-6">
              {courseData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className="border border-gray-300 mb-2 bg-white rounded"
                >
                  <div className="flex items-center justify-between px-4 py-3 cursor-pointer select-none">
                    <div className="flex items-center gap-2">
                      <img src={assets.down_arrow_icon} alt="arrow icon" />
                      <p className="text-sm md:text-base font-medium text-black">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="text-slate-800 text-sm md:text-base">
                      {chapter.chapterContent.length} lectures-
                      {calculateChapterTime(chapter.chapterContent)}
                    </p>
                  </div>
                  <div className="overflow-hidden transition-all duration-300 max-h-96">
                    <ul className="list-disc pl-4 md:pl-10 pr-4 py-2 text-gray-600 border-t border-gray-300">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className="flex items-start gap-2 py-1 ">
                          <img
                            src={assets.play_icon}
                            alt="play icon"
                            className="w-4 h-4 mt-1"
                          />
                          <div className="flex items-center justify-between w-full  text-gray-800 text-xs sm:text-default">
                            <p>{lecture.lectureTitle}</p>
                          </div>
                          <div className="flex gap-2 w-full sm:w-1/2 items-end max-sm:flex-col max-sm:mb-3">
                            {lecture.isPreviewFree && (
                              <p className="text-blue-500 cursor-pointer">
                                Preview
                              </p>
                            )}
                            <p>
                              {humanizeDuration(
                                lecture.lectureDuration * 60 * 1000,
                                { units: ["h", "m"] }
                              )}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right column */}
        <div></div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
