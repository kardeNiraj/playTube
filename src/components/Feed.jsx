import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Sidebar, Videos } from './'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    )
  }, [selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      {/* sidebar */}
      <Box
        sx={{
          height: { sx: 'auto', md: '95vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 3 },
        }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      {/* main feed */}
      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 1,
        }}
        px={3}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}>
          {selectedCategory}
          <span style={{ color: '#fc1503', paddingLeft: '1rem' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
