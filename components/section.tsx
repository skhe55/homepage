import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  delay: number
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section: FC<SectionProps> = ({ children, delay = 0 }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: '0.8', delay: `${delay}` }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section
