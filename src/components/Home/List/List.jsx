import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import Select from "react-select";

const List = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [visible, setVisible] = useState(4);

  const { restaurants, loading } = useFetch(
    "https://restaurant-api.dicoding.dev/list"
  );

  const cityOptions = [...new Set(restaurants.map((item) => item.city))].map(
    (city) => ({ value: city, label: city })
  );
  const ratingOptions = [
    ...new Set(restaurants.map((item) => item.rating)),
  ].map((rating) => ({ value: rating, label: rating }));

  const filteredData = restaurants.filter(
    (item) =>
      (selectedCity ? item.city === selectedCity.value : true) &&
      (selectedRating ? item.rating === selectedRating.value : true)
  );

  const clearAll = () => {
    setSelectedCity(null);
    setSelectedRating(null);
  };

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <>
      <div className="py-5 space-y-5">
        <hr className="h-0.5 bg-black" />
        <div className="space-y-5 md:space-x-5 md:flex md:justify-between md:space-y-0">
          <div className="flex space-x-5">
            <h3 className="my-auto">Filter By :</h3>
            <Select
              options={cityOptions}
              onChange={setSelectedCity}
              placeholder="Select City"
            />
            <Select
              options={ratingOptions}
              onChange={setSelectedRating}
              placeholder="Select Rating"
            />
          </div>
          <button
            className="md:w-1/5 w-full md:py-0.5 border-2 border-black rounded bg-transparent text-black hover:bg-black hover:text-white hover:transition-all hover:duration-300 font-medium py-2 uppercase"
            onClick={clearAll}
          >
            Clear All
          </button>
        </div>
        <hr className="h-0.5 bg-black" />
        <h3 className="text-3xl font-semibold">All Restaurants</h3>
        {loading && <h2 className="text-2xl font-semibold">Loading...</h2>}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3">
          {filteredData.slice(0, visible).map((item) => (
            <div className="space-y-3" key={item.key}>
              <img
                src={`https://restaurant-api.dicoding.dev/images/small/${item.pictureId}`}
                alt={`Picture ID: ${item.pictureId}`}
                className="object-cover w-full h-40 rounded"
              />
              <h5 className="text-xl">{item.name}</h5>
              <div className="flex space-x-1">
                <StarIcon className="h-4 text-[#002b56]" />
                <p className="text-xs">{item.rating} / 5</p>
              </div>
              <p className="text-sm">{item.city}</p>
              <div>
                <Link to={"/detail/" + item.id}>
                  <button className="w-full py-2 text-white bg-[#002b56] uppercase rounded border-2 border-transparent hover:bg-white hover:border-[#002b56] hover:text-[#002b56] hover:transition-all hover:duration-300 font-medium">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pt-5 md:pt-10">
          <button className="w-full py-2 font-medium text-black uppercase bg-transparent border-2 border-black rounded md:w-1/4 hover:bg-black hover:text-white hover:transition-all hover:duration-300" onClick={loadMore}>
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
