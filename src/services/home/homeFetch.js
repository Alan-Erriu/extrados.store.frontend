import { useEffect, useState } from "react";
import apiClient from "../ApiClient";

export const UseFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [offerPost, setOfferPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await apiClient.get("PostSearch/getall");
        const categoryResponse = await apiClient.get("/Category/getcategorys");
        setOfferPost(postResponse.data);
        setCategory(categoryResponse.data);
      } catch (error) {
        console.log("Error", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { offerPost, category, loading };
};
