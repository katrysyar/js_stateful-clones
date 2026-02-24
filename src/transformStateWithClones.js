'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const history = [];
  let prevState = {...state};

  for (const action of actions) {
    let currentState = {...prevState };

    if (action.type === 'clear') {
      currentState = {};
    }

    if (action.type === 'addProperties') {
      Object.assign(currentState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete currentState[key];
      }
    }
    history.push(currentState);
    prevState = currentState;
  }

  return history;
}

module.exports = transformStateWithClones;
