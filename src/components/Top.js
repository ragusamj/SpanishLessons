import React, {Component} from 'react';
import {Jumbotron, Container} from 'reactstrap';

class Top extends Component {
    render(){
        return (
         <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">{this.props.topTitle}</h1>
              <p className="lead">{this.props.topDescription}</p>
            </Container>
          </Jumbotron>
        );
    }
}

export default Top;