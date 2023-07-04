#!/usr/bin/env node

import clear from 'console-clear';
import { render } from 'ink';
import React from 'react';

import App from './App.js';

clear(true);
render(<App />);
