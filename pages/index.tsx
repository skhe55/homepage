import { FC } from 'react'
import {
  Container,
  Box,
  Heading,
  ListItem,
  List,
  Button,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import { EmailIcon } from '@chakra-ui/icons'
import Telegram from '~/components/icons/telegram'
import Section from '~/components/section'
import Paragraph from '~/components/paragraph'
import { configLanguage } from '~/lib/language'
import { useAppSelector } from '~/hooks/typed-hooks'
import { BioYear } from '~/components/bio'
import Skills from '~/components/skills'
import { ExpiriencePoints } from '~/components/expirience-points'

const Home: FC = () => {
  const selectorLanguage = useAppSelector(
    state => state.languageToggle.language
  )
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        textAlign="center"
        mb={6}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        {selectorLanguage === 'ru'
          ? configLanguage.ru.description
          : configLanguage.en.description}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            {selectorLanguage === 'ru'
              ? configLanguage.ru.devHeader
              : configLanguage.en.devHeader}
          </Heading>
          <p>
            {selectorLanguage === 'ru'
              ? configLanguage.ru.devDescription
              : configLanguage.en.devDescription}
          </p>
        </Box>
      </Box>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          {selectorLanguage === 'ru'
            ? configLanguage.ru.workHeader
            : configLanguage.en.workHeader}
        </Heading>
        <Paragraph>
          <Box>
            <ExpiriencePoints>
              {selectorLanguage === 'ru'
                ? configLanguage.ru.aboutSelfHeader
                : configLanguage.en.aboutSelfHeader}
            </ExpiriencePoints>
            {selectorLanguage === 'ru'
              ? configLanguage.ru.aboutSelf
              : configLanguage.en.aboutSelf}
          </Box>
        </Paragraph>
        <Paragraph>
          <Box>
            <ExpiriencePoints>
              {selectorLanguage === 'ru'
                ? configLanguage.ru.whatDoIImplementHeader
                : configLanguage.en.whatDoIImplementHeader}
            </ExpiriencePoints>
            {selectorLanguage === 'ru'
              ? configLanguage.ru.whatDoIImplement
              : configLanguage.en.whatDoIImplement}
          </Box>
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant={'section-title'}>
          {selectorLanguage === 'ru'
            ? configLanguage.ru.skillsHeader
            : configLanguage.en.skillsHeader}
        </Heading>
        <Skills />
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          {selectorLanguage === 'ru'
            ? configLanguage.ru.bioHeader
            : configLanguage.en.bioHeader}
        </Heading>
        <Box>
          <BioYear>2021 June - 2021 October</BioYear>
          {selectorLanguage === 'ru'
            ? configLanguage.ru.bioDescription[0]
            : configLanguage.en.bioDescription[0]}
        </Box>
        <Box>
          <BioYear>2021 November - 2022 May</BioYear>
          {selectorLanguage === 'ru'
            ? configLanguage.ru.bioDescription[1]
            : configLanguage.en.bioDescription[1]}
        </Box>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          {selectorLanguage === 'ru'
            ? configLanguage.ru.interestedHeader
            : configLanguage.en.interestedHeader}
        </Heading>
        <Paragraph>
          {selectorLanguage === 'ru'
            ? configLanguage.ru.interestedDesc
            : configLanguage.en.interestedDesc}
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          {selectorLanguage === 'ru'
            ? configLanguage.ru.socialHeader
            : configLanguage.en.socialHeader}
          <List mt={4}>
            <ListItem>
              <Link href="https://github.com/skhe55" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @skhe55
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://t.me/ikbttw" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Telegram />}
                  mt={2}
                >
                  @ikbttw
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<EmailIcon />}
                  mt={2}
                >
                  @ikebukurottw@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Heading>
      </Section>
    </Container>
  )
}

export default Home
