import React from 'react';
import { makeStyles, Paper, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  tableContainer: {
    marginTop: theme.spacing(2),
  },
}));

export const ReportPage = () => {
  const classes = useStyles();

  // Example data, replace this with your actual report data
  const reportData = [
    { id: 1, name: 'Item 1', quantity: 10, price: 20 },
    { id: 2, name: 'Item 2', quantity: 15, price: 25 },
    // Add more data as needed
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Report Page
      </Typography>

      <Paper className={classes.tableContainer} elevation={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default ReportPage;
