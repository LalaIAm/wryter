import React from 'react'
import LoginForm from '../components/LoginForm'

const SignUp = () => {
  return (
    <div className='page sign-up'>
      <div className='sign-up-wrapper'>
        <p className='sign'>Sign</p>
        <p className='sign'>Up</p>
      </div>
      <LoginForm />
    </div>
  )
}

export default SignUp