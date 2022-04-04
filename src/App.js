import List from "./List";
import data from "./data";
import { useState } from "react"; // Importo useSTate.

// Dichiaro setPeople e lo assegno all'array di oggetti "data."
function App() {
  const [people, setPeople] = useState(data);

  // Ripristino ogni singolo elemento
  // Prendo un parametro che contiene il valore corrente (oldValue), e returno
  const removeItem = (id) => {
    setPeople((oldValue) => oldValue.filter((value) => value.id !== id));
  };

  // Ripristino gli appuntamenti
  const reloadAllItem = () => {
    setPeople(data);
  };

  return (
    <section>
      <div className="container">
        <h2 style={{ color: "var(--bg-blue)" }}>Prossimi Incontri</h2>

        {/* Componente List, a cui passiamo il nostro array di ogggetti. */}
        <div className="people-list">
          <List data={people} removeItem={removeItem} />
        </div>

        <div className="btn-group">
          
          {/* Tasto di Ripristino */}
          <button className="btn btn-reset" onClick={reloadAllItem}>
            {" "}
            Reload{" "}
          </button>

          {/* Tasto Cancella. */}
          <button className="btn btn-delete" onClick={() => setPeople([])}>
            {" "} {/* setPeople = array vuoto */}
            Delete all
          </button>

        </div>
      </div>
    </section>
  );
}

export default App;