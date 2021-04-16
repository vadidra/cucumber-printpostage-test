import { When } from '@cucumber/cucumber';

import setSerialNumber from '../../../support/pages/PrintPostage/setSerialNumber';
import setMailFromZIP from '../../../support/pages/PrintPostage/setMailFromZIP';
import printOn from '../../../support/pages/PrintPostage/printOn';
import setMailToCountry from '../../../support/pages/PrintPostage/setMailToCountry';



//When I set Print On to "Stamps"
When(
    /^I set Print On to "([^"]*)?"$/,
    printOn
);

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

//When I set Mail To Country to "Canada"
//When  I click on the button "[name='ShipCountryCode']"
When(
    /^I set Mail To Country to "([^"]*)?"$/,
    setMailToCountry
);
/*
//When I set Weight lbs to "1" and oz to "1"
When(
    /^I set Weight lbs to "([^"]*)?" and oz to "([^"]*)?"$/,
    setCookie
);

*/


