import { Then } from '@cucumber/cucumber';

import checkWeightLbs from '../../../support/pages/PrintPostage/checkWeightLbs';
import setService from '../../../support/pages/PrintPostage/setService';

//Then I expect that Weight lbs is "1"
Then(
    /^I expect that Weight lbs is( not)* "([^"]*)?"$/,
    checkWeightLbs
);

Then(
    /^I set service to "([^"]*)?"$/,
    setService
);


