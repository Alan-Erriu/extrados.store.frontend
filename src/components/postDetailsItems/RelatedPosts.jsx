import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import HomeOfferCard from "../homeItems/HomeOfferCard";

const RelatedPosts = ({ relatedPost }) => {
  return (
    <Box sx={{ width: "100%", mt: 15 }}>
      <Typography sx={{ mb: "10px" }}>Productos relacionados</Typography>
      <Grid container spacing={2}>
        {relatedPost &&
          relatedPost.map((post) => (
            <Grid key={post.post_id} item xs={3}>
              <HomeOfferCard post={post} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default RelatedPosts;
