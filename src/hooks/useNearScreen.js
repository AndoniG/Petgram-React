import { useEffect, useState, useRef } from "react";

// INTERSECTION OBSERVER NO ESTÁ SOPORTADO EN TODOS LOS NAVEGADORES PERO USANDO EL POLYFILL DE LA W3C PODEMOS USARLO
export function useNearScreen() {
    const [show, setShow] = useState(false);
    // CAPTURA EL ELEMENTO DEL DOM
    const element = useRef(null)

    useEffect(() => {
        Promise.resolve(
            typeof window.IntersectionObserver !== undefined ? window.IntersectionObserver : import('intersection-observer')
        ).then(() => {
            const observer = new window.IntersectionObserver(function (entries) {
                const { isIntersecting } = entries[0];
                if (isIntersecting) {
                    setShow(true);
                    // EVITA QUE EL OBSERVADOR SE VUELVA A EJECUTAR, UNA VEZ QUE ES VISIBLE SE DESACTIVA.
                    observer.disconnect();
                }
            })
            observer.observe(element.current);
        })
    }, [element])

    return [show, element]
}


