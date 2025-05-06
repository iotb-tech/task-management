
const CategoryFilter = ({ categories, categoryFilter, setCategoryFilter }) => (
    <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
        <button
            key={category}
            onClick={() => setCategoryFilter(category)}
            className={`px-4 py-2 rounded shadow-sm transition border cursor-pointer ${
            categoryFilter === category
                ? "ring-2 ring-[#287291] text-gray-700 font-semibold"
                : "primary-color hover:bg-[#19475b]"
            }`}
        >
            {category}
        </button>
        ))}
    </div>
);

export default CategoryFilter;
