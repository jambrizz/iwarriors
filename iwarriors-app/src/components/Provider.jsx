import PropTypes from 'prop-types';

Provider.PropTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string
};

export function Provider({ _id, name }) {
    return (
        <div className='post'>
            <h2>Post ID: {_id}</h2>
            <p>{name}</p>
        </div>
    );
}