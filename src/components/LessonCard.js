import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBlock,
    CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';
import animations from './animations';

class LessonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: false
        }
    
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    
      }
    handleMouseOver(e) {
        e.preventDefault();
        this.setState(
          {selected: !this.state.selected}
        )
      }
  
      handleMouseOut(e) {
        e.preventDefault();
        this.setState(
          {selected: !this.state.selected}
        )
      }
      
      componentDidMount(){
          animations.show(this.card,1);
      }

      componentDidUpdate(prevProps,prevState){
        this.state.selected ? animations.scaleUp(this.card,0.3) : animations.scaleDown(this.card,0.3);
      }
    render() {
        return(
        <div ref={c => this.card = c } onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
            <Card>
                <CardImg top width="100%" src={this.props.cardImage} />
                <CardBlock>
                <CardTitle>{this.props.cardTitle}</CardTitle>
                <CardText>{this.props.cardDescription}</CardText>
                <Link className="btn btn-secondary" to={this.props.cardLink}>Start</Link>
                </CardBlock>
            </Card>
        </div>
        );
    }
}

LessonCard.PropTypes = {
  cardImage: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardLink: PropTypes.string.isRequired
}

export default LessonCard;