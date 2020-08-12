import {useState} from "react";


const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        //Uses key to pull item from local storage
        const item = window.localStorage.getItem(key);

        //Returns stored value (json) or initial value if no value is stored
        return item ? JSON.parse(item) : initialValue;
    });

    

    function setValue(value) {
        //Puts value in state
        setStoredValue(value);
        //Stores value in browser
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}

export default useLocalStorage;