import React, { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';


const Cards = (props) => {
  return (
    <Box>
      <Card variant="outlined" sx={{ maxWidth: 350,  margin: 2 }}>
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginBottom: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Start Time
          </Typography>
          <Typography
          sx={{
            marginBottom: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          {props.starttime}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginBottom: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Start Location
          </Typography>
          <Typography
          sx={{
            marginBottom: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          {props.startlocation}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginBottom: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Bike Name
          </Typography>
          <Typography
          sx={{
            marginBottom: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          {props.bikename}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginBottom: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            End Time
          </Typography>
          <Typography
          sx={{
            marginBottom: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          {props.endtime}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginBottom: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            End Location
          </Typography>
          <Typography
          sx={{
            marginBottom: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          {props.endlocation}
          </Typography>
        </CardContent>
      </Card>
      </Box>

  );
};

export default Cards;
