import React, { useState } from 'react';
import {
  Button,
  FormControl,
  // FormHelperText,
  Grid,
  Input,
  InputLabel,
} from '@material-ui/core';


const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data', title);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item xs>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="my-input">What to do?</InputLabel>
              <Input
                value={title}
                onChange={e => setTitle(e.target.value)}
                required={true}
              />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Button
              type="submit"
              fullWidth={true}
              color="primary"
              size="medium"
              variant="outlined"
            >
              New List
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default AddTaskForm;