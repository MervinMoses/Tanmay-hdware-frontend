import React, { useState } from 'react';
import { makeStyles, Paper, Typography, TextField, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export const SettingsPage = () => {
  const classes = useStyles();

  const [settings, setSettings] = useState({
    companyName: 'Tanmay Hardware',
    currency: 'Rupees',
    notification: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: newValue,
    }));
  };

  const handleSaveSettings = () => {
    console.log('Settings saved:', settings);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Settings
      </Typography>

      <Paper className={classes.form} elevation={3}>
        <TextField
          className={classes.textField}
          label="Company Name"
          variant="outlined"
          name="companyName"
          value={settings.companyName}
          onChange={handleInputChange}
        />

        <TextField
          className={classes.textField}
          label="Currency"
          variant="outlined"
          name="currency"
          value={settings.currency}
          onChange={handleInputChange}
        />

        <div>
          <label>
            <input
              type="checkbox"
              name="notification"
              checked={settings.notification}
              onChange={handleInputChange}
            />
            &nbsp; Receive Notifications
          </label>
        </div>

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleSaveSettings}
        >
          Save Settings
        </Button>
      </Paper>
    </div>
  );
};

export default SettingsPage;
