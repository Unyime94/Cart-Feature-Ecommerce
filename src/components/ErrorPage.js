import { useSelector } from "react-redux"

const ErrorPage = () => {
    const { errorMessage } = useSelector((store) => store.cart)

    return (
        <p>{errorMessage}</p>
    )
};

export default ErrorPage;