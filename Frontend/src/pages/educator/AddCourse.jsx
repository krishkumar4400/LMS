import { useEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import Quill from "quill";
import { assets } from "../../assets/assets";

const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);

  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false,
  });

  useEffect(() => {
    // Initiate Quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <div className="h-screen overflow-scroll flex flex-col items-start justify-between sm:p-6 sm:pb-0 pt-8 pb-0">
      <form className="flex flex-col gap-5 max-w-md w-full text-slate-700 font-medium">
        <div className="flex flex-col gap-1">
          <p>Course Title</p>
          <input
            type="text"
            placeholder="Type here"
            className="outline-none sm:py-2.5 py-2 px-3 rounded border border-gray-500"
            onChange={(e) => setCourseTitle(e.target.value)}
            value={courseTitle}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <p>Course Description</p>
          <div ref={editorRef}></div>
        </div>

        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col gap-1">
            <p>Course Price</p>
            <input
              type="number"
              placeholder="0"
              min={0}
              onChange={(e) => setCoursePrice(e.target.value)}
              value={coursePrice}
              className="outline-none sm:py-2.5 py-2 w-28 px-4 rounded border border-gray-500"
              required
            />
          </div>

          <div className="flex items-center gap-3 flex-col sm:flex-row">
            <p>Course Thumbnail</p>
            <label htmlFor="thumbnailImage" className="flex items-center gap-4">
              <img
                src={assets.file_upload_icon}
                alt="file_upload_icon"
                className="p-3 bg-blue-500 rounded cursor-pointer"
              />
              <input
                type="file"
                id="thumbnailImage"
                accept="image/*"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
              <img
                src={image ? URL.createObjectURL(image) : ""}
                className="max-h-10"
                alt=""
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p>Discount %</p>
          <input
            type="number"
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            placeholder="0"
            min={0}
            max={100}
            className="outline-none sm:py-2.5 py-2 px-4 w-28 rounded border border-slate-600"
            required
          />
        </div>

        {/* Adding chapter and lectures */}
        <div>
          {chapters.map((chapter, chapterIndex) => (
            <div
              key={chapterIndex}
              className="bg-white border rounded-lg mb-4 "
            >
              <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center ">
                  <img
                    src={assets.dropdown_icon}
                    width={15}
                    className={`mr-2 cursor-pointer transition-all ${
                      chapter.collapsed && "-rotate-90"
                    }`}
                    alt=""
                  />
                  <span className="font-semibold">
                    {chapterIndex + 1} {chapter.chapterTitle}
                  </span>
                </div>
                <span className="text-slate-600 font-medium">
                  {chapter.chapterContent.length} Lectures
                </span>
                <img
                  src={assets.cross_icon}
                  className="cursor-pointer"
                  alt=""
                />
              </div>
              {!chapter.collapsed && (
                <div className="p-4">
                  {chapter.chapterContent.map((lecture, lectureIndex) => (
                    <div
                      key={lectureIndex}
                      className="flex justify-between items-center mb-2"
                    >
                      <span>
                        {lectureIndex+1}
                        {lecture.lectureTitle} - {lecture.lectureDuration} mins - <a href={lecture.lectureUrl} target="_blank" className="text-blue-500 ">Link</a> - {
                          lecture.isPreviewFree ? 'Free Preview': 'Paid'
                        }
                      </span>
                      <img src={assets.cross_icon} alt="" className="cursor-pointer" />
                    </div>
                  ))}

                  <div className="inline-flex bg-gray-200 p-3 rounded cursor-pointer mt-4">
                    + Add Lecture
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-center items-center bg-blue-100 p-2 rounded-lg cursor-pointer">
            + Add Chapter
          </div>

          {
            showPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white text-gray-700 p-4 rounded relative w-full max-w-80">
                  <h2>Add Lecture</h2>
                  <div className="mb-2">
                    <p>Lecture Title</p>
                    <input type="text"
                    className="mt-2 block w-full border rounded py-1 px-2 " 
                    value={lectureDetails.lectureTitle}
                    onChange={(e)=>setLectureDetails({...lectureDetails, lectureTitle: e.target.value}) }
                    />
                  </div>
                </div>
                <div className="bg-white text-gray-700 p-4 rounded relative w-full max-w-80">
                  <h2>Add Lecture</h2>
                  <div className="mb-2">
                    <p>Lecture Title</p>
                    <input type="text"
                    className="mt-2 block w-full border rounded py-1 px-2 " 
                    value={lectureDetails.lectureTitle}
                    onChange={(e)=>setLectureDetails({...lectureDetails, lectureTitle: e.target.value}) }
                    />
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
