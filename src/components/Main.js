import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import MessageList from './MessageList'
import MessageInputField from './MessageInputField'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
    background:
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,188,194,1) 84%, rgba(0,212,255,1) 100%)',
    color: '#fff',
  },
})

const Main = ({name}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MessageList />
      <MessageInputField name={ name }/>
    </div>
  )
}

export default Main
