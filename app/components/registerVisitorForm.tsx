'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import handleVisitorRegistration from './handleVisitorRegistration';

export default function RegisterVisitorForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (visitor: any) => {
    handleVisitorRegistration(visitor)
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Register Visitor
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const visitor = Object.fromEntries((formData as any).entries());
            handleClose(visitor);
          },
        }}
      >
        <DialogTitle>Register Visitor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the form below to register for visitor parking.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="lp"
            name="licensePlate"
            label="License Plate #"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="sponsor"
            name="sponsor"
            label="Sponsor Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="duration"
            name="duration"
            label="Number of Days"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Register</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}