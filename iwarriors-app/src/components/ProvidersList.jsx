import { Fragment } from 'react';
import Proptypes from 'prop-types';
import { Provider } from './Provider';

ProviderList.Proptypes = {
    provider: Proptypes.arrayOf(
        Proptypes.shape(provider.Proptypes)
    ).isRequired,
};

export function ProvidersList({ providers = [] }) {
    return (
        <div>
            {providers.map((provider) => ( 
                <Fragment key={`provider-${provider._id}`}>
                    <Provider _id={provider._id} name={provider.name} />
                    <hr />
                </Fragment>
                ))
            }
        </div>
    )
}