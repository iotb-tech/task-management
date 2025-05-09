import { useAppContext } from "./ContextProvider";

const TaskHeader = ({ formattedDate, formattedTime, weatherInfo }) => {
    const {isLightMode} = useAppContext();

    return (
        <div className="primary-text">
            <h1 className={`text-4xl font-bold primary-font mb-2 ${isLightMode ? "text-gray-800" : "text-white"}`}>
                Hi DevCode
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
