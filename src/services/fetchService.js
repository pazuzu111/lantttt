import axios from "axios";

export const fetchData = async (lat, long) => {
  let res = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=florist&latitude=${lat}&longitude=${long}&limit=20`,
    {
      headers: {
        Authorization: `Bearer 9YJcYeZhc9qVetVvPVIOmED9tFFeptnsX_KMrT0SXEcjIV4OZpq9vHoScWpJKKe1DRuj2CN9HtLBOJmAcScym6SLhLq0BckJ7OQM0avfziRoFh2nPWVzatvWBKLVXXYx`
      }
    }
  );
  return res.data;
};
