import { Then } from '@cucumber/cucumber';

import checkWeightLbs from '../../../support/pages/PrintPostage/checkWeightLbs';
import setServiceTo from '../../../support/pages/PrintPage';

//Then I expect that Weight lbs is "1"
Then(
    /^I expect that the Weight lbs is( not)* "([^"]*)?"$/,
    checkWeightLbs
);

//Then I set service to "Letter"
Then(
    /^I set service to "([^"]*)?"$/,
    setServiceTo
);


