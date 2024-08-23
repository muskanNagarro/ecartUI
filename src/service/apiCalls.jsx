import { useState, useEffect } from 'react';

const path = 'http://e-comm-2-env-env.eba-jm8iphts.eu-central-1.elasticbeanstalk.com';

export const getProducts = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        fetch(new URL(`${path}/getProducts`), { referrerPolicy: "unsafe-url" })
          .then((res) => {return res.json();})
          .then((data) => {setApiData(data);});
        }, []);
    return [apiData, setApiData];
}

export const getCartData = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch(new URL(`${path}/getCartData`))
          .then((res) => {return res.json();})
          .then((data) => {setCart(data);});
        }, []);
    return [cart, setCart];
}

export const getOrderData = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(new URL(`${path}/getOrderData`))
          .then((res) => {return res.json();})
          .then((data) => {setOrder(data);});
        }, []);
    return [order, setOrder];
}

export const setCartData = (cartData) => {
    useEffect(() => {
        fetch(new URL(`${path}/setCartData`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartData)
          }))
          .then((res) => {return res.json();})
          .then((data) => {setcart(data);});
        }, []);
    return [order, setOrder];
}

export const setOrderData = (orderData) => {
    useEffect(() => {
        fetch(new URL(`${path}/setOrderData`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
          }))
          .then((res) => {return res.json();})
          .then((data) => {setOrder(data);});
        }, []);
    return [order, setOrder];
}