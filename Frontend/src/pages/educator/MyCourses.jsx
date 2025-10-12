import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext.jsx'
import Loading from '../../components/students/Loading.jsx';

const MyCourses = () => {
  const {currency,allCourses} = useContext(AppContext);
  const [courses, setCources] = useState(null);

  const fetcEducatorCourses = async () => {
    setCources(allCourses);
  }

  useEffect(() => {
    fetcEducatorCourses();
  }, []);

  return courses ? (
    <div className='h-screen flex flex-col items-start justify-between sm:p-8 sm:pb-0 p-4 pt-8 pb-0'>
      <div className='w-full'>
        <h2 className='p-4 text-lg font-medium'>My Courses</h2>
      <div>
        <table>
          <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
            <tr>
              <th className=''></th>
              <th className=''></th>
              <th className=''></th>
              <th className=''></th>
            </tr>
          </thead>
        </table>
      </div>
      </div>
    </div>
  ) : <Loading/>
}

export default MyCourses
