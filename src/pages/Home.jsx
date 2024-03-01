import { Box, Grid } from "@mui/material";
import HomeOfferCard from "../components/homeItems/HomeOfferCard";
import CarouselBanners from "../components/homeItems/CarouselBanners";
import imgPath from "../utils/Data";
import HomeCardCategorys from "../components/homeItems/HomeCardCategorys";
import Progress from "../components/feedBack/Progress";
import { UseFetchData } from "../services/home/homeFetch";
const Home = () => {
  const { offerPost, category, loading } = UseFetchData();
  console.log(category);
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
          {offerPost.map((p) => (
            <Grid key={p.post_id} item xs={3}>
              <HomeOfferCard
                name={p.post_name}
                price={p.post_price}
                img={p.post_img}
              />
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
