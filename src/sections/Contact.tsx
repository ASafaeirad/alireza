import { Box, Text } from 'ink';
import React from 'react';

import Link from '../components/Link';
import { data } from '../data';

export const Contact = () => (
  <Box flexDirection="column">
    <Box alignItems="center" flexDirection="column" width="100%" marginBottom={1}>
      <Text bold>Contact</Text>
    </Box>
    <Link
      label="Email"
      value={
        <Box>
          <Text bold color="cyan">{data.email}</Text>
          <Text dimColor>@gmail.com</Text>
        </Box>
      }
    />
    <Link
      label="Github"
      value={
        <Box>
          <Text dimColor>https://gituhub.com/</Text>
          <Text bold color="cyan">{data.github}</Text>
        </Box>
      }
    />
    <Link
      label="Linkedin"
      value={
        <Box>
          <Text dimColor>https://www.linkedin.com/in/</Text>
          <Text bold color="cyan">{data.linkedin}</Text>
        </Box>
      }
    />
  </Box>
);
