import React, { useState } from "react";
import AddBookForm from "./AddBookForm";
import AddMovieForm from "./AddMovieForm";
import AddMusicForm from "./AddMusicForm";
import { FaBook, FaFilm, FaMusic } from "react-icons/fa6";

function ButtonsModal() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm flex  gap-4 justify-between">
      <h2 className="text-xl font-bold text-[#1f2937]  flex items-center">Add a New Media</h2>

      <div className="flex gap-4">
        <button
          onClick={() => setActiveModal("book")}
          className="bg-[#8b7bb8] flex gap-2 items-center text-white px-4 h-12 rounded-lg hover:bg-[#633D68] transition-colors"
        >
          <FaBook/>
          Add Book
        </button>
        <button
          onClick={() => setActiveModal("movie")}
          className="bg-[#8b7bb8] flex gap-2 items-center text-white px-4 h-12 rounded-lg hover:bg-[#633D68] transition-colors"
        >
          <FaFilm/>
          Add Movie
        </button>
        <button
          onClick={() => setActiveModal("music")}
          className="bg-[#8b7bb8] flex gap-2 items-center text-white px-4 h-12 rounded-lg hover:bg-[#633D68] transition-colors"
        >
          <FaMusic/>
          Add Music
        </button>
      </div>

      {activeModal === "book" && <AddBookForm onClose={closeModal} />}
      {activeModal === "movie" && <AddMovieForm onClose={closeModal} />}
      {activeModal === "music" && <AddMusicForm onClose={closeModal} />}
    </div>
  );
}

export default ButtonsModal;