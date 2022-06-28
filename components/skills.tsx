import { FC } from 'react'
import {
  Box,
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Stack,
  Progress,
  useColorModeValue
} from '@chakra-ui/react'

const Skills: FC = () => {
  const color = useColorModeValue('#3d7aed', '#ff63c3')
  return (
    <Box
      maxW="container.md"
      borderWidth="1px"
      borderRadius="lg"
      borderColor={color}
    >
      <Flex wrap="wrap">
        <Flex
          justifyContent="center"
          align="center"
          p={2}
          flexDirection="column"
        >
          <Box mb={2}>JavaScript</Box>
          <CircularProgress value={80} color={color}>
            <CircularProgressLabel>80%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex
          justifyContent="center"
          align="center"
          p={2}
          flexDirection="column"
        >
          <Box mb={2}>HTML/CSS</Box>
          <CircularProgress value={70} color={color}>
            <CircularProgressLabel>70%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex
          justifyContent="center"
          align="center"
          p={2}
          flexDirection="column"
        >
          <Box mb={2}>NodeJS</Box>
          <CircularProgress value={80} color={color}>
            <CircularProgressLabel>80%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex
          justifyContent="center"
          align="center"
          p={2}
          flexDirection="column"
        >
          <Box mb={2}>NestJS</Box>
          <CircularProgress value={90} color={color}>
            <CircularProgressLabel>90%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex
          justifyContent="center"
          align="center"
          p={2}
          flexDirection="column"
        >
          <Box mb={2}>ExpressJS</Box>
          <CircularProgress value={90} color={color}>
            <CircularProgressLabel>90%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex
          justifyContent="center"
          align="center"
          p={2}
          flexDirection="column"
        >
          <Box mb={2}>NextJS</Box>
          <CircularProgress value={80} color={color}>
            <CircularProgressLabel>80%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
      </Flex>
      <Flex p={2} flexDirection="column">
        <Stack>
          <Box>PostgreSQL, Docker</Box>
          <Progress value={70} />
        </Stack>
      </Flex>
      <Flex p={2} flexDirection="column">
        <Stack>
          <Box>TypeScript, Webpack, ChakraUI, Redux Toolkit, Git</Box>
          <Progress value={85} />
        </Stack>
      </Flex>
    </Box>
  )
}

export default Skills
