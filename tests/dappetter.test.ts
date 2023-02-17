import {expect, jest, test} from '@jest/globals';
import {bootstrap, RECOMMENDED_METAMASK_VERSION} from '@chainsafe/dappeteer';

jest.setTimeout(100 * 1000);

test('dappeteer browser starts', async () => {
  const { browser } = await bootstrap({
    metaMaskVersion: RECOMMENDED_METAMASK_VERSION,
    automation: "puppeteer",
    headless: true,
    metaMaskFlask: false,
  });
  expect(browser).toBeDefined();

  await browser.close();
  expect(false).toBeFalsy();
});