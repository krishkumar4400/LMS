import React, { useEffect, useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets.js';

const StudentEnrolled = () => {
  const [studentsEnrolled, setStudentsEnrolled] = useState(null);
  const fetchStudentsEnrolled = async() => {
    setStudentsEnrolled(dummyStudentEnrolled);
  }

  useEffect(() => {
    fetchStudentsEnrolled();
  }, [studentsEnrolled]);

  return (
    <div>
      <div>
        <h1></h1>
      </div>
    </div>
  )
}

export default StudentEnrolled
