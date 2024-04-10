import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import RelatedPostCard from "./RelatedPostCard";

const RelatedPosts = ({ relatedPost }) => {
  return (
    <Box sx={{ width: "100%", mt: 15 }}>
      <Typography sx={{ mb: "10px" }}>Productos relacionados</Typography>
      <Grid container spacing={2} justifyContent="space-between">
        {relatedPost &&
          relatedPost.map((post) => (
            <Grid key={post.post_id} item xs={12} sm={6} md={4} lg={3}>
              <RelatedPostCard post={post} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default RelatedPosts;
