import { useAppContext } from "./ContextProvider";

const TaskHeader = ({ formattedDate, formattedTime, weatherInfo }) => {
    const {isLightMode} = useAppContext();

    return (
        <div className="primary-text">
            <h1 className={`text-3xl font-bold secondary-font mb-2 ${isLightMode ? "text-gray-800" : "text-white"}`}>
                Hi, user
            </h1>
            <p className={`${isLightMode ? "text-gray-600" : "text-white"}`}>
                {formattedDate} | {formattedTime}
            </p>
            <p className={`${isLightMode ? "text-gray-600" : "text-white"}`}>
                Weather in Lagos: {weatherInfo.condition}, {weatherInfo.temperature} - {weatherInfo.forecast}
            </p>
        </div>
    );
};

export default TaskHeader;
