import React from 'react';


//este fragmento de codigo es un componente de react que se encarga de renderizar el titulo de la aplicacion
const Header = (props) => {
  return (
    <header>
        <h1>{props.title}</h1>
    </header>
  );
}

export default Header;