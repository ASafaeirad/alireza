import { Box, Text } from 'ink';
import React from 'react';

const Link: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <Box alignItems="center" flexDirection="row" justifyContent="space-between" width="100%">
    <Text bold>{label}</Text>
    <Text color="cyan">{value}</Text>
  </Box>
);

export default Link;
