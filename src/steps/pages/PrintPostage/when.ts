import { When } from '@cucumber/cucumber';

import setSerialNumber from '../../../support/pages/PrintPostage/setSerialNumber';
import setMailFromZIP from '../../../support/pages/PrintPostage/setMailFromZIP';
import printOn from '../../../support/pages/PrintPostage/printOn';
import setMailToCountry from '../../../support/pages/PrintPostage/setMailToCountry';
import setWeight from '../../../support/pages/PrintPostage/setWeight';


When(
    /^I set Print On to "([^"]*)?"$/,
    printOn
);

When(
    /^I set Serial Number to "([^"]*)?"$/,
    setSerialNumber
);

When(
    /^I set Mail From ZIP to "([^"]*)?"$/,
    setMailFromZIP
);

When(
    /^I set Mail To Country to "([^"]*)?"$/,
    setMailToCountry
);

When(
    /^I set Weight lbs to "([^"]*)?" and oz to "([^"]*)?"$/,
    setWeight
);




