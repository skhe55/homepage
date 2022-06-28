import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { languageReducer } from './reducers/languageToggle'

const reducer = combineReducers({
  languageToggle: languageReducer
})

const store = configureStore({
  reducer
})

const makeStore = () => store

export const wrapper = createWrapper(makeStore)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
