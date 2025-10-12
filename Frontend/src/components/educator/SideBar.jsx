import { useContext } from 'react'
import { assets } from '../../assets/assets.js';
import { AppContext } from '../../context/AppContext.jsx';
import { NavLink } from 'react-router-dom';

const SideBar = () => {

  const menuItems = [
    {name: 'Dashboard', path: '/educator', icon: assets.home_icon},
    {name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon},
    {name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon},
    {name: 'Students Enrolled', path: '/educator/student-enrolled', icon: assets.person_tick_icon}
  ];

  const {isEducator} = useContext(AppContext);

  return (
    isEducator && (
      <div className="md:w-65 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            end={item.path === "/educator"}
            className="flex items-center gap-2 px-4 py-4"
          >
            <img src={item.icon} className="w-7 h-7" alt="" />
            <p className="md:block hidden text-center"> {item.name} </p>
          </NavLink>
        ))}
      </div>
    )
  );
}

export default SideBar
