/**
 * Check the title of the current browser window
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
export default (falseCase: boolean, expectedWeight: number) => {
    /**
     * The title of the current browser window
     * @type {String}
     */
    //const title = browser.getTitle();
    const weight = 0;

    if (falseCase) {
        expect(weight).not.toEqual(
            expectedWeight,
            // @ts-expect-error
            `Expected weight not to be "${expectedWeight}"`
        );
    } else {
        expect(weight).toEqual(
            expectedWeight,
            // @ts-expect-error
            `Expected weight to be "${expectedWeight}" but found "${title}"`
        );
    }
};
