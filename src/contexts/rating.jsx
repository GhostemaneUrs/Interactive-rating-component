import { createContext, useContext, useReducer } from 'react'
import { ratingReducer, initialStateRating } from '../reducers/rating'

const RatingContext = createContext(null)
const RatingReducerContext = createContext(null)

export const useRating = () => {
  return useContext(RatingContext)
}

export const ratingDispatch = () => {
  return useContext(RatingReducerContext)
}

export const RatingProvider = ({ children }) => {
  const [rating, dispatch] = useReducer(ratingReducer, initialStateRating)
  return (
    <RatingContext.Provider value={rating}>
      <RatingReducerContext.Provider value={dispatch}>
        {children}
      </RatingReducerContext.Provider>
    </RatingContext.Provider>
  )
}

export const sendRating = (dispatch, rating) => {
  dispatch({
    send: rating,
    type: 'SEND_RATING',
  })
}

export const selectRating = (dispatch, rating) => {
  dispatch({
    rating: rating + 1,
    type: 'SELECT_RATING',
  })
}
