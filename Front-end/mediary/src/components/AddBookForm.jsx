import React, { useState } from "react";

function AddBookForm() {
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
    <div className=" w-1/2 bg-white rounded-xl shadow-xs border border-gray-200 p-6 h-auto">
      <h3 className="text-lg font-semibold text-[#6B4E71] mb-4">Add a Book</h3>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm text-gray-600">
            Title
          </label>
          <input
            required
            type="text"
            name="title"
            id="title"
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="author" className="text-sm text-gray-600">
            Author
          </label>
          <input
            required
            type="text"
            name="author"
            id="author"
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="genre" className="text-sm text-gray-600">
            Genre
          </label>
          <input
            required
            type="text"
            name="genre"
            id="genre"
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="status" className="text-sm text-gray-600">
            Reading Status
          </label>
          <select
            required
            name="status"
            id="status"
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select status</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
            <option value="wantToRead">Want to Read</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isRead"
            id="isRead"
            className="accent-[#6B4E71]"
          />
          <label htmlFor="isRead" className="text-sm text-gray-600">
            Mark as read
          </label>
        </div>

        <div className="flex  flex-col">
          <label className="block text-sm text-gray-600 mb-2">
            Cover Color
          </label>

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
    </div>
  );
}

export default AddBookForm;
