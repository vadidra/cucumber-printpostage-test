/**
 * Open the given URL
 * @param  {String}   page The URL to navigate to
 */
export default (url: string) => {
    /**
     * The URL to navigate to
     * @type {String}
     */
    browser.url(url);
};
