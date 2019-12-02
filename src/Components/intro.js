import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Logo from '/IntroPic.png'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  }
})

export default function Types() {
  const classes = useStyles()

  return (
    <div style={{ margin: 10}}>
      <Typography variant="h4" component="h4" gutterBottom>
        CPS530 Project Page
      </Typography>
      <img src={Logo} width='100%'/>
      <Typography variant="body1" gutterBottom>
        This is the front-end demo page of our CPS530 project
      </Typography>
    </div>
  )
}
