import  React, { Component } from 'react'
import Carte from './carte/Carte'

import  Nabar from './navbar/Nabar'





class  App  extends Component {
 render()
 {
  return (
    <div className="App">
        <Nabar/>
        <Carte/>
  
    </div>

);
 }
}

export default App;