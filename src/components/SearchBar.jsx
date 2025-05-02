import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export function SearchBar(){

    const [query, setQuery] = useState('');

    const handleSearch = () => {
        alert(`Pesquisando por: ${query}`);
        //temporario
    };


    return(
        <div className="input-group">
            <input type="text"
            placeholder="Search for titles" //search by title? 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>
                <FaSearch className='input-icon' />
            </button>
        </div>
    )
}