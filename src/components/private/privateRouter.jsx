import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ Component }) => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	console.log(isAuthenticated)
	return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
