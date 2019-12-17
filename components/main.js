import React from 'react';
import Box from '@material-ui/core/Box';
import MediaCard from './card'

export default function Main() {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" justifyContent="space-between" flexDirection="row" p={1} m={1} bgcolor="background.paper">
        <Box p={1} bgcolor="grey.300">
          <MediaCard/>
        </Box>
        <Box p={1} bgcolor="grey.300">
          <MediaCard/>
        </Box>
        <Box p={1} bgcolor="grey.300">
          <MediaCard/>
        </Box>
      </Box>
    </div>
  );
}