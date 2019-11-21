
## Grab florists in your area

uses the yelp fusion api to look for florists in your area.

### example endpoints

```https://api.yelp.com/v3/businesses/search?term=florist&latitude=50&longitude=-20&limit=20```
```https://api.yelp.com/v3/businesses/search?term=florist&location=NYC&limit=20```

### tech stack
- React
- Redux
- Jest
- surge
- Yelp fusion API

### features

- Geolocation(user hits page and will be sked to turn on location services to automatically make query)


### hurdles - CORS

- In order to handle cors i chose to use a proxy to tunnel the request


### how to run

- git clone [repo]

In the project directory, you can run:

- npm run start

### testing

- npm run test
