import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'
import Section from '~/components/section'
import { useAppSelector } from '~/hooks/typed-hooks'
import { configLanguage } from '~/lib/language'

const Works: FC = () => {
  const selectorLanguage = useAppSelector(
    state => state.languageToggle.language
  )
  return (
    <Container>
      <Section delay={0.3}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          textAlign="center"
          mb={6}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          {selectorLanguage === 'ru'
            ? configLanguage.ru.worksNotFound
            : configLanguage.en.worksNotFound}
        </Box>
      </Section>
    </Container>
  )
}

export default Works
