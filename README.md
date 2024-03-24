# Project - *Movies*

**Movies** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3).


## User Stories

The following **required** functionality is completed:

- [x]  User can view a list of movies currently playing in theaters. Poster images load asynchronously.
- [x]  Add a tab bar for **Now Playing** and **Top Rated** movies.
- [x]  Add a search bar.
- [x]  User can view movie details by tapping on a cell.
- [x]  User sees loading state while waiting for the API.
- [x]  User sees an error message when there is a network error.
- [x]  Simple responsive.

The following **optional** features are implemented:

- [x]  Implement segmented control to switch between list view and grid view.
- [x]  All images fade in.
- [x]  Implement lazy load image.
- [x]  Customize the highlight and selection effect of the cell.
- [x]  Improve UX loading by skeleton loading.
- [x]  Enhance responsive.

The following **additional** features are implemented:

- [x]  User Ratings and Reviews: Allow users to rate and leave reviews for movies. This adds interactivity and engagement to your app.
- [x]  Favorite Movies: Implement a feature where users can mark movies as favorites and view them later in a dedicated section.
- [x]  Related Movies: Include a section on each movie's detail page that suggests related or similar movies based on genres, actors, or directors.
- [ ]  Watchlist: Allow users to create a watchlist of movies they want to watch later.
- [x]   Movie Trailers: Integrate movie trailers so users can watch them directly within the app.
- [ ]  User Authentication: Implement user authentication to allow users to save preferences, ratings, and watchlists across devices.
- [ ]  Personalized Recommendations: Use algorithms to provide personalized movie recommendations based on a user's viewing history and preferences.
- [ ]  Multi-language Support: Since you're interested in language learning, consider adding support for multiple languages to cater to a global audience.
- [ ]  Accessibility Features: Ensure your app is accessible to users with disabilities by implementing features such as voice commands, screen reader compatibility, and high contrast modes.

## Requirements

- Please use ReactJS with typescript
- Please use SCSS
- Please do not use any CSS/SCSS framework or UI library

## Video Walkthrough

Here's a walkthrough of implemented user stories:

> Please record screen to a GIF file and attach link here


![Movies](https://github.com/toandn96/movies_frontend/blob/main/capture-2024-3-24.gif)



## Submit

**When you're done, send us back a link to a repository with your source code, with a description of what you've done and any build instructions in the readme!**
### Install Dependencies

```sh
$ yarn 
```

### Get API key

Login to TheMovieDB to get your api key. Login [here](https://www.themoviedb.org/settings/api)

Create a .env file in the root of your project folder and name it _.env.development_
and add the following

```
VITE_TMDB_KEY=[yourapikey]
```

### Run development server

```sh
$ yarn dev
```

### Build the project

```sh
$ yarn build
```

> You can use this file as the readme (please update what you've done, build instructions).

## License

    Copyright [2016] [your-name]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.