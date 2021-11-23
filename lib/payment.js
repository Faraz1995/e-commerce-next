import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(pk_test_51Jw5Q0BaKf60CtKt1iIQlGHR2TtYrhFaWZEsLziCz8mCJSEDphS8cC5G763c3UFwOy99ecJUBCvXg7qzwf3Oe74t00NHxmuaHY)
console.log('key',process.env.NEXT_PUBLIC_STRIPE_API_KEY);

export const initialCheckout =async({lineItems} ={}) =>{
 const stripe = await stripePromise
 await stripe.redirectToCheckout({
   mode:'payment',
   lineItems,
   successUrl:`${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
   cancelUrl:window.location.origin
 })

}