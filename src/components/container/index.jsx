import "./index.css"
const Container = ({ children, classNameValue }) => {
    return (
        <div className={classNameValue}>
            {children}
        </div>
    )
}

export default Container;