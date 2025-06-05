import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative w-full mt-4">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-[#837C7B]" />
      </div>
      <input
        type="text"
        placeholder="Search by name..."
        className="bg-white pl-10 pr-4 py-1.5 w-full h-12 text-sm border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#8D4997] focus:ring-1 focus:ring-[#8D4997]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;