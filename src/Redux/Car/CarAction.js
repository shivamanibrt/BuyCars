import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase-config";
import { toast } from "react-toastify";
import { setCar } from "./carSlice";

// Action to get all books
export const getAllCarsAction = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, 'books'));
        const books = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        dispatch(setCar(books));
    } catch (error) {
        toast.error(error.message);
    }
};

export const createNewCarAction = (carObj) => async dispatch => {
    try {
        const productWithAvaibility = { ...carObj };

        const docRef = await addDoc(collection(db, 'Cars'), productWithAvaibility);
        if (docRef?.id) {
            toast.success('New Book has been added.');
            dispatch(getAllCarsAction());
        }
    } catch (error) {
        toast.error(error.message);
    }
}