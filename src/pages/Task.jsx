import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUser, FaBriefcase, FaBook, FaEllipsisH } from 'react-icons/fa';

const Task = () => {
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [tasks, setTasks] = useState([]);
        const [category, setCategory] = useState('');
        const [showDropdown, setShowDropdown] = useState(false);

    const handleAddTask = (e) => {
      e.preventDefault();
        if (title && description) {
            setTasks([...tasks, { title, description, done: false, cancelled: false,category },]);
            setTitle('');
            setDescription('');
            setCategory('');
          }
      };
      const categoryOptions = [
        { label: 'Personal', icon: <FaUser />, color: 'text-pink-600' },
        { label: 'Work', icon: <FaBriefcase />, color: 'text-blue-600' },
        { label: 'Study', icon: <FaBook />, color: 'text-green-600' },
        { label: 'Others', icon: <FaEllipsisH />, color: 'text-gray-600' },
      ];
      const categoryStyles = {
        Personal: 'text-pink-600',
        Work: 'text-blue-600',
        Study: 'text-green-600',
        Others: 'text-gray-600',
      };

    return (
        <div className="flex flex-col px-4 md:px-12 py-4">
           
        <div className="justify-center items-center flex m-12">
            <h1 className="text-2xl md:text-4xl font-bold">Create New Task</h1>
        </div>

        <div className="flex flex-row justify-between h-20 md:h-12 pt-2 px-6 primary-color gap-6 md:gap-0">
            <h2 className="text-lg font-semibold ">Welcome Ahishat,</h2>
            <div className="relative flex flex-col md:flex-row md:gap-2 gap-0 items-center">
            <h2 className="text-md font-medium ">Categories:</h2>
            <BiCategoryAlt  
            className="flex mt-2" 
            onClick={() => setShowDropdown(!showDropdown)}/>
            {category && (
          <span className={`ml-2 text-sm italic ${categoryStyles[category]}`}>
            {category}
          </span>
        )}
  {showDropdown && (
    <div className="absolute top-8 right-0 md:right-4 z-10 border secondary-color rounded shadow-md w-32">
      {categoryOptions.map(({ label, color }) => (
        <div
          key={label}
          className={`flex items-center gap-2 px-3 py-1 hover:bg-emerald-50 cursor-pointer text-sm ${color}`}
          onClick={() => {
            setCategory(label);
            setShowDropdown(false);
          }}
        >
           {label}
        </div>
      ))}
    </div>
  )}

            </div>
            </div>

        <div className="flex flex-col w-full max-w-6xl md:flex-row gap-6 md:gap-12 items-center md:justify-center md:mt-10 mt-4">
        <div className="flex flex-col md:flex-row items-start   gap-1 md:gap-2 w-full md:w-auto">
            <h2 className="text-md font-medium">Task Title:</h2>
            <input type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Enter Task Title" 
            className="border-black shadow-green-800 shadow bg-gray-100 rounded w-full md:w-48 h-8 pl-2"/>
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-start  w-full md:w-auto">
            <h2 className="text-md font-medium">Task Description:</h2>
            <input type="text" value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Task Title" 
            className="border-black shadow-green-800 shadow bg-gray-100 rounded w-full md:w-96 h-8 pl-2"/>
        </div>
       
        <div onClick={handleAddTask} className="primary-color flex justify-center items-center w-full md:w-16 h-10 rounded mt-2 md:mt-0">
            <button className="text-sm ">Add</button>
        </div>
    
        </div>

        <div className="mt-10 px-4 w-full max-w-6xl">
  <h2 className="text-xl font-semibold mb-4">Added Tasks:</h2>
  <div className="flex flex-col gap-4">
  {tasks.map((task, index) => (
  <div
    key={index}
    className={`p-4 rounded shadow flex justify-between items-center ${
      task.cancelled
        ? 'bg-red-300'
        : task.done
        ? 'bg-green-300'
        : 'bg-gray-100'
    }`}
  >
    <div>
      <h3 className="text-md font-bold">{task.title}</h3>
      <p className="text-sm">{task.description}</p>
      {task.category && (
  <p className={`text-xs italic ${categoryStyles[task.category]}`}>
    Category: {task.category}
  </p>
)}
    </div>

    <div className="flex items-center gap-4">
      <AiOutlineCheck
        className="text-green-600 text-xl cursor-pointer"
        onClick={() => {
          const updatedTasks = [...tasks];
          updatedTasks[index].done = true;
          updatedTasks[index].cancelled = false;
          setTasks(updatedTasks);
        }}
      />
      <AiOutlineClose
        className="text-red-600 text-xl cursor-pointer"
        onClick={() => {
          const updatedTasks = [...tasks];
          updatedTasks[index].cancelled = true;
          updatedTasks[index].done = false;
          setTasks(updatedTasks);
        }}
      />
    </div>
  </div>
))}
  </div>
  {tasks.length > 0 && (
  <div className="mt-6 flex justify-end">
    <button
      onClick={() => setTasks([])}
      className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-700 transition"
    >
      Clear All
    </button>
  </div>
)}
</div>
        </div>
    )
}

export default Task;