#!/usr/bin/env node

import { gameDescription, generateQuestionItem } from '../src/games/is-prime-game.js';
import startGame from '../src/index.js';

startGame(gameDescription, generateQuestionItem);
