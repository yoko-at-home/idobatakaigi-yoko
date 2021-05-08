import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Avatar } from '@material-ui/core'

import { gravatarPath } from '../gravatar'
import MessageField from './MessageField'
import MessageSubmitButton from './MessageSubmitButton'
import {IsQuestion} from "./IsQuestion";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '1rem',
  },
})

const MessageInputField = ({ name }) => {
  const inputEl = useRef(null)
  const [text, setText] = useState('')
  const classes = useStyles()
  const avatarPath = gravatarPath(name)

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={9}>
          <MessageField
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
        <Grid item xs={1}>
          <IsQuestion />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
            state
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default MessageInputField
