/**
 * Check the title of the current browser window
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
export default (falseCase: boolean, expectedWeightLbs: number) => {

    $('[name="WeightLbs"]').waitForDisplayed();
    const weightLbs = $('[name="WeightLbs"]').getValue();

    if (falseCase) {
        expect(weightLbs).not.toEqual(
            expectedWeightLbs,
            // @ts-expect-error
            `Expected weight not to be "${expectedWeightLbs}"`
        );
    } else {
        expect(weightLbs).toEqual(
            expectedWeightLbs,
            // @ts-expect-error
            `Expected weight to be "${expectedWeightLbs}" but found "${weightLbs}"`
        );
    }
};
