import AddBookForm from "../components/AddBookForm";
import GetToKnowMe from "../components/GetToKnowMe";
import Nav from "../components/Nav";
import UserCard from "../components/UserCard";

function UserPage() {
  return (
    <main className="w-full h-screen bg-[#F3EDF9] flex flex-col">
      <Nav />

      <div className="flex flex-1 m-6 gap-6 ">
        <section className=" flex flex-col w-[30%]">
          <h2 className="text-xl text-[#6B4E71] font-semibold">
            Media Dashboard
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Organize your personal bookshelf
          </p>

          <div className="mt-4 flex flex-col gap-4">
            
              <UserCard />
              <GetToKnowMe />
            
          </div>
        </section>

        <section className=" w-[70%]">
          <AddBookForm />
        </section>
      </div>
    </main>
  );
}

export default UserPage;
