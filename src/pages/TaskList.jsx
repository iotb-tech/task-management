import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const TaskList = () => {
    const taskData = [
        {
            id: 1,
            title: "Finish UI Design",
            category: "Work",
            info: "Complete the remaining Figma mockups",
            status: "pending",
        },
        {
            id: 2,
            title: "Buy Groceries",
            category: "Personal",
            info: "Milk, Bread, Eggs, and Fruits",
            status: "completed",
        },
        {
            id: 3,
            title: "Submit Assignment",
            category: "School",
            info: "Numerical Methods - Week 3",
            status: "pending",
        },
        {
            id: 4,
            title: "Shopping",
            category: "Personal",
            info: "Go to market by 1pm for shopping",
            status: "completed",
        },
        {
            id: 5,
            title: "Sleeping",
            category: "Personal",
            info: "Go to bed by 10pm",
            status: "pending",
        },
    ];

    const [tasks, setTasks] = useState(taskData);
    const [filter, setFilter] = useState("all");

    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const filteredTasks =
        filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold primary-font text-gray-800 mb-4 sm:mb-0">
                        Hi DevCode
                    </h1>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setFilter("all")}
                            className="px-4 py-2 bg-white border hover:bg-gray-100 text-gray-700 rounded shadow-sm transition"
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter("pending")}
                            className="px-4 py-2 bg-yellow-200 hover:bg-yellow-300 text-yellow-900 rounded shadow-sm transition"
                        >
                            Pending
                        </button>
                        <button
                            onClick={() => setFilter("completed")}
                            className="px-4 py-2 bg-green-200 hover:bg-green-300 text-green-900 rounded shadow-sm transition"
                        >
                            Completed
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTasks.map((task) => (
                        <div
                            key={task.id}
                            className="relative primary-color primary-font p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
                        >
                            <button
                                onClick={() => handleDelete(task.id)}
                                className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition"
                            >
                                <FaTrash />
                            </button>
                            <h2 className="text-xl font-semibold mb-1">
                                {task.title}
                            </h2>
                            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded mb-2">
                                {task.category}
                            </span>
                            <p className=" text-sm mb-4">{task.info}</p>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskList;
