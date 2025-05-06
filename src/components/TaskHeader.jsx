
const TaskHeader = ({ formattedDate, formattedTime, weatherInfo }) => (
    <div className="primary-text">
        <h1 className="text-4xl font-bold primary-font text-gray-800 mb-2">
            Hi DevCode
        </h1>
        <p className="text-gray-600">
            {formattedDate} | {formattedTime}
        </p>
        <p className="text-gray-600">
            Weather in Lagos: {weatherInfo.condition}, {weatherInfo.temperature} - {weatherInfo.forecast}
        </p>
    </div>
);

export default TaskHeader;
