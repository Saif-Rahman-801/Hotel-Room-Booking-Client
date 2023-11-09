import PropTypes from "prop-types"
import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.any
}

export default PrivateRoute;