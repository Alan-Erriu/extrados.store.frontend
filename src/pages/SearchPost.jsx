import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HomeOfferCard from "../components/homeItems/HomeOfferCard";
import FiltersSearch from "../components/searchPostItems/FiltersSearch";
import { setBrands } from "../redux/brandSlice";
import { setCategorys } from "../redux/categorySlice";
import { searchPostFetch } from "../services/post/searchPost";

const SearchPost = () => {
  const { postName } = useParams();
  const dispatch = useDispatch();
  const categorys = useSelector((state) => state.categoryState.categorys);
  const brands = useSelector((state) => state.brandState.brands);
  const [categoryState, setCategoryState] = useState("");
  const [brandState, setBrandState] = useState("");
  const [posts, setPosts] = useState([]);
  //para el endpoint necesito que los valores enten en 0 y los formularios no aceptan 0 en los values(por eso las ternarias)
  const data = {
    postName: postName,
    postCategoryId: categoryState === "" ? 0 : categoryState,
    postBrandId: brandState === "" ? 0 : brandState,
  };

  useEffect(() => {
    dispatch(setCategorys());
    dispatch(setBrands());
  }, []);

  useEffect(() => {
    const getPostByName = async () => {
      try {
        const postsResponse = await searchPostFetch(data);
        setPosts(postsResponse);
      } catch (error) {
        console.log(error);
      }
    };
    getPostByName();
  }, [postName, categoryState, brandState]);

  return (
    <Box sx={{ display: "flex", mt: "50px", ml: "10%", mr: "10%" }}>
      <Box>
        <FiltersSearch
          props={{
            setCategoryState,
            setBrandState,
            categorys,
            brands,
            categoryState,
            brandState,
          }}
        />
      </Box>
      <Grid container spacing={2}>
        {posts &&
          posts.map((post) => (
            <Grid key={post.post_id} item xs={3}>
              <HomeOfferCard post={post} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default SearchPost;
