import React, { useState } from "react";
import Modal from "./Modal";

function AddBookForm({ onClose }) {
  const [selectedColor, setSelectedColor] = useState("");

  const colors = ["#B8E7FC", "#A6CEDF", "#8D4997", "#633D68", "#837C7B", "#E0E7FF"];

  return (
    <Modal onClose={onClose}>
      <h3 className="text-lg font-semibold text-[#633D68] mb-4">Add a Book</h3>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm text-[#837C7B]">
            Title
          </label>
          <input
            required
            type="text"
            name="title"
            id="title"
            className="border border-[#E0E0E0] rounded-lg px-3 py-2 focus:border-[#8D4997] focus:ring-1 focus:ring-[#8D4997]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="author" className="text-sm text-[#837C7B]">
            Author
          </label>
          <input
            required
            type="text"
            name="author"
            id="author"
            className="border border-[#E0E0E0] rounded-lg px-3 py-2 focus:border-[#8D4997] focus:ring-1 focus:ring-[#8D4997]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="genre" className="text-sm text-[#837C7B]">
            Genre
          </label>
          <input
            required
            type="text"
            name="genre"
            id="genre"
            className="border border-[#E0E0E0] rounded-lg px-3 py-2 focus:border-[#8D4997] focus:ring-1 focus:ring-[#8D4997]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="status" className="text-sm text-[#837C7B]">
            Reading Status
          </label>
          <select
            required
            name="status"
            id="status"
            className="border border-[#E0E0E0] rounded-lg px-3 py-2 focus:border-[#8D4997] focus:ring-1 focus:ring-[#8D4997]"
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
            className="accent-[#8D4997]"
          />
          <label htmlFor="isRead" className="text-sm text-[#837C7B]">
            Mark as read
          </label>
        </div>

        <div className="flex flex-col">
          <label className="block text-sm text-[#837C7B] mb-2">
            Cover Color
          </label>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-lg border-2 transition-all ${
                  selectedColor === color
                    ? "ring-2 ring-[#8D4997]"
                    : "border-[#E0E0E0]"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Choose color ${color}`}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-[#8D4997] text-white px-4 py-2 rounded-lg hover:bg-[#633D68] transition-colors"
        >
          Save
        </button>
      </form>
    </Modal>
  );
}

export default AddBookForm;