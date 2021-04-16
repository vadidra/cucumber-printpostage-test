import { Selector } from 'webdriverio';

import checkIfElementExists from '../../lib/checkIfElementExists';

/**
 * Perform an click action on the given element
 * @param  {String}   value  The media to print on
 */
export default (value: string) => {
    
    const selector1 = '[name="ShipCountryCode"]';
    const method1 = 'click';

    checkIfElementExists(selector1);

    $(selector1)[method1]();
    
    browser.pause(1000);


    $$('ul#boundlist-1378-listEl li').forEach(element => {
        console.log(element.getText());
        if(element.getText()==value){
            element.moveTo();
            element.click()
        };
    });





};
