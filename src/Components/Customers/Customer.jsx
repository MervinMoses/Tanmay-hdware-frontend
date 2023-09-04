import React from "react";
import { CardActionArea, Grid } from "@mui/material";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const Customer = () => {
  return (
    <>
      <div class="wrapper d-flex flex-column min-vh-100 bg-light">
        <header class="header header-sticky mb-4">
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea style={{ backgroundColor: "Red" }}>
                  <CardContent>
                    <CardActions>
                      <NavLink to="/productgroup">
                        <Typography
                          variant="h3"
                          component="div"
                          color="text.secondary"
                        >
                          <p>Sales</p>
                        </Typography>
                      </NavLink>
                    </CardActions>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 800 }}>
                <CardActionArea style={{ backgroundColor: "Yellow" }}>
                  <CardContent>
                    <CardActions>
                      <NavLink to="/itemlist">
                        <Typography
                          variant="h3"
                          component="div"
                          color="text.secondary"
                        >
                          <p>invoice</p>
                        </Typography>
                      </NavLink>
                    </CardActions>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 800 }}>
                <CardActionArea style={{ backgroundColor: "Yellow" }}>
                  <CardContent>
                    <CardActions>
                      <NavLink to="/itemlist">
                        <Typography
                          variant="h3"
                          component="div"
                          color="text.secondary"
                        >
                          <p>Sales returns</p>
                        </Typography>
                      </NavLink>
                    </CardActions>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 800 }}>
                <CardActionArea style={{ backgroundColor: "Yellow" }}>
                  <CardContent>
                    <CardActions>
                      <NavLink to="/itemlist">
                        <Typography
                          variant="h3"
                          component="div"
                          color="text.secondary"
                        >
                          <p>Credit note</p>
                        </Typography>
                      </NavLink>
                    </CardActions>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 800 }}>
                <CardActionArea style={{ backgroundColor: "Blue" }}>
                  <CardContent>
                    <CardActions>
                      <NavLink to="/itemlist">
                        <Typography
                          variant="h3"
                          component="div"
                          color="text.secondary"
                        >
                          <p>Manage Customer</p>
                        </Typography>
                      </NavLink>
                    </CardActions>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 800 }}>
                <CardActionArea style={{ backgroundColor: "Green" }}>
                  <CardContent>
                    <CardActions>
                      <NavLink to="/mange_product">
                        <Typography
                          variant="h3"
                          component="div"
                          color="text.secondary"
                        >
                          <p>Payment Received</p>
                        </Typography>
                      </NavLink>
                    </CardActions>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </header>
      </div>
    </>
  );
};
