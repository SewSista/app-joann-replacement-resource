const InputMessage = ({ hasMsg, message }) => {
    return <>{hasMsg && <p>{message}</p>}</>;
};

export default InputMessage;