import clear from 'console-clear';
import { Box, render, Text } from 'ink';
import React from 'react';

import { data } from './data';

const Link: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <Box alignItems="center" flexDirection="row" justifyContent="space-between" width="100%">
    <Text bold>{label}</Text>
    <Text color="cyan">{value}</Text>
  </Box>
);

const Example = () => (
  <Box
    width={79}
    paddingY={1}
    paddingX={3}
    justifyContent="center"
    borderColor="white"
    borderStyle="round"
    flexDirection="column"
  >
    <Box flexDirection="column" alignItems="center" marginBottom={1}>
      <Text>
        {data.greetings}{' '}
        <Text bold color="yellow">
          {data.name}
        </Text>
        .
      </Text>
    </Box>

    <Box marginRight={1} borderStyle="round" paddingX={1} marginBottom={2} justifyContent="center">
      {data.titles.map((title, index) => (
        <React.Fragment key={title}>
          <Text bold>{title}</Text>
          {index !== data.titles.length - 1 ? <Text> | </Text> : null}
        </React.Fragment>
      ))}
    </Box>

    <Box flexDirection="column" marginBottom={2}>
      <Box alignItems="center" flexDirection="column" width="100%" marginBottom={1}>
        <Text bold>About Me</Text>
        <Text dimColor>{data.about}</Text>
      </Box>
      <Link label="CV" value={data.resume} />
    </Box>

    <Box flexDirection="column">
      <Box alignItems="center" flexDirection="column" width="100%" marginBottom={1}>
        <Text bold>Contact</Text>
      </Box>
      <Link label="Email" value={data.email} />
      <Link label="Github" value={data.github} />
      <Link label="Linkedin" value={data.linkedin} />
    </Box>
  </Box>
);

clear();
render(<Example />);
