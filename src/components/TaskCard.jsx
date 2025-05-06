import { FaTrash } from 'react-icons/fa';

const TaskCard = ({ task, handleDelete }) => (
    <div className="relative w-full sm:w-[300px] primary-color primary-font p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200">
        <button
            onClick={() => handleDelete(task.id)}
            className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition"
        >
            <FaTrash />
        </button>
        <h2 className="text-xl font-semibold mb-1">{task.title}</h2>
        <span className="inline-block text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded mb-2">
            {task.category}
        </span>
            <p className="text-sm mb-4">{task.info}</p>
            <span
            className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${
                task.status === "completed"
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
        >
            {task.status}
        </span>
    </div>
);

export default TaskCard;
