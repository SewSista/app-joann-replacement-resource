const Button = ({type, label, handleClick }) => {
    return (
        <button type={type} onClick={handleClick}>
            {label}
        </button>
    );
};

export default Button;