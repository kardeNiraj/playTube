import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants'
import SearchBar from './Searchbar'

const NavBar = () => (
  <Stack
    direction='row'
    alignItems='center'
    py={2}
    px={3}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between',
      borderBottom: '1px solid #3d3d3d',
    }}>
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt='logo' height={45} />
    </Link>
    <SearchBar />
  </Stack>
)

export default NavBar
