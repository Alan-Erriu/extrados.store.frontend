import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FiltersSearch from "../components/searchPostItems/FiltersSearch";
import PostSearchCard from "../components/searchPostItems/PostSearchCard";
import { useCategoryAndBrandFetch } from "../hooks/useCategoryAndBrandFetch";
import { searchPostFetch } from "../services/post/searchPost";

const SearchPost = () => {
  const { postName } = useParams();
  const [categoryState, setCategoryState] = useState("");
  const [brandState, setBrandState] = useState("");
  const [postLoading, setPostLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [categorysFiltered, setCategorysFiltered] = useState([]);
  const [brandsFiltered, setBrandsFiltered] = useState([]);

  const { allCategorys, allBrands, categoryAndBrandloading, error } =
    useCategoryAndBrandFetch();

  useEffect(() => {
    const getPostByName = async () => {
      const data = {
        postName: postName,
        postCategoryId: categoryState === "" ? 0 : categoryState,
        postBrandId: brandState === "" ? 0 : brandState,
      };
      try {
        const postsResponse = await searchPostFetch(data);
        setPosts(postsResponse);
        setPostLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPostByName();
  }, [postName, categoryState, brandState]);

  useEffect(() => {
    if (!postLoading) {
      const uniqueCategorys = [
        ...new Set(posts.map((post) => post.category_name)),
      ];
      const categorysRelatedToPost = allCategorys.filter((category) =>
        uniqueCategorys.includes(category.category_name)
      );
      const uniqueBrands = [...new Set(posts.map((post) => post.brand_name))];
      const brandRelatedToPost = allBrands.filter((brand) =>
        uniqueBrands.includes(brand.brand_name)
      );
      setCategorysFiltered(categorysRelatedToPost);
      setBrandsFiltered(brandRelatedToPost);
    }
  }, [postLoading]);

  return (
    <Box sx={{ display: "flex", mt: "50px", ml: "10%", mr: "10%" }}>
      <Box>
        <FiltersSearch
          props={{
            setCategoryState,
            setBrandState,
            brandsFiltered,
            categorysFiltered,
            categoryState,
            brandState,
          }}
        />
      </Box>
      <Grid container spacing={10}>
        {posts &&
          posts.map((post) => (
            <Grid key={post.post_id} item xs={4}>
              <PostSearchCard post={post} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default SearchPost;
