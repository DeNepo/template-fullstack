// keep this file!  it works, and you will need it

import { load } from '../data-access/load.js';

export const initializeState = async () => {
  // you will need to change this path to the name of your data file
  await load('../../../data/hello.json', import.meta);
};
