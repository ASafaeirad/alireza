import { Box } from 'ink';
import React from 'react';

import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Greetings } from './sections/Greetings';
import { Titles } from './sections/Titles';

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
