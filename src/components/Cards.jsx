import React, { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";

const Cards = (props) => {
  const { startTime, endTime } = props;
  const startTimeString = new Date(startTime);
  const endTimeString = new Date(endTime);
  return (
    <Box>
      <Card variant="outlined" sx={{ maxWidth: 350, margin: 2 }}>
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
            }}
          >
            {startTimeString.toLocaleString()}
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
            }}
          >
            {props.startLocation}
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
            }}
          >
            {props.bikeName}
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
            }}
          >
            {endTimeString.toLocaleString()}
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
            }}
          >
            {props.endLocation}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Cards;
