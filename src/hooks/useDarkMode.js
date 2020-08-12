import {useState} from "react";
import useLocalStorage from "./useLocalStorage.js";



const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage("modeKey");

    return [storedValue, setValue]; 
}

export default useDarkMode;