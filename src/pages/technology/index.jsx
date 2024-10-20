import React, { useState } from "react";
import Container from "../../components/container";
import Content from "../../components/content";
import Topbar from "../../components/Topbar";
import Wrapper from "../../components/wrapper";
import data from "../../../data.json";
import "./index.css";

const Technology = () => {
    const technologys = data.technology;
    
    const [selectedTechnology, setSelectedTechnology] = useState(technologys[0]);
    const handleTechnologyClick = (technology) => {
        setSelectedTechnology(technology)
    }
    return (
        <Container classNameValue="container technology">
            <Content>
                <Topbar />
                <Wrapper>
                    <div className="container-technology">
                        <div className="content-technology">
                            <div className="technology-title">
                                <span>03</span>
                                <p>SPACE LAUNCH 101</p>
                            </div>
                            <section className="technology-body-explanation">
                                <div className="technology-body-explanation-left">
                                    <div className="pagination-explanation-buttons">
                                        {technologys.map((technology, index) => (
                                            <div key={technology.name} className="box-btn-tchnology">
                                                <button className={`btn btn-index-1 ${selectedTechnology.name === technology.name ? 'btn-active' : ''}`} onClick={() => handleTechnologyClick(technology)}>{index + 1}</button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="technology-content-explanation">
                                        <div className="classification">
                                            <div className="classification-name">
                                                THE TERMINOLOGY…
                                            </div>
                                            <div className="classification-commander">
                                                {selectedTechnology.name}
                                            </div>
                                        </div>
                                        <div className="classification-description">
                                            {selectedTechnology.description}
                                        </div>
                                    </div>
                                </div>
                                <div className="technology-body-explanation-right">
                                    <div className="box-technology-image">
                                        <picture className="technology-image">
                                            <source media={`(max-width: 768px)`} srcSet={`${selectedTechnology.images.portrait}`} />
                                            <source media={`(max-width: 375px)`} srcSet={`${selectedTechnology.images.portrait}`} />
                                            <img src={`${selectedTechnology.images.portrait}`} alt={`Image of ${selectedTechnology.name}`} />
                                        </picture>
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

export default Technology;