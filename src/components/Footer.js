import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box bgcolor='#fff3f4' mt='60px'>
      <Stack gap='40px' alignItems='center'>
        <img src={Logo} alt='logo' width='180px' height='180px' mt='20px' />
      </Stack>
    </Box>
  )
}

export default Footer