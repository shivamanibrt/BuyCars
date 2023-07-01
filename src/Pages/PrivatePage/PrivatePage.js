
import { Navigate } from 'react-router-dom';

export const PrivatePage = ({ children }) => {
    // const { user } = useSelector((state) => state.user);
    const user = true;

    return user?.uid ? children : <Navigate to='/signIn' replace />
}