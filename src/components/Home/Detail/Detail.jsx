import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { MapIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/solid";

const Detail = () => {
  const { id } = useParams();

  const { data, loading, error, foods, categories, drinks, reviews } = useFetch(
    "https://restaurant-api.dicoding.dev/detail/" + id
  );

  return (
    <>
      <div className="py-5 space-y-5">
        <hr className="h-0.5 bg-black" />
        <h1 className="text-4xl font-semibold text-black">Detail Restoran</h1>
        {loading && <h2 className="text-2xl font-semibold">Loading...</h2>}
        {error && (
          <h2 className="text-2xl font-semibold text-red-500">
            Error when get Data
          </h2>
        )}
        {data && (
          <div className="space-y-5 py-5">
            <h2 className="text-3xl text-black font-semibold">{data.name}</h2>
            <div className="flex space-x-1">
                <StarIcon className="h-8 text-[#002b56]" />
                <h3 className="text-2xl">{data.rating} / 5</h3>
              </div>
            <div className="md:flex md:justify-between space-y-5 md:space-y-0">
              <div className="flex space-x-1">
                <MapIcon className="h-6 my-auto" />
                <p className="font-medium">{data.address}</p>
              </div>
              <div className="flex space-x-1">
                <MapPinIcon className="h-6 my-auto" />
                <p className="font-medium">{data.city}</p>
              </div>
            </div>
            <p>Kategori :</p>
            {categories.map((kategori, index) => (
                <ul key={index} className="list-disc list-inside">
                <li className="text-sm">{kategori.name}</li>
                </ul>
            ))}
            <img src={`https://restaurant-api.dicoding.dev/images/large/${data.pictureId}`} alt={`Picture ID: ${data.pictureId}`} className="rounded w-full md:h-96 md:object-cover"/>
            <p>{data.description}</p> 
            <h4 className="text-xl text-black font-semibold">Menu makanan yang tersedia : </h4>
            {foods.map((food, index) => (
                <ul key={index} className="list-disc list-inside">
                    <li>{food.name}</li>
                </ul>
            ))}
            <h4 className="text-xl text-black font-semibold">Menu minuman yang tersedia : </h4>
            {drinks.map((drink, index) => (
                <ul key={index} className="list-disc list-inside">
                    <li>{drink.name}</li>
                </ul>
            ))}
            <hr className="h-0.5 bg-black"/>
            <h4 className="text-xl text-black font-semibold">Review : </h4>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {reviews.map((review, index) => (
                <div key={index} className="border border-black p-5 rounded space-y-5">
                    <h5 className="text-lg font-medium">{review.name}</h5>
                    <p className="italic">{review.review}</p>
                    <p className="text-sm font-light">{review.date}</p>
                </div>
            ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
