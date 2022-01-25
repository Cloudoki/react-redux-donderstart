import React, { ChangeEvent, FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { Input } from 'components/Input'
import { Title, Label, Paragraph } from 'components/Typography'
import { Button } from 'components/Button'
import { Loading } from 'components/Loading'
import { Routing } from 'constants/global'
import { login } from 'store/auth/actions/login'
import { forgotPassword } from 'store/auth/actions/forgot'
import { resetPassword } from 'store/auth/actions/reset'
import { register } from 'store/auth/actions/register'
import { $Credentials, $Inputs, $Login, $Logo, $Wave } from './styles'
import { Store } from 'store/types'

export const Login: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { token } = useParams()
  const isWorking = useSelector(({ auth }: Store) => auth.isWorking)
  const [state, setState] = useState({ email: '', password: '', confirmPassword: '' })

  const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: value})
  }

  const handleLoginClick = () => {
    dispatch(login({ email: state.email, password: state.password })) 
    setState({ email: '', password: '', confirmPassword: '' })
  }

  const handleForgotPassword = () => {
    dispatch(forgotPassword({ email: state.email }))
    setState({ email: '', password: '', confirmPassword: '' })
  }
  
  const handleResetPassword = () => {
    dispatch(resetPassword({ password: state.password, token: '' }))
    setState({ email: '', password: '', confirmPassword: '' })
  }

  const handleRegister = () => {
    dispatch(register({ password: state.password, token: '' }))
    setState({ email: '', password: '', confirmPassword: '' })
  }

  const renderView = () => {
    if (token) {
      const isRegister = pathname.includes('register')
      return (
        <>
          <Title>{isRegister ? 'Welcome!' : 'Welcome back!'}</Title>
          <Paragraph bold>Please set a new password</Paragraph>
          <$Inputs>
            <Input 
              name='password'
              type='password'
              placeholder='Password'
              value={state.password}
              onChange={handleInputChange}
            />
            <Input 
              name='confirmPassword'
              type='password'
              placeholder='Confirm Password'
              value={state.confirmPassword}
              onChange={handleInputChange}
            />
          </$Inputs>
          <Button 
            onClick={isRegister ? handleRegister : handleResetPassword} 
            disabled={state.password !== state.confirmPassword || !token }
          >
              Update password
          </Button>
        </>
      )
    }
    
    switch(pathname) {
      case Routing.LOGIN: 
        return (
          <>
            <Title>Welcome back!</Title>
            <$Inputs>
              <Input 
                name='email'
                type='email'
                placeholder='E-mail'
                value={state.email}
                onChange={handleInputChange}
              />
    
              <Input 
                name='password'
                type='password'
                placeholder='Password'
                value={state.password}
                onChange={handleInputChange}
              />
            </$Inputs>
            <Button onClick={handleLoginClick} disabled={!state.email && !state.password}>Log in</Button>
            <Label light hover onClick={() => navigate(Routing.FORGOT_PASSWORD)}>Forgot password ?</Label>
          </>
        )
      case Routing.FORGOT_PASSWORD:
        return (
          <>
            <Title>Request a new password</Title>
            <Paragraph bold>Please enter your e-mail address.</Paragraph>
            <$Inputs>
              <Input 
                name='email'
                type='email'
                placeholder='E-mail'
                value={state.email}
                onChange={handleInputChange}
              />
            </$Inputs>
            <Button onClick={handleForgotPassword} disabled={!state.email}>Request new password</Button>
            <Label light hover onClick={() => navigate(Routing.LOGIN)}>Back to login</Label>
          </>
        )
      default: 
        return
    }
  }

  if (isWorking) return <Loading />

  return (
    <$Login>
      <$Logo />
      <$Credentials>
        {renderView()}
      </$Credentials>
      <$Wave />
    </$Login>
  )
}