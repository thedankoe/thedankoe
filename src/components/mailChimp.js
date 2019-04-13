import React, { useState } from 'react'
import styled from 'styled-components'
import addToMailChimp from 'gatsby-plugin-mailchimp'
import { device } from './styles/MediaQueries'

const InputContainer = styled.div`
  width: 40%;
  margin: ${props => props.theme.textSpace} auto 0 auto;

  @media ${device.tabletS} {
    width: 70%;
  }
`

const InputStyle = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-family: inherit;
  color: ${props => props.theme.lightestGrey};
  letter-spacing: 0.3rem;
  padding: 1.5rem 2rem;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-bottom: 3px solid transparent;
  transition: all ease 0.3s;

  &:focus {
    outline: none;
    border-bottom: 3px solid ${props => props.theme.success};
  }

  &:focus:invalid {
    border-bottom: 3px solid ${props => props.theme.warning};
  }

  &::placeholder {
    color: ${props => props.theme.lightestGrey};
  }
`

const ButtonStyle = styled.button`
  padding: 1rem 1.5rem;
  background: none;
  border: 1px solid ${props => props.theme.lightestGrey};
  border-radius: 2px;
  font-size: 1.8rem;
  color: ${props => props.theme.lightestGrey};
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    border: 1px solid ${props => props.theme.secondaryLight};
    color: ${props => props.theme.secondaryLight};
  }
`

const SuccessMessage = styled.p`
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  background: rgba(85, 197, 122, 0.8);
  border-radius: 3px;
  font-size: 1.8rem;
  color: ${props => props.theme.lightestGrey};
  letter-spacing: 0.3rem;
`

const ErrorMessage = styled.p`
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 119, 48, 0.8);
  border-radius: 3px;
  font-size: 1.8rem;
  color: ${props => props.theme.lightestGrey};
  letter-spacing: 0.3rem;
`

const formSubmit = value => {
  if (value.result === 'success') {
    return (
      <SuccessMessage>
        Success! You have successfully subscribed. Check your email for
        confirmation.
      </SuccessMessage>
    )
  }

  if (value.result === 'error') {
    return (
      <ErrorMessage>
        Error: You may have already subscribed. If you haven't, contact me.
      </ErrorMessage>
    )
  }
}

const Subscribe = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subResult, setSubResult] = useState('')

  return (
    <form
      onSubmit={async e => {
        e.preventDefault()
        const result = await addToMailChimp(email, {
          FNAME: firstName,
          LNAME: lastName,
        })
        setSubResult(result)
        setFirstName('')
        setLastName('')
        setEmail('')
      }}
    >
      <InputContainer>
        <InputStyle
          type="name"
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
          placeholder="First Name"
        />
        <InputStyle
          type="name"
          onChange={e => setLastName(e.target.value)}
          value={lastName}
          placeholder="Last Name"
        />
        <InputStyle
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <ButtonStyle type="submit">Submit</ButtonStyle>
        {formSubmit(subResult, setSubResult.msg)}
      </InputContainer>
    </form>
  )
}

export default Subscribe
