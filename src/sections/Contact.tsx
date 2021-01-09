import { Box, Text } from 'ink';
import React from 'react';

import Link from '../components/Link';
import { data } from '../data';

export const Contact = () => (
  <Box flexDirection="column">
    <Box alignItems="center" flexDirection="column" width="100%" marginBottom={1}>
      <Text bold>Contact</Text>
    </Box>
    <Link label="Email" value={data.email} />
    <Link label="Github" value={data.github} />
    <Link label="Linkedin" value={data.linkedin} />
  </Box>
);
