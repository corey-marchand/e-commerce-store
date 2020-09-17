import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStrip = price * 100;

    const publishableKey = 'pk_test_51HSAEZCM2v28dAmKXQB3VvAIa5zhlqWG62ayasWwbbCvhILiPtvk8JMh1KMGIzRFUSu28sJ6VSXIFZ6lofghVcgi00NvGg5dfV';

    const onToken = token => {
        console.log(token);

        alert('Payment successful');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='E-Commerce Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStrip}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;