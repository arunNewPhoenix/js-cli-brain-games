#!/usr/bin/env node

import { gameDescription, generateQuestionItem } from '../src/is-even-game.js';
import startGame from '../src/index.js';

startGame(gameDescription, generateQuestionItem);
