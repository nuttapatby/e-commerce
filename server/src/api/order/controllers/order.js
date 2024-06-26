// @ts-ignore
const stripe = require('stripe')(process.env.STRIPE_KEY);

'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        // @ts-ignore
        const { products } = ctx.request.body;

        const lineItems = await Promise.all(
            products.map(async (product) => {
                const item = await strapi
                    .service('api::product.product')
                    .findOne(product.id);


                return {
                    price_data: {
                        currency: 'thb',
                        product_data: {
                            name: product.title,
                        },
                        unit_amount: product.price * 100,
                    },
                    quantity: product.quantity,
                };
            })
        );

        try {
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}?success=true`,
                cancel_url: `${process.env.CLIENT_URL}?success=false`,
                line_items: lineItems,
                shipping_address_collection: { allowed_countries: ['TH'] },
                payment_method_types: ['card'],
            });

            await strapi.service('api::order.order').create({
                data: {
                    products,
                    StripeId: session.id,
                },
            });

            return { stripeSession: session };
        } catch (err) {
            ctx.response.status = 500;
            return err;
        }
    },
}));