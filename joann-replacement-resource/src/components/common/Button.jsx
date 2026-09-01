import "./button-animation.css";

const Button = ({type, label, handleClick }) => {
    return (
        <button className="animate"
        type={type} onClick={handleClick}>
            <span className="front">{label}</span>
        </button>
    );
};

export default Button;