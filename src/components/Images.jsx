import { Link } from 'react-router-dom';

function Images(props) {
    return (
        <>
            <Link to={props.URL}>
                <img src={props.SRC} alt={props.ALT} />
            </Link>
        </>
    )
}

export default Images
