function CardMedia({ nome, genero, autor, status, icon }) {
  return (
    <div className="bg-white w-full rounded-xl h-32 p-4 flex gap-4 shadow-sm">
      <div className="flex items-center justify-center bg-[#B8E7FC] rounded-lg w-16 h-20">
        <p className="text-3xl">{icon}</p>
      </div>
      <div className="flex flex-col justify-center gap-1">
        <p className="font-semibold text-[#1f2937]">{nome}</p>
        <p className="text-sm text-[#837C7B]">{genero}</p>
        <p className="text-sm text-[#837C7B]">{autor}</p>
        <p className="text-xs text-white bg-[#8b7bb8] px-2 py-1 rounded-full w-fit">
          {status}
        </p>
      </div>
    </div>
  );
}

export default CardMedia;