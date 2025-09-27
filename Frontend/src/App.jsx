import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/student/Home.jsx';
import CourseList from './pages/student/CourseList.jsx';
import CourseDetails from './pages/student/CourseDetails.jsx';
import MyEnrollments from './pages/student/MyEnrollments.jsx';
import Player from './pages/student/Player.jsx';
import Loading from './components/students/Loading.jsx';
import Educator from './pages/educator/Educator.jsx';
import DashBoard from './pages/educator/DashBoard.jsx';
import AddCourse from './pages/educator/AddCourse.jsx';
import MyCourses from './pages/educator/MyCourses.jsx';
import StudentEnrolled from './pages/educator/StudentEnrolled.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        {/* Routing for Students */}
        <Route path='/' element={ <Home/> }/>
        <Route path='/course-list' element={<CourseList/>}/>
        <Route path='/course-list/:input' element={<CourseList/>} />
        <Route path='/course/:id' element={<CourseDetails/>} />
        <Route path='/my-enrollments' element={<MyEnrollments/>} />
        <Route path='/player/:courseId' element={<Player/>} />
        <Route path='/Loading/:path' element={<Loading/>} />

        {/* Routing for Educator */}
        <Route path='/educator' element={<Educator/>}>
        <Route path='educator' element={<DashBoard/>} />
        <Route path='add-course' element={<AddCourse/>} />
        <Route path='my-courses' element={<MyCourses/>} />
        <Route path='student-enrolled' element={<StudentEnrolled/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App