import React, {Component} from 'react';
import {Container,Row} from 'reactstrap';
import Top from './Top';
import Fruta from './Fruta';
import {frutas} from '../data.js';
import '../App.css';

class Frutas extends Component {
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
            audiosrc: frutas[id].audio,
            playing: true
        });
        
    }
    render() {
        return (
            <div>
                <Top topTitle="Las Frutas" topDescription="Click on a fruit to listen and to read how to say the fruit in Spanish." />
                <Container>
                    <Row>
                    {
                       frutas.map((fruta,i) => (
                        <Fruta onClick={this.handleClick} actual={this.state.actual} mostrarMensaje={this.state.mostrar} key={i} info={fruta} />
                       ))}
                    </Row>
                    <audio id="audio" src={this.state.audiosrc} />
                </Container>
            </div>
        );
    }
}

export default Frutas;