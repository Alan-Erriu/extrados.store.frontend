import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Progress from "../components/feedBack/Progress";
import FiltersSearch from "../components/searchPostItems/FiltersSearch";
import PostSearchCard from "../components/searchPostItems/PostSearchCard";
import { getAllBrandsFetch } from "../services/brand/brandFetch";
import { getAllCategorysFetch } from "../services/category/categoryFetch";
import { searchPostFetch } from "../services/post/searchPost";

const SearchPost = () => {
  const { postName } = useParams();
  const [categoryIdSelected, setCategoryIdSelected] = useState("");
  const [brandIdSelected, setBrandIdSelected] = useState("");
  const [posts, setPosts] = useState([]);
  const [categorysFiltered, setCategorysFiltered] = useState([]);
  const [brandsFiltered, setBrandsFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getPostByName = async () => {
      const data = {
        postName: postName,
        postCategoryId: categoryIdSelected === "" ? 0 : categoryIdSelected,
        postBrandId: brandIdSelected === "" ? 0 : brandIdSelected,
      };
      try {
        const postsResponse = await searchPostFetch(data);
        setPosts(postsResponse);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPostByName();
  }, [postName, brandIdSelected, categoryIdSelected]);

  useEffect(() => {
    setBrandIdSelected(0);
    setCategoryIdSelected(0);
  }, [postName]);

  useEffect(() => {
    const data = {
      postName: postName,
    };
    const getCategorysAndBrands = async () => {
      const postsResponse = await searchPostFetch(data);
      const categorysResponse = await getAllCategorysFetch();
      const brandsResponse = await getAllBrandsFetch();
      const uniqueCategorysName = [
        ...new Set(postsResponse.map((post) => post.category_name)),
      ];

      const categorysRelatedToPost = categorysResponse.filter((category) =>
        uniqueCategorysName.includes(category.category_name)
      );

      const uniqueBrandsName = [
        ...new Set(postsResponse.map((post) => post.brand_name)),
      ];
      const brandRelatedToPost = brandsResponse.filter((brand) =>
        uniqueBrandsName.includes(brand.brand_name)
      );
      setCategorysFiltered(categorysRelatedToPost);
      setBrandsFiltered(brandRelatedToPost);
    };
    getCategorysAndBrands();
  }, [postName]);

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
    <Box sx={{ display: "flex", mt: "50px", ml: "10%", mr: "10%" }}>
      <Box>
        <FiltersSearch
          props={{
            setCategoryIdSelected,
            brandsFiltered,
            categorysFiltered,
            setBrandIdSelected,
            categoryIdSelected,
            brandIdSelected,
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
