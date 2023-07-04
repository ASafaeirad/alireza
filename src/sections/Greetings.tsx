import { Box, Text } from 'ink';
import React from 'react';

import { data } from '../data.js';

export const Greetings = () => (
  <Box flexDirection="column" alignItems="center" marginBottom={1}>
    <Text>
      {data.greetings}{' '}
      <Text bold color="yellow">
        {data.name}
      </Text>
      .
    </Text>
  </Box>
);
