#!/usr/bin/env node

import { gameDescription, generateQuestionItem } from '../src/games/calculator-game.js';
import startGame from '../src/index.js';

startGame(gameDescription, generateQuestionItem);
