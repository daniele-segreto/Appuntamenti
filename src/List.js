import React from "react";

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
          <button className="btn">Remove</button> {/* Tasto Rimuovi */}
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;