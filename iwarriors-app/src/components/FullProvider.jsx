import PropTypes from 'prop-types';

FullProvider.PropTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    streetNumber: PropTypes.string.isRequired,
    streetName: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    county: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
}

export function FullProvider({ _id, name, type, streetNumber, streetName, city, county, state, zip, phone, email, website }) {
    return (
        <div className='full-provider'>
            <div>
                <h3>{name}</h3>
                <p>{type}</p>
            </div>
            <div>
                <strong>Address:</strong>
                <p>{streetNumber} {streetName}, {city}, {county}, {state} {zip}</p>
            </div>
            <div>
                <strong>Contact:</strong>
                <p>Phone: {phone}, Email: {email}</p>
            </div>
            <div>
                <strong>Website:</strong>
                <p>{website}</p>
            </div>
        </div>
    )
}