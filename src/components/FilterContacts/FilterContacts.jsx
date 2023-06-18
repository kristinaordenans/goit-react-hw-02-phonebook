import { PropTypes } from "prop-types";


export const Filter = ({ value, filterInputChange }) => {
    return (
        <div>
            <h3>Find contacts by name</h3>
            <input type="text" value={value} onChange={filterInputChange} />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filterInputChange: PropTypes.func.isRequired,
}