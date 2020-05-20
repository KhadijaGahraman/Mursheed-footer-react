import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import ButtonSend from './Components/ButtonSend/ButtonSend.component';
import InputMail from './Components/InputEmail/InputEmail.component';


function App() {
  return (
    <div className="App">
      <Footer />
      <InputMail />
      <ButtonSend />
    </div>
  );
}

export default App;
