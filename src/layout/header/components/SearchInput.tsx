import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = () => {
  return (
    <div className="bg-white flex items-center rounded-full w-full px-4 py-1 max-w-3xl">
      <input
        type="search"
        placeholder="Buscar marcas o productos..."
        className="flex-1 outline-none text-black"
      />
      <button className="text-gray-500">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchInput;
