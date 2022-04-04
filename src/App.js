import List from "./List";
import data from "./data";
import { useState } from "react"; // importo useSTate.

// dichiaro setPeople e lo assegno all'array di oggetti "data."
function App() {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <div className="container">
        <h2 style={{ color: "var(--bg-blue)" }}>Prossimi Incontri</h2>
        <div className="people-list">
          {/* Componente List, a cui passiamo il nostro array dy ogggetti. */}
          <List data={people}/>
        </div>
        <div className="btn-group">
          <button className="btn btn-reset">Reload</button> {/* Ricarica */}
          <button className="btn btn-delete">Delete all</button> {/* Cancella. */}
        </div>
      </div>
    </section>
  );
}

export default App;