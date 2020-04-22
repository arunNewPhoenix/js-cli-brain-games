#!/usr/bin/env node
import greetAndAskName from '../src/index.js';

import startIsEvenGame from '../src/is-even-game.js';

const name = greetAndAskName();
startIsEvenGame(name);
