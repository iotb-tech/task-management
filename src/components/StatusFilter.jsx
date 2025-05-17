
const StatusFilter = ({ filter, setFilter }) => {
    return (
        <div className="flex flex-wrap gap-2 mb-5">
            {['all', 'pending', 'completed'].map((status) => (
            <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded shadow-sm transition flex-nowrap overflow-auto ${
                filter === status
                    ? status === 'pending'
                    ? 'bg-yellow-500 text-yellow-900 font-semibold ring-2 ring-yellow-900'
                    : status === 'completed'
                    ? 'bg-green-500 text-green-900 font-semibold ring-2 ring-green-900'
                    : 'ring-2 ring-gray-900 text-gray-900 font-semibold'
                    : status === 'pending'
                    ? 'bg-yellow-100 text-yellow-900 hover:bg-yellow-300'
                    : status === 'completed'
                    ? 'bg-green-100 text-green-900 hover:bg-green-300'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
            ))}
        </div>
    );
}

export default StatusFilter;
