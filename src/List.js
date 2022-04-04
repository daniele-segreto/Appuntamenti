import React from "react";
import {RiDeleteBack2Fill} from "react-icons/ri"; // Importo icons-react.

// Attraverso i props, passo i dati del nostro array di oggetti al componente List. Iteriamo i nostri dati con il metodo map.
const List = (props) => {
  return (
    <>
      <ul className="user-list">

        {/* 1. Passo le proprietà al Componente (cioè un array di oggetti), tramite lo Spread Operator (...);
            2.  Passo la funzione per rimuovere il singolo elemento */}
        {props.data.map((person) => (
          <li key={person.id}> {/* Dichiaro l'attributo key. */}
            <Person {...person} removeItem={props.removeItem} />
          </li>
        ))}

      </ul>
    </>
  );
};

// 1. Il Componente Person avrà id, nome, stato, img;
//2. Passare removeItem.
const Person = ({ id, nome, stato, img, removeItem }) => {
  return (
    <article>
      <img src={img} alt="prs" className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>

          {/* 1. Componente = Icona importata dalla libreria di React; */}
          {/* 2.Aggiungere l'onClick per il removeItem(id). */}
          <button className="btn" onClick={() => removeItem(id)}>
            {" "}
            <RiDeleteBack2Fill className="icon" />
          </button>

        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;