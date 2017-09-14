import React, {Component} from 'react';
import {Container,Row,Col} from 'reactstrap';
import LessonCard from './LessonCard';
import Top from './Top';

class Home extends Component {  
    render() {
        return (
          <div>
           <Top topTitle="Spanish Lessons" topDescription="Select below the lesson you want to explore" />
            <Container>
            <Row>
              <Col sm={{ size: 3, push: 3, pull: 2, offset: 1 }}>
              <LessonCard  cardImage="./images/colores_title.png" cardTitle="Los Colores" cardDescription="Learn about colors in Spanish" cardLink="/colores" />
              </Col>
            </Row>
            </Container>
          </div>
        );
    }
}

export default Home;