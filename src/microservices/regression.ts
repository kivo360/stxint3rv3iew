import axios from 'axios';
import { getAddress } from './genericService'

const REGRESSIONHOST = "localhost";
const REGRESSIONPORT = 8000;



/**
 * Train the regressor based on the information we have available.
 * @param data - The data we're using to train the regressor
 * @param callback - This is the callback. It explains wether the ML algorithm was trained or not.
 */
export function trainRegressor(data: {[key: string]: any}, cb: (error: Error, result: any)=>void){
    axios.post(`${getAddress(REGRESSIONHOST, REGRESSIONPORT, false)}/train`)
         .then(res=>cb(null, res))
         .catch((reason) => cb(new Error("Something went wrong"), null))
}


/**
 * Get the prediction of the regressor using the given dictionary.
 * @param data - data we're going to get predictions on. The prediction will be used to determine how the shoe will deviate based on prior assumptions
 * @param cb - The callback for when the results actually come in
 */
export function predictRegressor(data: { [key: string]: any }, cb: (error: Error, result: any) => void) {
    axios.post(`${getAddress(REGRESSIONHOST, REGRESSIONPORT, false)}/predict`)
        .then(res => cb(null, res))
        .catch((reason) => cb(new Error("Something went wrong"), null))
}