import './index.css';
const Wrapper = ({ children, classNameValue }) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default Wrapper;