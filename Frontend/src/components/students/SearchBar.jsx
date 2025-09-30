import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets.js';
import { useState } from 'react';

const Search = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");

  const onSearchHandler = async (e) => {
    e.preventDefault();
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div className='flex items-center justify-center'>
      <div className="w-full max-w-xl flex justify-between items-center bg-white border-2 border-gray-300 rounded py-2">
        <form className="flex items-center px-4 gap-3 font-medium">
          <img src={assets.search_icon} className="w-8 md:w-auto " alt="" />
          <input
            type="text"
            placeholder="Search for courses"
            className="outline-0 text-gray-600 w-full h-full"
          />
        </form>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-7 md:px-10 py-2 md:py-3 mx-2 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search
