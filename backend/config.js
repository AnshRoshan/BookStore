export const port = 3000;
import { config } from 'dotenv';
config();

export const mongoDBurl=process.env.MONGODB_URL