import { useEffect, useState } from "react";
import { getAllBrandsFetch } from "../services/brand/brandFetch";

export const useCategoryAndBrandFetch = () => {
  const [categorys, setCategorys] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    status: false,
    msg: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categorysResponse = await getAllCategorysFetch();
        const brandsResponse = await getAllBrandsFetch();
        setCategorys(categorysResponse);
        setBrands(brandsResponse);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError({
          status: true,
          msg: error.message,
        });
        console.log(error);
      }
      fetchData();
    };
  }, []);
  return { categorys, brands, loading, error };
};
