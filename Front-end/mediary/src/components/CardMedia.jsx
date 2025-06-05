function CardMedia({ nome, genero, autor, status, icon }) {
  return (
    <div className="bg-white w-full rounded h-32 border border-gray-200 p-4 flex gap-4">
      <div className="flex items-center gap-2 mb-2 bg-[#6B4E71] rounded w-16 h-20 flex justify-center">
        <p className="text-4xl">{icon}</p>
      </div>
      <div className="gap-2">
        <p className="font-semibold text-[#6B4E71]">{nome}</p>
        <p className="text-sm text-gray-600">{genero}</p>
        <p className="text-sm text-gray-600">{autor}</p>
        <p className="text-sm text-gray-600">{status}</p>
      </div>
    </div>
  );
}

export default CardMedia;
