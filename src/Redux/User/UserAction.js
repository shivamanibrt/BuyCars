import { signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"
import { auth, db } from "../../Firebase/firebase-config"
import { doc, getDoc } from "firebase/firestore";
import { setUser } from '../userSlice'



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
        //signgin in the user with the provided email ans password
        const { email, password } = data
        const pendingUser = signInWithEmailAndPassword(auth, email, password)

        toast.promise(pendingUser, {
            pending: 'Please wait'
        });

        const { user } = await pendingUser;
        if (user.uid) {
            dispatch(getUserAction(user.uid))
        }

    } catch (error) {
        toast.error(error.message)
    }
}