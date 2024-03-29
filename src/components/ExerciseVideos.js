import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({exerciseVideos, name}) => {

  return (
    <Box sx={{marginTop: {lg:'100px', xs: '20px'}}} p='20px'>
        <Typography variant='h3' m='0 0 33px 20px'>
            Watch {name} videos
        </Typography>
        <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' ml = '20px'
        sx={{flexDirection: {lg: 'row'}, gap: {lg: '110px', xs: '0'}}}>
            {exerciseVideos?.slice(0, 3).map((item, index) => (
                <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target='blank' rel='noreferrer'>
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                    <Box>
                        <Typography variant='h5' color='#000'>
                            {item.video.title}
                        </Typography>
                        <Typography variant='h6' color='#000'>
                            {item.video.channelName}
                        </Typography>
                    </Box>
                </a>
            ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos