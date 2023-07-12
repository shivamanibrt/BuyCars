import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase-config";
import { toast } from "react-toastify";
import { setCart } from "./cartSlice";


export const getAllCartAction = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, 'Cart'));
        const cart = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        dispatch(setCart(cart));
    } catch (error) {
        toast.error(error.message);
    }
};

export const createNewCartAction = (cartObj) => async (dispatch) => {
    try {
        const docRef = await addDoc(collection(db, 'Cart'), cartObj);
        if (docRef?.id) {
            toast.success('New item has been added to cart.');
            dispatch(getAllCartAction());
        }
    } catch (error) {
        toast.error(error.message);
    }
};
