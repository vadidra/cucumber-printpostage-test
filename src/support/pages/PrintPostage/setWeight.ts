import { Selector } from 'webdriverio';

import checkIfElementExists from '../../lib/checkIfElementExists';

/**
 * @param  {String}   lbs  Weight lbs
 * @param  {String}   oz   Weight oz
 */
export default (lbs: string, oz: string) => {
    
    const selector_lbs = '[name="WeightLbs"]';
    const selector_oz = '[name="WeightOz"]';
    const command = 'setValue';
   
    let checkValue_lbs = lbs;

    checkIfElementExists(selector_lbs, false, 1);

    if (!lbs) {
        checkValue_lbs = '';
    }

    $(selector_lbs)[command](checkValue_lbs);

    let checkValue_oz = oz;

    checkIfElementExists(selector_oz, false, 1);

    if (!oz) {
        checkValue_oz = '';
    }

    $(selector_oz)[command](checkValue_oz);

};




