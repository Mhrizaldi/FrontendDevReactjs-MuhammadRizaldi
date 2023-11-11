import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [restaurants, setRestaurants] = useState([]);
  const [data, setData] = useState([]);
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setRestaurants(response.data.restaurants);
        setData(response.data.restaurant);
        setFoods(response.data.restaurant.menus.foods);
        setDrinks(response.data.restaurant.menus.drinks);
        setCategories(response.data.restaurant.categories);
        setReviews(response.data.restaurant.customerReviews);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
        setError(true);
        setLoading(false);
      });
  }, [url]);

  return { restaurants, loading, error, data, foods, categories, drinks, reviews };
};

export default useFetch;
