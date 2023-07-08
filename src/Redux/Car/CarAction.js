import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase-config";
import { toast } from "react-toastify";
import { setCar, setSelectedCar } from "./carSlice";

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

export const deleteCarAction = (id) => async (dispatch) => {
    try {
        await deleteDoc(doc(db, 'Cars', id));
        dispatch(getAllCarsAction());

    } catch (error) {
        toast.error(error.message);
    }
}

export const fetchCarbyId = (carId) => async dispatch => {
    try {
        const docRef = doc(db, 'Cars', carId);
        const docSnapshot = await getDoc(docRef);

        const carData = docSnapshot.data();
        const buyingCarData = { ...carData, id: docSnapshot.id };

        dispatch(setSelectedCar(buyingCarData))
    } catch (error) {
        toast.error(error)

    }
}
