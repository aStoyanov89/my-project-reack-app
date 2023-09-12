import { useState, useEffect } from 'react';

const useFinalPrice = (product) => {
    const [finalPrice, setFinalPrice] = useState(null);

    useEffect(() => {
        if (product) {
            const a = Number(product.price);
            const b = Number(product.discountPercentage);
            const discount = a - (a * b / 100);
            const roundedDiscountPrice = discount.toFixed(2);
            setFinalPrice(roundedDiscountPrice);
        }
    }, [product]);

    return finalPrice;
};
export default useFinalPrice