import React, { useState } from "react";
import AddBookForm from "./AddBookForm";
import AddMovieForm from "./AddMovieForm";
import AddMusicForm from "./AddMusicForm";

function ButtonsModal() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="p-6 bg-white rounded-2xl border border-[#E0E0E0] shadow-xs flex flex-col gap-4">
      <h2 className="text-xl font-bold text-[#633D68]">Add a New Media</h2>

      <div className="flex gap-4">
        <button
          onClick={() => setActiveModal("book")}
          className="bg-[#b798bb] text-white px-4 py-2 rounded-lg hover:bg-[#633D68] transition-colors"
        >
          Add Book
        </button>
        <button
          onClick={() => setActiveModal("movie")}
          className="bg-[#b798bb] text-white px-4 py-2 rounded-lg hover:bg-[#633D68] transition-colors"
        >
          Add Movie
        </button>
        <button
          onClick={() => setActiveModal("music")}
          className="bg-[#b798bb] text-white px-4 py-2 rounded-lg hover:bg-[#633D68] transition-colors"
        >
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