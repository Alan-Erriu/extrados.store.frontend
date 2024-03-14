import { Box } from "@mui/material";
import PostDetailImage from "../components/postDetailsItems/PostDetailImage";
import { PostDetailsAction } from "../components/postDetailsItems/PostDetailsAction";
import PostDetailDescription from "../components/postDetailsItems/PostDetailDescription";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getPostByIdFetch } from "../services/postDetail/postDetail";
import { getTokensFetch } from "../services/refreshToken/getTokensFetch";
const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    post_name: "",
    post_description: "",
    post_price: null,
    post_stock: null,
    category_id: null,
    brand_id: null,
    post_img: "",
    statusFetch: "",
  });
  const getPostById = async () => {
    try {
      const postFromBack = await getPostByIdFetch(id);
      console.log(postFromBack);
      return postFromBack;
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   const postResponse = getPostById();
  //   setPost(postResponse);
  //   console.log(post);
  // }, []);

  return (
    <Box sx={{ width: "60%", ml: "20%", mr: "20%", mt: "50px" }}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "white",
        }}
      >
        <PostDetailImage />

        <PostDetailsAction />
      </Box>
      <Box sx={{ display: "flex", backgroundColor: "white", width: "100%" }}>
        <PostDetailDescription />
      </Box>
      {/* <Box sx={{ width: "100%", mt: 15 }}>
        <Typography sx={{ mb: "10px" }}>Productos relacionados</Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <HomeOfferCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>
          <Grid item xs={3}>
            <HomeOfferCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>

          <Grid item xs={3}>
            <HomeOfferCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>
          <Grid item xs={3}>
            <HomeOfferCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  );
};

export default PostDetail;
