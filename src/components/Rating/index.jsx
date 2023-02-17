import { useRating, selectRating, ratingDispatch } from '../../contexts/rating'

const Steps = () => {
  const dispatch = ratingDispatch()
  const ratingContext = useRating()
  const { size, rating } = ratingContext

  return (
    <div className='flex gap-[33px] items-center w-full mb-8'>
      {size <= 5 &&
        Array(size)
          .fill(0)
          .map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => selectRating(dispatch, index)}
                className={` ${
                  rating === index + 1
                    ? 'bg-orange'
                    : 'bg-dark-blue hover:bg-light-grey-900'
                }  group rounded-full w-[45px] px-2 py-2 flex justify-center items-center text-center cursor-pointer`}
              >
                <span
                  className={`${
                    rating === index + 1
                      ? 'text-white'
                      : 'text-light-grey-900 group-hover:text-white '
                  } mt-1`}
                >
                  {index + 1}
                </span>
              </div>
            )
          })}
    </div>
  )
}

export default Steps
