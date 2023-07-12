import { signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"
import { auth, db } from "../../Firebase/firebase-config"
import { doc, getDoc, setDoc } from "firebase/firestore";
import { setUser } from '../User/userSlice'


export const getUserAction = (uid) => async (dispatch) => {
    try {
        // Retrieve a specific user by ID from Firestore
        const userRef = await getDoc(doc(db, 'users', uid));
        const userInfo = { ...userRef.data(), uid: uid };

        // Dispatch an action to set the user information in the Redux store
        dispatch(setUser(userInfo));
    } catch (error) {
        // Display an error toast if an error occurs
        toast.error(error.message);
    }
};

export const loginUser = (data) => async (dispatch) => {
    try {
        // Sign in the user with the provided email and password
        const pendingUser = signInWithEmailAndPassword(auth, data.email, data.password);
        // Display a toast message while the user is being signed in
        toast.promise(pendingUser, {
            pending: 'Please wait...'
        });
        const { user } = await pendingUser;

        if (user.uid) {
            // If the user is successfully signed in, retrieve their information and update the Redux store
            dispatch(getUserAction(user.uid));
        }
    } catch (error) {
        // Display an error toast if an error occurs
        toast.error(error.message);
    }
};

export const updateProfileAction = ({ id, ...rest }) => async dispatch => {
    try {
        await setDoc(doc(db, 'users', id), rest, { merge: true })
        dispatch(getUserAction(id));
        toast.success('Your account has been updated succesfully')
    }
    catch (error) {
        toast.error(error.message)
    }
}