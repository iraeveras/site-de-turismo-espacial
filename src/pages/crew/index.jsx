import { useState } from "react";
import Container from "../../components/container";
import Content from "../../components/content";
import Topbar from "../../components/Topbar";
import Wrapper from "../../components/wrapper";
import data from "../../../data.json";
import "./index.css"
const Crew = () => {
    const crews = data.crew;
    
    const [selectedCrew, setSelectedCrew] = useState(crews[0]);

    const handleCrewClick = (crew) => {
        setSelectedCrew(crew)
    }

    return (
        <Container classNameValue="container crew">
            <Content>
                <Topbar />
                <Wrapper>
                    <div className="container-crew">
                        <div className="content-crew">
                            <div className="title-crew">
                                <span>02</span>
                                <p>MEET YOUR CREW</p>
                            </div>
                            <section className="crew-body-explanation">
                                <div className="crew-body-explanation-left">
                                    <div className="profile">
                                        <div className="description-profile">
                                            <p className="role">{selectedCrew.role}</p>
                                            <p className="name">{selectedCrew.name}</p>
                                        </div>
                                        <p className="bio">
                                            {selectedCrew.bio}
                                        </p>
                                    </div>
                                    <div className="pagination">
                                        <ul>
                                            {crews.map((crew) => (
                                                <li key={crew.name} className={`small-pagination ${selectedCrew.name === crew.name ? 'active' : ''}`} onClick={() => handleCrewClick(crew)}></li>
                                            ))}
                                            
                                            {/* <li className="small-pagination"></li>
                                            <li className="small-pagination"></li>
                                            <li className="small-pagination"></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="crew-body-explanation-right">
                                    <div className="crew-image">
                                        <img src={selectedCrew.images.webp} alt={`Image of ${selectedCrew.name}`} />
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

export default Crew;