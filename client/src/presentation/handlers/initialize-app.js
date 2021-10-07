// keep this file!  it works and you will need it

// keep this import statement
import { initializeState } from '../../business-logic/initialize-state.js';

// keep this function! it works and you will need it
export const initializeApp = async () => {
  // this works!
  await initializeState();

  // initialize your UI. no need for `await` after this line!
};
