import React from 'react';
import { Grid, Typography, Divider, makeStyles } from '@material-ui/core';
import image1 from "./image1.png"

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
  },
  imageContainer: {
    maxWidth: '50%', // Adjust the width of the image container
    paddingRight: theme.spacing(2), // Add some right padding for spacing
  },
  image: {
    maxWidth: '100%', // Set the maximum width to 100% to maintain aspect ratio
    height: 'auto', // Allow the height to adjust proportionally
    display: 'block',
    
  },
  divider: {
    height: '100%', // Match the height of the container
    margin: 0, // Remove margin to align with the image and heading
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  headingContainer: {
    maxWidth: '50%', // Adjust the width of the heading container
    paddingLeft: theme.spacing(2),
  },
}));

const GridWithImageAndHeading = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      {/* Left Column with Image */}
      <Grid item xs={10} sm={5}>
        <img
          src={image1}
          alt="Your Image"
          className={classes.image}
        />
      </Grid>
      
      

      {/* Right Column with Heading and Divider */}
      <Grid item xs={12} sm={7}>
        <Typography variant="h5"><b>Website development Tracker</b></Typography>
        
        
       
      </Grid>
    </Grid>
  );
};

export default GridWithImageAndHeading;
