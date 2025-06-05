function CardHome({ icone, nome }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white w-24 h-24 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex justify-center items-center text-[#8D4997]">
        <span className="text-3xl">{icone}</span>
      </div>
      <span className="mt-2 text-[#633D68] font-medium">{nome}</span>
    </div>
  );
}

export default CardHome;