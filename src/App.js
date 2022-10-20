//imports
import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer.js';
import About from './About.js';
import SelectedBeast from './SelectedBeast'
import data from './data.json'

//class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      roastBeastData: data,
      selectedBeast: {}
    }
  }
  showModal = (name) => {

    const selectedBeast = data.find(beast => beast.title === name);
    this.setState({ selectedBeast, displayModal: true });
  }
  hideModal = () => {
    this.setState({ displayModal: false });
  }
  presentBeastsByDre = (roastBeastData) => {
    this.setState({ roastBeastData });
  }
  render() {
    return (
      <>
        <Header />
        <About />
        <Main
          showModal={this.showModal}
          beasts={this.state.roastBeastData}
          presentBeastsByDre={this.presentBeastsByDre}
        />
        <SelectedBeast
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedBeast={this.state.selectedBeast}
        />;
        <Footer />;
      </>
    )
  }
}
//export
export default App;
