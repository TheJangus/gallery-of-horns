import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slapaaHeartOnIt: 0,
        }
    }
    buttonClicked = () => {
        this.setState({ slapaaHeartOnIt: this.state.slapaaHeartOnIt + 1 });
        this.props.showModal(this.props.title);
    }

    render() {

        const title = this.props.title;
        const image = this.props.img;
        const description = this.props.description;

        return (
            <>
                <Card style={{ width: '18rem' }}
                    onClick={this.buttonClicked}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>Horn Count: {this.props.horns}</Card.Text>
                        <Card.Text>❤️ = {this.state.slapaaHeartOnIt}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default HornedBeasts;