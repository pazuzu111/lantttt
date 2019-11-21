import reducers from "./reducers/reducers";
import { fetchFlorists } from "./sagas/sagas";
import { GET_FLORISTS } from "./actions/actions";
import { call } from "redux-saga/effects";
import sagaHelper from "redux-saga-testing";

const api = jest.fn();

const florists = {
  businesses: [
    {
      id: "pAznGNkdWy8ibVN4KW5Vew",
      alias: "the-rose-garden-park-slope",
      name: "The Rose Garden",
      image_url:
        "https://s3-media2.fl.yelpcdn.com/bphoto/2V1U2RACGjJEZzuGl_JdBg/o.jpg",
      is_closed: false,
      url:
        "https://www.yelp.com/biz/the-rose-garden-park-slope?adjust_creative=CqXLv5L9XAs27YZfdb32yQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CqXLv5L9XAs27YZfdb32yQ",
      review_count: 81,
      categories: [
        {
          alias: "florists",
          title: "Florists"
        }
      ],
      rating: 5,
      coordinates: {
        latitude: 40.6665496826172,
        longitude: -73.9822006225586
      },
      transactions: [],
      price: "$",
      location: {
        address1: "346 7th Ave",
        address2: "",
        address3: "",
        city: "Park Slope",
        zip_code: "11215",
        country: "US",
        state: "NY",
        display_address: ["346 7th Ave", "Park Slope, NY 11215"]
      },
      phone: "+16462707587",
      display_phone: "(646) 270-7587",
      distance: 4445.018681029241
    },
    {
      id: "37PdB4YzRjLFTnKzVg7Unw",
      alias: "city-blossoms-manhattan",
      name: "City Blossoms",
      image_url:
        "https://s3-media1.fl.yelpcdn.com/bphoto/unBp7qYBi4TIyIK2qT-jIg/o.jpg",
      is_closed: false,
      url:
        "https://www.yelp.com/biz/city-blossoms-manhattan?adjust_creative=CqXLv5L9XAs27YZfdb32yQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CqXLv5L9XAs27YZfdb32yQ",
      review_count: 41,
      categories: [
        {
          alias: "florists",
          title: "Florists"
        }
      ],
      rating: 4.5,
      coordinates: {
        latitude: 40.7081333,
        longitude: -74.0127371
      },
      transactions: [],
      price: "$$",
      location: {
        address1: "62 Trinity Pl",
        address2: "",
        address3: "",
        city: "Manhattan",
        zip_code: "10006",
        country: "US",
        state: "NY",
        display_address: ["62 Trinity Pl", "Manhattan, NY 10006"]
      },
      phone: "+12123460756",
      display_phone: "(212) 346-0756",
      distance: 1583.1522137779664
    },
    {
      id: "BfAZByGFmRXsxTw9U_h7dA",
      alias: "sunnys-florist-new-york",
      name: "Sunny's Florist",
      image_url:
        "https://s3-media4.fl.yelpcdn.com/bphoto/hR-thtwFjQJGZ4vHFKwb9g/o.jpg",
      is_closed: false,
      url:
        "https://www.yelp.com/biz/sunnys-florist-new-york?adjust_creative=CqXLv5L9XAs27YZfdb32yQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CqXLv5L9XAs27YZfdb32yQ",
      review_count: 163,
      categories: [
        {
          alias: "florists",
          title: "Florists"
        }
      ],
      rating: 4.5,
      coordinates: {
        latitude: 40.7274213786319,
        longitude: -73.9885854721069
      },
      transactions: [],
      price: "$$",
      location: {
        address1: "102 2nd Ave",
        address2: "",
        address3: "",
        city: "New York",
        zip_code: "10003",
        country: "US",
        state: "NY",
        display_address: ["102 2nd Ave", "New York, NY 10003"]
      },
      phone: "+12124730185",
      display_phone: "(212) 473-0185",
      distance: 2490.5722034620735
    },
    {
      id: "5ToSohJi-0RkfEf1Bsw5Kw",
      alias: "blue-meadow-flowers-new-york",
      name: "Blue Meadow Flowers",
      image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/RPmK89R1xQWu9Z5CR2uyvQ/o.jpg",
      is_closed: false,
      url:
        "https://www.yelp.com/biz/blue-meadow-flowers-new-york?adjust_creative=CqXLv5L9XAs27YZfdb32yQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CqXLv5L9XAs27YZfdb32yQ",
      review_count: 10,
      categories: [
        {
          alias: "florists",
          title: "Florists"
        },
        {
          alias: "landscaping",
          title: "Landscaping"
        },
        {
          alias: "eventservices",
          title: "Event Planning & Services"
        }
      ],
      rating: 5,
      coordinates: {
        latitude: 40.7310556,
        longitude: -73.9843779
      },
      transactions: [],
      price: "$$",
      location: {
        address1: "336 E 13th St",
        address2: "",
        address3: "",
        city: "New York",
        zip_code: "10003",
        country: "US",
        state: "NY",
        display_address: ["336 E 13th St", "New York, NY 10003"]
      },
      phone: "+12129798618",
      display_phone: "(212) 979-8618",
      distance: 2969.127049726904
    },
    {
      id: "hSh10rYOdUDGljcunqRH5A",
      alias: "seaport-flowers-brooklyn",
      name: "Seaport Flowers",
      image_url:
        "https://s3-media4.fl.yelpcdn.com/bphoto/g6pOCSlJzQoJpzmdB-onTw/o.jpg",
      is_closed: false,
      url:
        "https://www.yelp.com/biz/seaport-flowers-brooklyn?adjust_creative=CqXLv5L9XAs27YZfdb32yQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CqXLv5L9XAs27YZfdb32yQ",
      review_count: 30,
      categories: [
        {
          alias: "florists",
          title: "Florists"
        }
      ],
      rating: 5,
      coordinates: {
        latitude: 40.6911,
        longitude: -73.99594
      },
      transactions: [],
      price: "$$$",
      location: {
        address1: "309 Henry St",
        address2: "",
        address3: "",
        city: "Brooklyn",
        zip_code: "11201",
        country: "US",
        state: "NY",
        display_address: ["309 Henry St", "Brooklyn, NY 11201"]
      },
      phone: "+17188586443",
      display_phone: "(718) 858-6443",
      distance: 1604.519412804324
    },
    {
      id: "u-65kuBSgK4z4huHXD7tbg",
      alias: "confucius-florist-new-york",
      name: "Confucius Florist",
      image_url:
        "https://s3-media2.fl.yelpcdn.com/bphoto/Yo25b6R5sTPGZeFmEhO8gQ/o.jpg",
      is_closed: false,
      url:
        "https://www.yelp.com/biz/confucius-florist-new-york?adjust_creative=CqXLv5L9XAs27YZfdb32yQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CqXLv5L9XAs27YZfdb32yQ",
      review_count: 47,
      categories: [
        {
          alias: "florists",
          title: "Florists"
        },
        {
          alias: "floraldesigners",
          title: "Floral Designers"
        },
        {
          alias: "bridal",
          title: "Bridal"
        }
      ],
      rating: 4.5,
      coordinates: {
        latitude: 40.71474,
        longitude: -73.99673
      },
      transactions: [],
      price: "$",
      location: {
        address1: "21 Bowery",
        address2: "",
        address3: "",
        city: "New York",
        zip_code: "10002",
        country: "US",
        state: "NY",
        display_address: ["21 Bowery", "New York, NY 10002"]
      },
      phone: "+12124317570",
      display_phone: "(212) 431-7570",
      distance: 1053.208961892962
    },
    {
      id: "N6B8ezFjFtwRH9oLUFXw0Q",
      alias: "starbright-floral-design-new-york-6",
      name: "Starbright Floral Design",
      image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/V5UoTAF45AS8gHJJiIlylw/o.jpg",
      is_closed: false,
      url:
        "https://www.yelp.com/biz/starbright-floral-design-new-york-6?adjust_creative=CqXLv5L9XAs27YZfdb32yQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CqXLv5L9XAs27YZfdb32yQ",
      review_count: 317,
      categories: [
        {
          alias: "florists",
          title: "Florists"
        }
      ],
      rating: 4.5,
      coordinates: {
        latitude: 40.745578402455,
        longitude: -73.9929614748688
      },
      transactions: [],
      price: "$$",
      location: {
        address1: "140 W 26th St",
        address2: "",
        address3: "Ground Fl",
        city: "New York",
        zip_code: "10001",
        country: "US",
        state: "NY",
        display_address: ["140 W 26th St", "Ground Fl", "New York, NY 10001"]
      },
      phone: "+12122291610",
      display_phone: "(212) 229-1610",
      distance: 4464.05169790991
    },
    {
      id: "8dN598j05Y6ekkjlok1HgQ",
      alias: "james-weir-floral-company-brooklyn-2",
      name: "James Weir Floral Company",
      image_url:
        "https://s3-media1.fl.yelpcdn.com/bphoto/klHIs7_2Qlp0ZHpMCyZ2yw/o.jpg",
      is_closed: false,
      url:
        "https://www.yelp.com/biz/james-weir-floral-company-brooklyn-2?adjust_creative=CqXLv5L9XAs27YZfdb32yQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CqXLv5L9XAs27YZfdb32yQ",
      review_count: 37,
      categories: [
        {
          alias: "florists",
          title: "Florists"
        },
        {
          alias: "floraldesigners",
          title: "Floral Designers"
        }
      ],
      rating: 4,
      coordinates: {
        latitude: 40.694608,
        longitude: -73.993203
      },
      transactions: [],
      price: "$$",
      location: {
        address1: "107 Montague Street",
        address2: "",
        address3: "",
        city: "Brooklyn",
        zip_code: "11201",
        country: "US",
        state: "NY",
        display_address: ["107 Montague Street", "Brooklyn, NY 11201"]
      },
      phone: "+17186240270",
      display_phone: "(718) 624-0270",
      distance: 1208.5027464148782
    },
    {
      id: "AF8dfJu_5wBOBe-Al25HFA",
      alias: "metrotech-natures-lane-florist-brooklyn",
      name: "Metrotech Nature's Lane Florist",
      image_url:
        "https://s3-media2.fl.yelpcdn.com/bphoto/DbXxP7hVGjApVZLkRaR5kA/o.jpg",
      is_closed: false,
      url:
        "https://www.yelp.com/biz/metrotech-natures-lane-florist-brooklyn?adjust_creative=CqXLv5L9XAs27YZfdb32yQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CqXLv5L9XAs27YZfdb32yQ",
      review_count: 7,
      categories: [
        {
          alias: "florists",
          title: "Florists"
        }
      ],
      rating: 4.5,
      coordinates: {
        latitude: 40.693443,
        longitude: -73.9844049
      },
      transactions: [],
      price: "$$",
      location: {
        address1: "3 Metrotech Ctr",
        address2: "",
        address3: "",
        city: "Brooklyn",
        zip_code: "11201",
        country: "US",
        state: "NY",
        display_address: ["3 Metrotech Ctr", "Brooklyn, NY 11201"]
      },
      phone: "+17188554714",
      display_phone: "(718) 855-4714",
      distance: 1592.3773615951259
    },
    {
      id: "1lHrh1TJ4CWca2j925FLDw",
      alias: "edelweiss-floral-atelier-new-york",
      name: "Edelweiss Floral Atelier",
      image_url:
        "https://s3-media1.fl.yelpcdn.com/bphoto/8f2AdmhCQG9Llqzz5s6_pQ/o.jpg",
      is_closed: false,
      url:
        "https://www.yelp.com/biz/edelweiss-floral-atelier-new-york?adjust_creative=CqXLv5L9XAs27YZfdb32yQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CqXLv5L9XAs27YZfdb32yQ",
      review_count: 64,
      categories: [
        {
          alias: "florists",
          title: "Florists"
        }
      ],
      rating: 4.5,
      coordinates: {
        latitude: 40.6882612674778,
        longitude: -73.993284702301
      },
      transactions: [],
      price: "$$",
      location: {
        address1: "164 Ct St",
        address2: "",
        address3: "",
        city: "New York",
        zip_code: "11201",
        country: "US",
        state: "NY",
        display_address: ["164 Ct St", "New York, NY 11201"]
      },
      phone: "+17184889888",
      display_phone: "(718) 488-9888",
      distance: 1912.6173732505465
    }
  ]
};

describe("fetch florists reducer", () => {
  it("has a default state", () => {
    expect(reducers(undefined, {})).toEqual({
      loading: false,
      florists: []
    });
  });

  it("handles GET_FLORISTS request", () => {
    expect(
      reducers(undefined, {
        type: GET_FLORISTS
      })
    ).toEqual({
      loading: true,
      florists: []
    });
  });
});

describe("fetch sagas", () => {
  const it = sagaHelper(fetchFlorists(40, -73));

  it("should have called the mock API first", result => {
    let expected = call(api);
    expect(result.type).toEqual(expected.type);
    expect(api).not.toHaveBeenCalled();
  });

  it("and then nothing", result => {
    expect(result).toBeUndefined();
  });
});
