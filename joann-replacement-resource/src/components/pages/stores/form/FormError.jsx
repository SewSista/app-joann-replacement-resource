const FormErrorMessage = ({ hasError, message }) => {
    return <>{hasError && <p>{message}</p>}</>;
};

export default FormErrorMessage;