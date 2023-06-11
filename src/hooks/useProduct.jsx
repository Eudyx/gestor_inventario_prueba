import { useState } from "react";
import axios from "../api/axios";

export const useProduct = () => {
    const [product, setProduct] = useState({});

    const getProduct = (id) => {
        axios.get(`/ProductId/?id=${id}`)
            .then(res => setProduct(res.data))
            .catch(err => {
                console.error(err);
                if(!err?.response){
                    setErrorMsg('Sin respuesta del servidor')
                } else if(err.response.status === 404) {
                    setErrorMsg('La ruta no ha sido encontrada');
                } else {
                    setErrorMsg('Solicitud fallida.')
                }
            });
    }

    return [product, getProduct];
}