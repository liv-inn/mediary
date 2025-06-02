import { FaBook } from "react-icons/fa";
import AnimationHome from "../components/AnimationHome";
import CardHome from "../components/CardHome";
import Nav from "../components/Nav";
import { FaBookmark, FaStar } from "react-icons/fa6";

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Nav />

      <main className="flex flex-1 bg-[#F3EDF9]">
        <section className="flex-1 flex flex-col items-center justify-center px-10 py-14 text-[#6B4E71]">
          <h2 className="text-4xl font-bold mb-4">Welcome to Mediary!</h2>
          <p className="text-lg text-[#837D88] max-w-md text-center mb-4 italic">
            “A room without books is like a body without a soul.” — Marcus
            Tullius Cicero
          </p>
          <p className="text-md text-[#837D88] max-w-sm text-center mb-8">
            Keep track of your personal library, organize your reads, and never
            lose sight of your favorite titles.
          </p>

          <div className="flex gap-8 mb-6">
            <CardHome nome="My Library" icone={<FaBook />} />
            <CardHome nome="Read" icone={<FaBookmark />} />
            <CardHome nome="Favorites" icone={<FaStar />} />
          </div>

          <button className="bg-[#A18CD1] text-white px-6 py-2 rounded-full hover:bg-[#8B6FC5] transition-colors">
            Explore your collection
          </button>
        </section>

        <section className="flex-1 flex items-center justify-center bg-[#F3EDF9]">
          <AnimationHome />
        </section>
      </main>
    </div>
  );
}

export default Home;
