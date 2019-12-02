import React from 'react';
import FirstBlock from './FirstBlock';
import Youtube from './Youtube';
import NavBar from './NavBar';

class App extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
        <FirstBlock />
        <Youtube />
      </div>
      
    )
  }
}

export default App;
