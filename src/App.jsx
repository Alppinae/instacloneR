import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';

import {InstagramWrapper} from './companents/instagramWrapper';
import { supabase } from './supabase/instance.js';

function App() {
  
    async function getCountries() {
      const {data} = await supabase.from("countries").select('');
      console.log(data);
    }

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <Container maxWidth="lg" width="100%" sx={{
      marginTop: "1rem",
      height:"100%"
      }}
    >
      <Box sx={{flexGrow: 1}} height="100%">
        <InstagramWrapper />
      </Box>
    </Container>
  )
}

export default App