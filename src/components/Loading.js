import Spinner from "react-bootstrap/Spinner"


export const Loading = ({size = "100px"}) => {

    return(
        <Spinner animation="border" role="status" className="d-flex justify-content-center">
            <span className="visually-hidden">Loading...</span>
        </Spinner>

    )

}