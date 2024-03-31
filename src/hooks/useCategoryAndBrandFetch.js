import { useEffect, useState } from "react";
import { getAllBrandsFetch } from "../services/brand/brandFetch";
import { getAllCategorysFetch } from "../services/category/categoryFetch";

export const useCategoryAndBrandFetch = () => {
  const [allCategorys, setAllCategorys] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [categoryAndBrandloading, setcategoryAndBrandloading] = useState(false);
  const [error, setError] = useState({
    status: false,
    msg: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setcategoryAndBrandloading(true);
        const categorysResponse = await getAllCategorysFetch();
        const brandsResponse = await getAllBrandsFetch();
        setAllCategorys(categorysResponse);
        setAllBrands(brandsResponse);
        setcategoryAndBrandloading(false);
      } catch (error) {
        setcategoryAndBrandloading(false);
        setError({
          status: true,
          msg: error.message,
        });
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return { allCategorys, allBrands, categoryAndBrandloading, error };
};
