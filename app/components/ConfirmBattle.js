'use strict'

import React from 'react'
import { Link } from 'react-router'

import Styles from '../styles'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from './MainContainer'
import Loading from './Loading'

const { bool, func, array } = React.PropTypes

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <Loading text='Waiting' speed={800} />
    : <MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Player 1'>
            <UserDetails info={props.playersInfo[0]}/>
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Player 2'>
            <UserDetails info={props.playersInfo[1]}/>
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={Styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
              Initiate Battle!
            </button>
          </div>
          <div className='col-sm-12' style={Styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: bool.isRequired,
  onInitiateBattle: func.isRequired,
  playersInfo: array.isRequired
}

export default ConfirmBattle
