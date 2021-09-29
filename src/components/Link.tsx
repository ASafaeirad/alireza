import { Box, Text } from 'ink';
import React from 'react';

const Link: React.FC<{ label: string; value: JSX.Element }> = ({ label, value }) => {
  return (
    <Box alignItems="center" flexDirection="row" justifyContent="space-between" width="100%">
      <Text bold>{label}</Text>
      {value}
    </Box>
  );
};

export default Link;
