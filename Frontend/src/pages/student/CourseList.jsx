import Footer from '../../components/students/Footer.jsx';
import {useNavigate, useParams} from 'react-router-dom';
import Search from '../../components/students/SearchBar.jsx'
import { assets, dummyCourses } from '../../assets/assets.js';

const CourseList = () => {
  const navigate = useNavigate();
  const input = useParams();
  return (
    <div className="">
      <div className="flex max-sm:gap-4 max-sm:flex-col max-sm:items-start px-8 md:px-32 items-center justify-between w-full pt-20 pb-10">
        <div className="flex flex-col">
          <span className="sm:text-3xl text-2xl font-semibold text-slate-900 pb-2">
            Course List
          </span>
          <p className="flex items-center gap-1 cursor-pointer">
            <span onClick={() => navigate("/")} className="text-blue-700">
              Home
            </span>
            /<span className="text-gray-600">Course List</span>
          </p>
        </div>
<div className='max-sm:flex max-sm:justify-center max-sm:items-center max-sm:w-full max-sm:my-4'><Search /></div>
        
      </div>

      <div className="flex px-5 sm:px-10 lg:px-22">
        {
          dummyCourses.map((course, index) => (
            <div key={index}>
              <img src={course.courseThumbnail} alt="" />
            </div>
          ))
        }
        </div>

      <Footer data={input} />
    </div>
  );
}

export default CourseList