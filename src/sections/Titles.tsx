import { Box, Text } from 'ink';
import React from 'react';
import { data } from '../data';


export const Titles = () => (
  <Box marginRight={1} borderStyle="round" paddingX={1} marginBottom={2} justifyContent="center">
    {data.titles.map((title, index) => (
      <React.Fragment key={title}>
        <Text bold>{title}</Text>
        {index !== data.titles.length - 1 ? <Text> | </Text> : null}
      </React.Fragment>
    ))}
  </Box>
);
