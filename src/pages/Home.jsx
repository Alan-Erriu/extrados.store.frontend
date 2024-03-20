import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Progress from "../components/feedBack/Progress";
import CarouselBanners from "../components/homeItems/CarouselBanners";
import HomeCardCategorys from "../components/homeItems/HomeCardCategorys";
import HomeOfferCard from "../components/homeItems/HomeOfferCard";
import { getAllCategorysFetch } from "../services/category/categoryFetch";
import { getAllPostActiveFetch } from "../services/post/getPostFetch";
import ErrorNotification from "../components/feedBack/ErrorNotification";

const Home = () => {
  const [categorys, setCategorys] = useState([]);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const responsePost = await getAllPostActiveFetch();
      const responseCategorys = await getAllCategorysFetch();
      setPosts(responsePost);
      setCategorys(responseCategorys);
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
  if (error) {
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
        <ErrorNotification message={"intente mas tarde"} />
      </Box>
    );
  }
  return (
    <Box>
      <CarouselBanners />
      <Box sx={{ mt: "50px", ml: "10%", mr: "10%" }}>
        <Grid container spacing={2}>
          {posts &&
            posts.map((post) => (
              <Grid key={post.post_id} item xs={3}>
                <HomeOfferCard post={post} />
              </Grid>
            ))}
        </Grid>
      </Box>
      <Box sx={{ mt: "150px", ml: "10%", mr: "10%", mb: "150px" }}>
        <Grid container spacing={2}>
          {categorys &&
            categorys.map((c) => (
              <Grid key={c.category_id} item xs={3}>
                <HomeCardCategorys category_name={c.category_name} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default Home;
