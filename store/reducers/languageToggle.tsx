import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

/**
 * state, action types
 */

type ISliceState = {
  language: string | 'ru'
}

type ISlicePayload = ISliceState

/**
 * Initial state
 */

const initialState: ISliceState = {
  language: 'ru'
}

export const languageToggleSlice = createSlice({
  name: 'languageToggle',
  initialState,
  reducers: {
    setLanguage: (state: ISliceState, action: PayloadAction<ISlicePayload>) => {
      try {
        state.language = action.payload.language
      } catch (error) {
        console.error(error)
      }
    }
  }
})

/**
 * Export actions, reducers
 */

export const { setLanguage } = languageToggleSlice.actions
export const languageReducer = languageToggleSlice.reducer
