import React from 'react';
import HornedBeasts from './HornedBeasts';
import Card from 'react-bootstrap/Card';
import HornCount from './HornCount.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
    render() {
        return (
            <>
                <main>
                    <>
                        <HornCount
                            presentBeastsByDre={this.props.presentBeastsByDre}
                        />
                        <Card>
                            {this.props.beasts.map((this.roastBeast, index) => {
                                return (
                                    <div key={index}>
                                        <HornedBeasts
                                            showModal={this.props.showModal}
                                            title={this.roastBeast.title}
                                            img={this.roastBeast.image_url}
                                            description={this.roastBeast.description}
                                            horns={this.roastBeast.horns}
                                        />
                                    </div>
                                )
                            })}
                        </Card>

                    </>
                </main>
            </>
        )
    }
}

export default Main;





// {/* <HB
//     animalName="Horned Frog"
//     imageUrl="https://upload.wikimedia.org/wikipedia/commons/5/5b/Suriname_Horned_Frog_%28Ceratophrys_cornuta%29_%287774154124%29.jpg"
//     description="Suriname Horned Frog not amused"
// />
//  <HB
//     animalName="Charlie the Unicron"
//     imageUrl="https://static.wikia.nocookie.net/filmcow/images/d/de/Charlie_episode_4.png/revision/latest?cb=20170628143744"
//     description="Charlie on his way to Candy Mountain"
// /> */}