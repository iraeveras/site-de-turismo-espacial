import { Link } from "react-router-dom"
import './index.css';
const Explore = () => {
    return (
        <div className="explore">
            <div className="explore-button">
                <Link to="/destination">Explore</Link>
            </div>
        </div>
    )
}

export default Explore;