export const initialStateRating = {
  size: 5,
  rating: 0,
  send: null,
}

export const ratingReducer = (state, action) => {
  switch (action.type) {
    case 'SEND_RATING':
      return { ...state, send: action.send }
    case 'SELECT_RATING':
      return { ...state, rating: action.rating }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
