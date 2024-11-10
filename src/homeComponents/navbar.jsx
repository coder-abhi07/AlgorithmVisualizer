import React, {Component} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import withAuth0 from './withAuth0';

class Navbar extends Component {
    
    render() {
        const { logout, loginWithRedirect, isAuthenticated, isLoading,  user  } = this.props.auth0;
        
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <a className="navbar-brand" href="#">Algorithm Visualizer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                        </li>
                       
                        <li className="nav-item active">
                            {!isLoading && !isAuthenticated && (
                                <button onClick={() => loginWithRedirect()} className="btn btn-outline-light mx-2">
                                    Log In
                                </button>
                            )}
                            {!isLoading && isAuthenticated && (
                            
                                <button 
                                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} 
                                    className="btn btn-outline-light mx-2"
                                >
                                    Log Out
                                </button>
                                
                        )}
                        </li>
                        {!isLoading && isAuthenticated && (
                            
                        <li className="nav-item nav-link text-white">Welcome, {user && user.name}</li>
                        )}

                        {!isLoading && isAuthenticated && (
                        <li className="nav-item nav-link text-white d-flex align-items-center">
                                        {user.picture && (
                                            <img 
                                                src={user.picture} 
                                                alt="Profile" 
                                                className="rounded-circle mr-2" 
                                                style={{ width: '30px', height: '30px' }}
                                            />
                                        )} 
                                        </li>  )}  

                    </ul>
                </div>
            </nav>
        );
    }
}

export default withAuth0(Navbar);