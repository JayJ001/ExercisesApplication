import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

const HeroBanner = () => {
  return (
    <Box position="relative"
      p="20px"
      sx={{ mt: { lg: '150px', xs: '50px' }, ml: { sm: '120px' } }}>
      <Typography color="#FF2625"
        fontWeight="600"
        fontSize="26px"
      >
        Workout Aid
      </Typography>
      <Typography fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Working out made <br /> easy
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroudColor: '#FF2625', padding: '10px' }}>
        Explore Exercises
      </Button>
      {/* <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Workout
      </Typography> */}
    </Box>
  )
}

export default HeroBanner