import React, { useState } from "react";
import Modal from "./Modal";

function AddMusicForm({ onClose }) {
  const [selectedColor, setSelectedColor] = useState("");

  const colors = [
    "#D8B4FE",
    "#C084FC",
    "#F9A8D4",
    "#F472B6",
    "#A5B4FC",
    "#93C5FD",
    "#E0E7FF",
    "#FDE68A",
  ];

  return (
    <Modal onClose={onClose}>
      <h3 className="text-lg font-semibold text-[#6B4E71] mb-4">Add Music</h3>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="artist" className="text-sm text-gray-600">
            Artist
          </label>
          <input
            type="text"
            id="artist"
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="genre" className="text-sm text-gray-600">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="status" className="text-sm text-gray-600">
            Listening Status
          </label>
          <select
            id="status"
            required
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select status</option>
            <option value="listening">Listening</option>
            <option value="listened">Listened</option>
            <option value="wantToListen">Want to Listen</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="isListened" className="accent-[#6B4E71]" />
          <label htmlFor="isListened" className="text-sm text-gray-600">
            Mark as listened
          </label>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-2">Cover Color</label>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-lg border-2 ${
                  selectedColor === color
                    ? "ring-2 ring-[#6B4E71]"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Choose color ${color}`}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-[#6B4E71] text-white px-4 py-2 rounded hover:bg-[#5b3b62]"
        >
          Save
        </button>
      </form>
    </Modal>
  );
}

export default AddMusicForm;
