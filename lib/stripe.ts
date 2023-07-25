import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2022-11-15",
  typescript: true,
});
