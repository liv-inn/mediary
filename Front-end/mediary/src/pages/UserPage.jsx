import ButtonsModal from "../components/ButtonsModal";
import CardMedia from "../components/CardMedia";
import GetToKnowMe from "../components/GetToKnowMe";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";

function UserPage() {
  return (
    <main className="w-full h-screen bg-[#F8FBFF] flex flex-col">
      <Nav />

      <div className="flex ml-6 mt-6 flex-col w-full">
        <h2 className="text-xl text-[#1f2937] font-semibold">
          Media Dashboard
        </h2>
        <p className="text-sm text-[#837C7B] mb-6">
          Organize your personal bookshelf
        </p>
      </div>

      <div className="flex flex-1 ml-6 gap-6">
        <section className="flex flex-col w-[30%]">
          <div className="flex flex-col gap-4">
            <UserCard />
            <GetToKnowMe />
          </div>
        </section>

        <section className="w-[70%] mr-6">
          <ButtonsModal />
          <SearchBar />

          <div className="grid grid-cols-3 gap-4 mt-4">
            <CardMedia
              nome="Attack on Titan"
              genero="Action / Fantasy"
              autor="Hajime Isayama"
              status="Reading"
              capa={<div className="w-6 h-6 rounded-full bg-[#8D4997]" />}
              icon={
                <span role="img" aria-label="movie">
                  🎬
                </span>
              }
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default UserPage;