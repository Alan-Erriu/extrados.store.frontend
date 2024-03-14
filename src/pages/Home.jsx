import { Box, Grid } from "@mui/material";
import HomeOfferCard from "../components/homeItems/HomeOfferCard";
import CarouselBanners from "../components/homeItems/CarouselBanners";
import HomeCardCategorys from "../components/homeItems/HomeCardCategorys";
import Progress from "../components/feedBack/Progress";
import { useEffect, useState } from "react";
import { getAllPostActiveFetch } from "../services/home/homeFetch";
import { getAllCategorysFetch } from "../services/category/categoryFetch";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [posts, setPost] = useState([]);

  const getCategorys = async () => {
    const categorysFromBack = await getAllCategorysFetch();
    setCategory(categorysFromBack);
  };
  const getPostAllPostActive = async () => {
    const postActiveFromBack = await getAllPostActiveFetch();
    setPost(postActiveFromBack);
  };
  const fetchData = async () => {
    try {
      await getCategorys();
      await getPostAllPostActive();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
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
  }

  return (
    <Box>
      <CarouselBanners />
      <Box sx={{ mt: "50px", ml: "10%", mr: "10%" }}>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid key={post.post_id} item xs={3}>
              <HomeOfferCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mt: "150px", ml: "10%", mr: "10%", mb: "150px" }}>
        <Grid container spacing={2}>
          {category.map((c) => (
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
