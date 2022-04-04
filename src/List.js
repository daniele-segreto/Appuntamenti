import React from "react";
import {RiDeleteBack2Fill} from "react-icons/ri"; // Importo icons-react

// Attraverso i props, passo i dati del nostro array di oggetti al componente List. Iteriamo i nostri dati con il metodo map.
const List = (props) => {
  return (
    <>
      <ul className="user-list">
        {props.data.map((person) => (
          <li key={person.id}> {/* Dichiaro l'attributo key */}
            <Person {...person} /> {/* Passo le proprietà al Componente, tramite lo Spread Operator (...). */}
          </li>
        ))}
      </ul>
    </>
  );
};

// Il Componete Person avrà id, nome, stato, img.
const Person = ({ id, nome, stato, img, removeItem }) => {
  return (
    <article>
      <img src={img} alt="prs" className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn">
            {/* Componente = Icona importata dalla librearia di React */}
            <RiDeleteBack2Fill className="icon" />
          </button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;