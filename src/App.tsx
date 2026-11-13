import "./App.css";
import Products from "./components/Products";

function App() {
  const NEV = "Mágori Ferenc Ferdinánd";
  const CIM = "FakeStore";

  return (
    <>
      <main className="m-4">
        <header className="text-center ">{CIM}</header>
        <article>
          <Products />
        </article>
        <footer className="text-center">&copy;Készítette: {NEV}</footer>
      </main>
    </>
  );
}

export default App;
