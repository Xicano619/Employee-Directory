import React from "react";
import Container from './components/Container/index';
import Main from "./components/Main";
import Header from "./components/Header/index";



function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main />
      </Container>
    </div>
  );
}

export default App;
