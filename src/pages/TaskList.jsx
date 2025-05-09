// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import TaskHeader from '../components/TaskHeader';
import StatusFilter from '../components/StatusFilter';
import CategoryFilter from '../components/CategoryFilter';
import TaskCard from '../components/TaskCard';
import { useAppContext } from '../components/ContextProvider';


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
    const categories = ["All", ...new Set(taskData.map((task) => task.category))];
    const [categoryFilter, setCategoryFilter] = useState("All");

    const { isLightMode } = useAppContext();

    // State for date and time
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update time every minute
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Format date and time
    const formattedDate = currentTime.toLocaleDateString("en-NG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const formattedTime = currentTime.toLocaleTimeString("en-NG", {
        hour: "2-digit",
        minute: "2-digit",
    });

    // Weather information for Lagos
    const weatherInfo = {
        condition: "Mostly cloudy",
        temperature: "91°F (33°C)",
        forecast: "Sun and clouds",
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const filteredTasks = tasks.filter((task) => {
        const statusMatch = filter === "all" || task.status === filter;
        const categoryMatch = categoryFilter === "All" || task.category === categoryFilter;
        return statusMatch && categoryMatch;
    });

    return (
        <div className="min-h-screen py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                    <TaskHeader 
                        formattedDate={formattedDate}
                        formattedTime={formattedTime}
                        weatherInfo={weatherInfo}
                    />
                    <div className="mt-3">
                        <StatusFilter filter={filter} setFilter={setFilter} />
                        <CategoryFilter
                            categories={categories}
                            categoryFilter={categoryFilter}
                            setCategoryFilter={setCategoryFilter}
                        />
                    </div>
                </div>
                
                <div>
                    <p className={`primary-font text-xl text-center md:text-left mb-4 ${isLightMode ? "text-gray-600" : "text-white"}`}>Manage your tasks efficiently.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTasks.map((task) => (
                        <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskList;
