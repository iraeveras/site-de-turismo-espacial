import Container from "../../components/container";
import Content from "../../components/content";
import Explore from "../../components/explore";
import Space from "../../components/space";
import Topbar from "../../components/Topbar";
import Wrapper from "../../components/wrapper";
import "./index.css";

const Home = () => {
    return (
        <Container classNameValue="container home">
            <Content>
                <Topbar />
                <Wrapper>
                    <div className="container-home">
                        <div className="content-home">
                            <div className="container-space-explore">
                                <Space />
                                <Explore />
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Home;