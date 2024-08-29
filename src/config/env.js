import env from 'dotenv'
// require('doenv').config();
import envvar from 'env-var';
// const {get} = require('ens-var')

env.config();

export const envs={
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}
