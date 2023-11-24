import React from 'react';
import { makeStyles, Paper, Typography, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  content: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

export const HelpAndSupportPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Help and Support
      </Typography>

      <Paper className={classes.content} elevation={3}>
        <Typography variant="h6" gutterBottom>
          Frequently Asked Questions (FAQs)
        </Typography>
        <Typography>
          How do I add a new product to the inventory?
          <Typography>
            Can I import existing product data into the system?
          </Typography>
          <Typography>
            What types of barcodes are supported, and how do I use them?
          </Typography>
          <Typography>
            How can I set up multiple warehouse locations in the system?
          </Typography>
          <Typography>
            What is the process for updating stock levels after a shipment is received?
          </Typography>
          <Typography>
            How do I track product movement and sales history?
          </Typography>
          <Typography>
            Is it possible to set up reorder points to avoid stockouts?
          </Typography>
          <Typography>
            How can I manage returns and damaged goods in the system?
          </Typography>
          <Typography>
            What integrations are available with accounting or e-commerce platforms?
          </Typography>
          <Typography>
            Can I generate custom reports to analyze inventory performance?
          </Typography>
        </Typography>
      </Paper>

      <Paper className={classes.content} elevation={3}>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography>
          If you have any further questions or need assistance, feel free to
          contact our support team. We are here to help!
        </Typography>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          component={NavLink}
          to="/contact"
        >
          Contact Support
        </Button>
      </Paper>
    </div>
  );
};

export default HelpAndSupportPage;
