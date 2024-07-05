import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

const Listing = () => {
  SwiperCore.use([Navigation]);
  const listingId = useParams().listingId;
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchListingData = async () => {
    try {
      setError(false);
      const res = await fetch(`/api/listing/getListing/${listingId}`);
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setListing(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchListingData();
  }, [useParams().listingId]);
  return (
    <main>
      {loading && <p className="text-center my-7 text-3xl">Loading...</p>}
      {error && (
        <div className="text-center">
          <p className="my-7 text-3xl text-red-700">Something went wrong!</p>
          <Link to="/" className="my-7 text-3xl">
            Go back
          </Link>
        </div>
      )}
      {listing && !loading && !error && (
        <Swiper navigation>
          {listing.imageUrls.map((url) => (
            <SwiperSlide key={url}>
              <div
                className="h-[550px]"
                style={{
                  background: `url(${url}) center no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </main>
  );
};

export default Listing;
