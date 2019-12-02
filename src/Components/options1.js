import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  }

}))

export default function RadioButtonsGroup() {
  const classes = useStyles()

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">
          What is your role at Ryerson University?
        </FormLabel>
        <RadioGroup>
          <FormControlLabel value="Student" control={<Radio />} label="Student" />
          <FormControlLabel value="Prof" control={<Radio />} label="Prof" />
          <FormControlLabel value="TA" control={<Radio />} label="TA" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
