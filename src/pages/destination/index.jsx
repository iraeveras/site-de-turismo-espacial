import React, { useState } from "react";
import Container from "../../components/container";
import Content from "../../components/content";
import Topbar from "../../components/Topbar";
import Wrapper from "../../components/wrapper";
import icons from "../../constants/icons";
import data from "../../../data.json"
import "./index.css";

const Destination = () => {
    const destinations = data.destinations;
    
    const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

    const handleDestinationClick = (destination) => {
        setSelectedDestination(destination)
    }
    
    return (
        <Container classNameValue="container destination">
            <Content>
                <Topbar />
                <Wrapper>
                    <div className="container-destination">
                        <div className="content-destination">
                            <div className="title-destination">
                                <span>01</span>
                                <p>pick your destination</p>
                            </div>
                            <section className="explanation-destination">
                                <div className="content-explanation">
                                    <div className="box-content-explanation">
                                        <nav className="menu-destination">
                                            <ul className="nav-list-destination">
                                                {destinations.map((destination) => (
                                                    <li 
                                                        key={destination.name} 
                                                        className={`nav-link-destination ${selectedDestination.name === destination.name ? 'nav-link-destination-active' : ''} `}
                                                    >
                                                        <button onClick={() => handleDestinationClick(destination)}>
                                                            {destination.name.toLowerCase()}
                                                        </button>
                                                    </li>
                                                ))}
                                                
                                                {/* <li className="nav-link-destination"><button>mars</button></li>
                                                <li className="nav-link-destination"><button>europa</button></li>
                                                <li className="nav-link-destination"><button>titan</button></li> */}
                                            </ul>
                                        </nav>
                                        <div className="about">
                                            <h1 className="about-name">{selectedDestination.name}</h1>
                                            <blockquote className="about-text">
                                                {selectedDestination.description}
                                            </blockquote>
                                        </div>
                                        <img className="division-line" src={icons.imgLine} alt="image divisor" />
                                        <footer>
                                            <div className="distance">
                                                <span className="descrition-text">avg. distance</span>
                                                <span className="descrition-number">{selectedDestination.distance}</span>
                                            </div>
                                            <div className="time">
                                                <span className="descrition-text">est. travel time</span>
                                                <span className="descrition-day">{selectedDestination.travel}</span>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                                <div className="box-img-explanation">
                                    <div className="content-img-explanation">
                                        <img src={selectedDestination.images.webp} alt={`Image of ${selectedDestination.name}`} />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Destination;