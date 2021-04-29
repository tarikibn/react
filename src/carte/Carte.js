import axios from 'axios';
import React from 'react'
import { Component } from 'react';
import {Card,Button,Row, Col} from 'react-bootstrap'


class  Carte extends Component {

    state = {
        gitdata: [],
      };
    
      componentDidMount() {
        axios
          .get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
          .then((res) => {
            console.log(res);
            let ress=[];
            for(let i=0;i<8;i++){
           ress.push(res.data.meals[i]);
            }
            this.setState({
                gitdata: ress
              });
          });
      }
    
     

render(){

return(
    
  
 

  <Row>
    {this.state.gitdata.map((res) => (
         <Col>
    <Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={res.strMealThumb}   style={{ width: '18rem',height:'18rem'  }}/>
  <Card.Body>
    <Card.Title>{res.strMeal}</Card.Title>
    <Card.Text>
    {res.strArea}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
    ))}
    
     </Row>

)
}
}



export default Carte;