function GetToKnowMe() {
  return (
    <div className="w-full max-w-md mx-auto p-8 bg-[#8b7bb8] rounded-xl shadow-sm flex flex-col gap-4">
      <h3 className="text-2xl  text-white  ">
        Get to know me! ✨
      </h3>

      <div className="flex items-start p-2 gap-2 items-center bg-[#ffffff32] rounded-lg h-14">
        <span className="text-2xl">📚</span>
        <div>
          <p className="font-bold text-white">The Name of the Wind</p>
          <p className="text-sm text-white">Favorite book</p>
        </div>
      </div>

      <div className="flex items-start p-2 gap-2 items-center bg-[#ffffff32] rounded-lg h-14">
        <span className="text-2xl">🎬</span>
        <div>
          <p className="font-bold text-white">Your Name</p>
          <p className="text-sm text-white">Favorite movie</p>
        </div>
      </div>

      <div className="flex items-start p-2 gap-2 items-center bg-[#ffffff32] rounded-lg h-14">
        <span className="text-2xl text-center">🎵</span>
        <div>
          <p className="font-bold text-white">EXO - Love Shot</p>
          <p className="text-sm text-white">Favorite song</p>
        </div>
      </div>
    </div>
  );
}

export default GetToKnowMe;
