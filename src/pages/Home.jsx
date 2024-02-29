import { Box, Grid } from "@mui/material";
import HomeOfferCard from "../components/homeItems/HomeOfferCard";
import { useEffect, useState } from "react";
import apiClient from "../utils/ApiClient";
import CarouselBanners from "../components/homeItems/CarouselBanners";
import imgPath from "../utils/Data";
import HomeCardCategorys from "../components/homeItems/HomeCardCategorys";
import Progress from "../components/feedBack/Progress";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  let p = {
    post_name: "zapatillas nike",
    post_price: "30000.99",
    post_img: imgPath,
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       Solicitud de datos del usuario logueado
  //       const response = await apiClient.get("PostSearch/getall");
  //       setProducts(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.warn("Error", error.message);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  if (!isLoading) {
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
          {/* {products.map((p) => (
          <Grid key={p.post_id} item xs={3}>
            <HomeOfferCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>
        ))} */}
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
      </Box>
      <Box sx={{ mt: "150px", ml: "10%", mr: "10%", mb: "150px" }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <HomeCardCategorys />
          </Grid>
          <Grid item xs={3}>
            <HomeCardCategorys />
          </Grid>
          <Grid item xs={3}>
            <HomeCardCategorys />
          </Grid>
          <Grid item xs={3}>
            <HomeCardCategorys />
          </Grid>
          <Grid item xs={3}>
            <HomeCardCategorys />
          </Grid>
          <Grid item xs={3}>
            <HomeCardCategorys />
          </Grid>
          <Grid item xs={3}>
            <HomeCardCategorys />
          </Grid>
          <Grid item xs={3}>
            <HomeCardCategorys />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
