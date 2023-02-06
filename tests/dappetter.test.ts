import {expect, jest, test} from '@jest/globals';
import {bootstrap, RECOMMENDED_METAMASK_VERSION} from '@chainsafe/dappeteer';

jest.setTimeout(100 * 1000);

test('two plus two is four', async () => {
  const { metaMask, browser, metaMaskPage } = await bootstrap({
    metaMaskVersion: RECOMMENDED_METAMASK_VERSION,
    automation: "playwright",
    headless: true,
    browser: "chrome",
    metaMaskFlask: false,
  });

  expect(true).toBeTruthy();
});