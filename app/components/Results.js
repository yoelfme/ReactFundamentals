'use strict'

import React from 'react'
import { Link } from 'react-router'
import Styles from '../styles'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from './MainContainer'
import Loading from './Loading'

const { bool, array } = React.PropTypes

const StartOver = () => {
  return (
    <div className='col-sm-12' style={Styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

const Tie = () => {
  return (
    <MainContainer>
      <h1>It's a tie!</h1>
      <StartOver />
    </MainContainer>
  )
}

const Results = (props) => {
  if (props.isLoading === true) {
    return <Loading text='Waiting for a moment' />
  }

  if (props.scores[0] === props.scores[1]) {
    return <Tie />
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
  const losingIndex = +!winningIndex
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: bool.isRequired,
  playersInfo: array.isRequired,
  scores: array.isRequired
}

export default Results
