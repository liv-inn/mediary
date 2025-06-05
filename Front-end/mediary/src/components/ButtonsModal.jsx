import React, { useState } from "react";
import AddBookForm from "./AddBookForm";
import AddMovieForm from "./AddMovieForm";
import AddMusicForm from "./AddMusicForm";

function ButtonsModal() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="p-6 bg-white border border-gray-200 rounded flex justify-between">
      <h2 className="text-xl mb-4 text-[#6B4E71] font-bold">Add a New Media</h2>

      <div className="flex gap-4">
        <button
          onClick={() => setActiveModal("book")}
          className="bg-[#6B4E71] text-white px-4 py-2 rounded hover:bg-[#5b3b62]"
        >
          Add Book
        </button>
        <button
          onClick={() => setActiveModal("movie")}
          className="bg-[#6B4E71] text-white px-4 py-2 rounded hover:bg-[#5b3b62]"
        >
          Add Movie
        </button>
        <button
          onClick={() => setActiveModal("music")}
          className="bg-[#6B4E71] text-white px-4 py-2 rounded hover:bg-[#5b3b62]"
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
