import { Box, Grid } from "@mui/material";
import HomeCard from "../components/HomeCard";
import { useEffect, useState } from "react";
import apiClient from "../utils/ApiClient";
import CarouselBanners from "../components/CarouselBanners";
import imgPath from "../utils/Data";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  let p = {
    post_name: "zapatillas nike",
    post_price: "30000.99",
    post_img: imgPath,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Solicitud de datos del usuario logueado
        const response = await apiClient.get("PostSearch/getall");
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.warn("Error", error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <Box>
      <CarouselBanners />
      <Box sx={{ mt: "50px", ml: "10%", mr: "10%" }}>
        <Grid container spacing={2}>
          {/* {products.map((p) => (
          <Grid key={p.post_id} item xs={3}>
            <HomeCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>
        ))} */}
          <Grid item xs={3}>
            <HomeCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>
          <Grid item xs={3}>
            <HomeCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>
          <Grid item xs={3}>
            <HomeCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>
          <Grid item xs={3}>
            <HomeCard
              name={p.post_name}
              price={p.post_price}
              img={p.post_img}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
