import React from 'react';
import Selfinfo from './Self-info';
import Footer from './Footer';
import Avatar from './Avatar';

function App(props) {
  return (
    <div >
      <Avatar />
      <Selfinfo /*name="Valeriya"*//>
      <Footer />
    </div>
  );
}

export default App;
