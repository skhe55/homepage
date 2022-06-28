import { FC, ForwardedRef, forwardRef, ReactNode } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

type RetroComputerContainerProps = {
  children: ReactNode
}

export const RetroComputerSpinner: FC = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const RetroComputerContainer = forwardRef(
  (
    { children }: RetroComputerContainerProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Box
        ref={ref}
        className="retro-computer"
        m="auto"
        mt={['-20px', '-60px', '-120px']}
        mb={['-40px', '-140px', '-200px']}
        w={[280, 480, 640]}
        h={[280, 480, 640]}
        position="relative"
      >
        {children}
      </Box>
    )
  }
)

RetroComputerContainer.displayName = 'RetroComputerContainer'

const Loader = () => {
  return (
    <RetroComputerContainer>
      <RetroComputerSpinner />
    </RetroComputerContainer>
  )
}

export default Loader
