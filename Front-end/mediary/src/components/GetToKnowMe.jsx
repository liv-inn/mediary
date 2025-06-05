function GetToKnowMe() {
  return (
    <div className="w-full max-w-md mx-auto p-8 bg-[#b798bb] rounded-2xl border border-gray-200 shadow-md flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-white  text-center">
        Get to know me! ✨
      </h3>

      <div className="flex items-start p-2 gap-2 items-center bg-[#ffffff56] rounded-lg h-14">
        <span className="text-2xl">📚</span>
        <div>
          <p className="font-medium text-white">The Name of the Wind</p>
          <p className="text-sm text-white">Favorite book</p>
        </div>
      </div>

      <div className="flex items-start p-2 gap-2 items-center bg-[#ffffff56] rounded-lg h-14">
        <span className="text-2xl">🎬</span>
        <div>
          <p className="font-medium text-white">Your Name</p>
          <p className="text-sm text-white">Favorite movie</p>
        </div>
      </div>

      <div className="flex items-start p-2 gap-2 items-center bg-[#ffffff56] rounded-lg h-14">
        <span className="text-2xl text-center">🎵</span>
        <div>
          <p className="font-medium text-white">EXO - Love Shot</p>
          <p className="text-sm text-white">Favorite song</p>
        </div>
      </div>
    </div>
  );
}

export default GetToKnowMe;
