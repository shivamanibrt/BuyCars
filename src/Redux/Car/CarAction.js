import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase-config";
import { toast } from "react-toastify";
import { setCar } from "./carSlice";

// Action to get all cars
export const getAllCarsAction = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, 'Cars')); // Updated collection reference to 'Cars'
        const cars = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        dispatch(setCar(cars));
    } catch (error) {
        toast.error(error.message);
    }
};

export const createNewCarAction = (carObj) => async (dispatch) => {
    try {
        const docRef = await addDoc(collection(db, 'Cars'), carObj);
        if (docRef?.id) {
            toast.success('New car has been added.');
            dispatch(getAllCarsAction());
        }
    } catch (error) {
        toast.error(error.message);
    }
};
