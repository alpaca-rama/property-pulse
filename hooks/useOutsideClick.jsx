import {useEffect} from "react";

export default function useOutsideClickHandler(ref, onClose) {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            onClose()
        }
    }

    useEffect(() => {
        const listener = document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', listener)
    }, [ref, onClose])
}