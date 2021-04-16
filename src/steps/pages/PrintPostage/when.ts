import { When } from '@cucumber/cucumber';

import setSerialNumber from '../../../support/pages/PrintPostage/setSerialNumber';
import setMailFromZIP from '../../../support/pages/PrintPostage/setMailFromZIP';
//import clickElement from '../support/action/clickElement';
//import closeLastOpenedWindow from '../support/action/closeLastOpenedWindow';
//import deleteCookies from '../support/action/deleteCookies';
//import dragElement from '../support/action/dragElement';
//import focusLastOpenedWindow from '../support/action/focusLastOpenedWindow';
//import handleModal from '../support/action/handleModal';
//import moveTo from '../support/action/moveTo';
//import pause from '../support/action/pause';
//import pressButton from '../support/action/pressButton';
//import scroll from '../support/action/scroll';
//import selectOption from '../support/action/selectOption';
//import selectOptionByIndex from '../support/action/selectOptionByIndex';
//import setCookie from '../support/action/setCookie';
//import setInputField from '../support/action/setInputField';
//import setPromptText from '../support/action/setPromptText';


//When I set Print On to "Stamps"
//When  I click on the button "[name='PrintMedia']"
//When(
//    /^I set Print On to "([^"]*)?"$/,
//    clickElement
//);

//When I set Serial Number to "C12345"
When(
    /^I set Serial Number to "([^"]*)?"$/,
    setSerialNumber
);

//When I set Mail From ZIP to "94102"
When(
    /^I set Mail From ZIP to "([^"]*)?"$/,
    setMailFromZIP
);
/*
//When I set Mail To Country to "Canada"
//When  I click on the button "[name='ShipCountryCode']"
When(
    /^I set Mail To Country to "([^"]*)?"$/,
    dragElement
);

//When I set Weight lbs to "1" and oz to "1"
When(
    /^I set Weight lbs to "([^"]*)?" and oz to "([^"]*)?"$/,
    setCookie
);

*/


