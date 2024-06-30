import { Box, Container } from '@mui/material';
import {InstagramWrapper} from './companents/instagramWrapper';

function App() {
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