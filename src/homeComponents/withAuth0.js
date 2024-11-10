import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const withAuth0 = (Component) => (props) => {
    const auth0 = useAuth0();
    return <Component {...props} auth0={auth0} />;
};

export default withAuth0;
