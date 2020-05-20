import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import InputMail from './Components/InputEmail/InputEmail.component';
import Input from './Components/Input/Input.component';
import ButtonSend from './Components/ButtonSend/ButtonSend.component';

function App() {
  return (
    <div className="App">
      <Footer />
      <InputMail />
      <Input />
      <ButtonSend />
    </div>
  );
}

export default App;
