import React from 'react';
import './Sass/main.scss';
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Main from './Componentes/Paginas/Main'

const miFucnion = (valor) => {
  return valor*2
}

function App() {
  return (
    <div className="App">
      <Header nombre="Mi Aplicación " fecha={Date()}   />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
