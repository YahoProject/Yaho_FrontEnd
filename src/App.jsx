import React from 'react';
import './styles/styles.css';
import BackButton from './components/BackButton';
import MenuButton from './components/MenuButton';
import Select from './components/Select';


const App = () => {
  return (
    <div className="app">
      <div className = "header">
        <BackButton/>
        <MenuButton/>
      </div>
      <p>야구 일기</p>
      <Select/>
 
    </div>
  );
};

export default App;
