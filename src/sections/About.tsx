import { Box, Text } from 'ink';
import React from 'react';

import Link from '../components/Link';
import { data } from '../data';

export const About = () => (
  <Box flexDirection="column" marginBottom={2}>
    <Box alignItems="center" flexDirection="column" width="100%" marginBottom={1}>
      <Text bold>About Me</Text>
      <Text dimColor>{data.about}</Text>
    </Box>
    <Link label="CV" value={data.resume} />
  </Box>
);
