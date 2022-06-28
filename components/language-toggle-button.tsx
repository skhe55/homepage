import { Button } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'
import { useAppSelector, useAppDispatch } from '~/hooks/typed-hooks'
import { setLanguage } from '~/store/reducers/languageToggle'

const LanguageToggleButton = () => {
  const languageSelector = useAppSelector(
    state => state.languageToggle.language
  )
  const dispatch = useAppDispatch()

  const handleChangeLanguage = () => {
    const language = languageSelector === 'ru' ? 'en' : 'ru'
    dispatch(setLanguage({ language }))
  }

  return (
    <Button
      leftIcon={<RepeatIcon />}
      colorScheme="teal"
      variant="solid"
      ml={2}
      onClick={() => handleChangeLanguage()}
    >
      {languageSelector === 'ru' ? 'Язык' : 'Language'}
    </Button>
  )
}

export default LanguageToggleButton
