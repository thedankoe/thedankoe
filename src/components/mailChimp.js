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
  text-transform: uppercase;
  letter-spacing: 0.5rem;
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
  transition: all ease 0.3s;

  &:hover {
    border: 1px solid ${props => props.theme.secondaryLight};
    color: ${props => props.theme.secondaryLight};
  }
`

const Subscribe = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <form
      onSubmit={async e => {
        e.preventDefault()
        const result = await addToMailChimp(email, {
          FNAME: firstName,
          LNAME: lastName,
        })
        console.log(result)
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
      </InputContainer>
    </form>
  )
}

export default Subscribe
