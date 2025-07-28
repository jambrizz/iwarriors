import { Fragment } from 'react';
import Proptypes from 'prop-types';
import { Provider } from './Provider';

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