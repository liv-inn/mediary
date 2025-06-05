function CardHome({ icone, nome }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white w-24 h-24 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex justify-center items-center text-[#8b7bb8]">
        <span className="text-3xl">{icone}</span>
      </div>
      <span className="mt-2 text-[#1f2937] font-medium">{nome}</span>
    </div>
  );
}

export default CardHome;