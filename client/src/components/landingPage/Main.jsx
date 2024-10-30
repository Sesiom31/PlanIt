import MainBody from "./MainBody";
import MainHeader from "./MainHeader";

const Main = () => {
  return (
    <main className="w-full">
      <section className=" max-w-7xl mx-auto py-6 w-full">
        <section className=" px-4 py-6 w-full">
          <MainHeader />
          <MainBody />
        </section>
      </section>
    </main>
  );
};

export default Main;
