import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ErrorNotification from "../components/feedBack/ErrorNotification";
import Progress from "../components/feedBack/Progress";
import CarouselBanners from "../components/homeItems/CarouselBanners";
import HomeCardCategorys from "../components/homeItems/HomeCardCategorys";
import HomeOfferCard from "../components/homeItems/HomeOfferCard";
import { getAllCategorysFetch } from "../services/category/categoryFetch";
import { getAllPostActiveFetch } from "../services/post/getPostFetch";
import { settings } from "../components/homeItems/KeyboardArrowButtons";
import { getAllBrandsFetch } from "../services/brand/brandFetch";

const Home = () => {
  const [categorys, setCategorys] = useState([]);
  const [brands, setBrands] = useState([]);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const responsePost = await getAllPostActiveFetch();
      const responseCategorys = await getAllCategorysFetch();
      const responseBrands = await getAllBrandsFetch();
      setPosts(responsePost);
      setCategorys(responseCategorys);
      setBrands(responseBrands);
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
        <Slider {...settings}>
          {posts.map((post) => (
            <div key={post.post_id}>
              <HomeOfferCard post={post} />
            </div>
          ))}
        </Slider>
      </Box>
      <Box sx={{ mt: "150px", ml: "10%", mr: "10%", mb: "150px" }}>
        <Slider {...settings}>
          {categorys &&
            categorys.map((c) => (
              <HomeCardCategorys
                key={c.category_id}
                category_name={c.category_name}
                category_img={c.category_img}
              />
            ))}
        </Slider>
      </Box>
      <Box sx={{ mt: "150px", ml: "10%", mr: "10%", mb: "150px" }}>
        <Slider {...settings}>
          {brands &&
            brands.map((b) => (
              <HomeCardCategorys
                key={b.brand_id}
                category_name={b.brand_name}
                category_img={b.brand_img}
              />
            ))}
        </Slider>
      </Box>
    </Box>
  );
};
export default Home;
