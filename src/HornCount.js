import React from 'react';
import './HornCount.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import data from './data.json'


class HornCount extends React.Component {
    filter = (e) => {
      const numOfHorns = parseInt(e.target.value);
      let roastBeastData = data;
      if (numOfHorns) {
        roastBeastData = data.filter((roastBeast) => roastBeast.horns === numOfHorns);
      }
      this.props.presentBeastsByDre(roastBeastData);
    }
    render() {
      return (
        <Container>
          <Form>
            <Form.Group controlId="hornedChoices.ControlSelect1">
              <Form.Label>View a beast by number of horns 👉🏾</Form.Label>
              <Form.Control id="formcontrol" as="select" onChange={this.filter}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>100</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Container>
      )
    }
  }
  
  export default HornCount;