import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddToOffersCard from "../components/addPostToOffersItems/AddToOffersCard";
import { getAllPostByUserId } from "../services/post/getAllPostByUserId";
import { getAllOfferByUserId } from "../services/offer/getAllOfferByUserId";
import SuccessNotification from "../components/feedBack/SuccessNotification";
import Progress from "../components/feedBack/Progress";
const AddPostToOffers = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [eventListenerAddToOffer, setEventListenerAddToOffer] = useState(false);
  const [addPostToOfferStatus, setAddPostToOfferStatus] = useState({
    msg: "",
    status: false,
  });
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState([]);

  const getAndSetPosts = async () => {
    try {
      setLoading(true);
      const responsePost = await getAllPostByUserId();
      const postWithNoOffer = responsePost.filter(
        (p) => p.offer_status === false
      );
      setPosts(postWithNoOffer);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };
  const getAllOfferAndSetByUserId = async () => {
    try {
      const responseOffer = await getAllOfferByUserId();
      setOffers(responseOffer);
      console.log(responseOffer);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuccesNotification = () => {
    setAddPostToOfferStatus({
      msg: "",
      status: false,
    });
    return false;
  };
  useEffect(() => {
    getAndSetPosts();
  }, [eventListenerAddToOffer]);

  useEffect(() => {
    getAllOfferAndSetByUserId();
  }, []);
  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Progress />
      </Box>
    );
  return (
    <Box>
      {addPostToOfferStatus.status ? (
        <SuccessNotification
          handleClose={handleSuccesNotification}
          message={addPostToOfferStatus.msg}
        />
      ) : null}
      <Box sx={{ mt: "50px", ml: "10%", mr: "10%" }}>
        {posts.map((post) => (
          <Box key={post.post_id}>
            <AddToOffersCard
              props={{
                post,
                offers,
                setAddPostToOfferStatus,
                setEventListenerAddToOffer,
                eventListenerAddToOffer,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default AddPostToOffers;
