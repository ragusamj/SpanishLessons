import React, {Component} from 'react';
import {Col} from 'reactstrap';
import animations from './animations';

const styles = {
    cursor:'pointer'
}


class Creyon extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.props.onClick(e.target.id);
    }
    componentDidMount(){
        animations.hide(this.msg,0);
        animations.slideUp(this.image,1,this.props.info.delay);
    }

   
    componentWillUpdate(nextProps,nextState) {
        if (nextProps.actual !== this.props.info.id || !nextProps.mostrarMensaje) {
            animations.hide(this.msg,0.3);
        } else {
            animations.show(this.msg,0.5); 
        }
    }
    render() {
        return (
            <Col className="text-center">
                <div>
                <img ref={c => this.msg = c } src={this.props.info.mensaje}  alt="mensaje" />
                </div>
                <div ref={img => this.image = img}>
                    <img  id={this.props.info.id} style={styles} className="text-center" onClick={this.handleClick} src={this.props.info.imagen} alt={this.props.info.name} />
                </div>
            </Col>
        );
    }
}

export default Creyon;