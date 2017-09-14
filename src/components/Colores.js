import React, {Component} from 'react';
import {Container,Row} from 'reactstrap';
import Top from './Top';
import Creyon from './Creyon';
import {colores} from '../data.js';
import '../App.css';

class Colores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            actual: "",
            audiosrc: "",
            mostrar: false
        };

        this.handleClick = this.handleClick.bind(this);
    }


      componentDidUpdate(prevProps,prevState){
        let audioTag = document.getElementById('audio');
        if (prevState.playing) {
            audioTag.pause();
        } 
        if (this.state.playing) {
            audioTag.play();
            clearTimeout(this.timeout);
            this.timeout = setTimeout(this.removeMensaje.bind(this), 3000);
        }
      }

      removeMensaje() {
        if (this.state.playing) {
            this.setState(
                {playing: false,
                mostrar: false
                }
            )
        }
     }

    handleClick(id) {
       this.setState (
        {actual: id,
         mostrar: true
        });
       
        this.setState( {
            audiosrc: colores[id].audio,
            playing: true
        });
        
    }
    render() {
        return (
            <div>
                <Top topTitle="Los Colores" topDescription="Click on a crayon to listen and to read how to say the color in Spanish." />
                <Container>
                    <Row>
                    {
                       colores.map((color,i) => (
                        <Creyon onClick={this.handleClick} actual={this.state.actual} mostrarMensaje={this.state.mostrar} key={i} info={color} />
                       ))}
                    </Row>
                    <audio id="audio" src={this.state.audiosrc} />
                </Container>
            </div>
        );
    }
}

export default Colores;