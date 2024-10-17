import * as dotenv from 'dotenv';

dotenv.config()

const configuracao = {
    usuario: process.env.EMAIL!,
    password: process.env.PASSWORD!,
    api: process.env.API_URL,
};

export default configuracao;