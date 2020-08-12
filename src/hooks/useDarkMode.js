import {useState, useEffect} from "react";
import useLocalStorage from "./useLocalStorage.js";



const useDarkMode = (key) => {
    const [storedValue, setValue] = useLocalStorage("key");
    console.log("useDarkMode  storedValue is ", storedValue);

    const element = window.document.body;
    const className = 'dark-mode';


    useEffect(() => {
        if(storedValue) {
            element.classList.add(className);
        }
        else {
            element.classList.remove(className);
        }

    }
    )



    return [storedValue, setValue]; 
}

export default useDarkMode;