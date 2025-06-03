import AddBookForm from "../components/AddBookForm";
import Nav from "../components/Nav";

function UserPage() {
  return (
    <main className="w-full h-screen bg-[#F3EDF9] flex flex-col">
      <Nav />

      <div className="flex flex-1 m-10 gap-6">

        <section className="w-[70%] flex flex-col">
          <h2 className="text-xl text-[#6B4E71] font-semibold">
            Media Dashboard
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Organize your personal bookshelf
          </p>

          <div className="mt-6">
            <p className="text-gray-400 italic">
           books here ✨
          </p>
          </div>
        </section>

        <section className="w-[30%] ">
          
          <AddBookForm />
        </section>
      </div>
    </main>
  );
}

export default UserPage;
