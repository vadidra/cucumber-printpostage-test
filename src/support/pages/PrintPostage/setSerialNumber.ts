import type { Selector } from 'webdriverio';

import checkIfElementExists from '../../lib/checkIfElementExists';

/**
 * Set the value of the serial number
 * @param  {String}   serialNumber  The serial number to set to
 */
export default (value: string) => {
    
    const selector = '[name="NsSerial"]';
    const command = 'setValue';

    let checkValue = value;

    checkIfElementExists(selector, false, 1);

    if (!value) {
        checkValue = '';
    }

    $(selector)[command](checkValue);
};
