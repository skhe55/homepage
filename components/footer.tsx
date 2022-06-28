import { Box } from '@chakra-ui/react'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Kovtun Sergey. All Rights Reserved.
    </Box>
  )
}

export default Footer
