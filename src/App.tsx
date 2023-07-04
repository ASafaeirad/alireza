import { Box } from 'ink';
import React from 'react';

import { About } from './sections/About.js';
import { Contact } from './sections/Contact.js';
import { Greetings } from './sections/Greetings.js';
import { Titles } from './sections/Titles.js';

const App = () => (
  <Box
    width={76}
    paddingY={1}
    paddingX={3}
    justifyContent="center"
    borderColor="yellowBright"
    borderStyle="round"
    flexDirection="column"
  >
    <Greetings />
    <Titles />
    <About />
    <Contact />
  </Box>
);

export default App;
