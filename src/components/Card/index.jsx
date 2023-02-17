import React, { Fragment } from 'react'
import Rating from '../Rating'
import Lottie from 'lottie-react'
import star from '../../assets/lotties/star.json'
import ratingAnimate from '../../assets/lotties/rating.json'
import { useRating, sendRating, ratingDispatch } from '../../contexts/rating'

const Card = () => {
  const dispatch = ratingDispatch()
  const ratingContext = useRating()
  const { rating, send, size } = ratingContext

  return (
    <div className='rounded-3xl bg-[#171E27] w-full max-w-[400px] p-6 min-h-[400px] max-h-[400px] flex justify-center flex-col'>
      {send ? (
        <Fragment>
          <div className='mb-4'>
            <Lottie
              animationData={ratingAnimate}
              loop={true}
              style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
              }}
            />
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-dark-blue rounded-2xl w-full flex justify-center items-center max-w-[200px] m-auto mb-4'>
              <span className='text-orange mt-1 tex-[15px]'>
                You selected {send} out of {size}
              </span>
            </div>
            <div className='mb-6'>
              <span className='text-white text-2xl'>Thank you!</span>
            </div>
            <div className='text-center'>
              <p className='text-light-grey-500 text-[15px]'>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in
              </p>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className='bg-dark-blue rounded-full w-[42px] mb-6'>
            <Lottie
              animationData={star}
              loop={true}
              style={{
                width: '100%',
                height: '42px',
              }}
            />
          </div>
          <div className='mb-6'>
            <h1 className='text-white text-2xl font-bold'>How did we do?</h1>
          </div>
          <div className='mb-6'>
            <p className='text-light-grey-500 text-[15px]'>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <Rating />
          <div
            className='w-full bg-orange hover:bg-white text-center group h-[35px] flex justify-center items-center rounded-2xl cursor-pointer'
            onClick={() => sendRating(dispatch, rating)}
          >
            <span className='uppercase text-white group-hover:text-orange font-bold text-[15px] mt-1'>
              submit
            </span>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default Card
