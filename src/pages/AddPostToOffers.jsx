import React, { useEffect, useState } from "react";
import { getAllPostActiveFetch } from "../services/post/getPostFetch";
import { Box } from "@mui/material";
import HomeOfferCard from "../components/homeItems/HomeOfferCard";
import AddToOffersCard from "../components/addPostToOffersItems/AddToOffersCard";

const AddPostToOffers = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const responsePost = await getAllPostActiveFetch();
      setPosts(responsePost);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Box sx={{ mt: "50px", ml: "10%", mr: "10%" }}>
        {posts.map((post) => (
          <div key={post.post_id}>
            <AddToOffersCard post={post} />
          </div>
        ))}
      </Box>
    </Box>
  );
};
export default AddPostToOffers;
