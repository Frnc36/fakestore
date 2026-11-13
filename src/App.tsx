import "./App.css";
import Products from "./components/Products";

function App() {
  const NEV = "Mágori Ferenc Ferdinánd";
  const CIM = "FakeStore";

  return (
    <>
      <main>
        <header>{CIM}</header>
        <article>
          <Products />
        </article>
        <footer>&copy;Készítette: {NEV}</footer>
      </main>
    </>
  );
}

export default App;
