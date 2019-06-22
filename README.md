# ShowTime

### What?

Movies searcher using omdb api. A simple application with an input field, Clicking on search/pressing enter will output 10 items of the relevant movies to the input value and you can click for more details.

### Screens

- Homescreen, that has search input field, the user should input the movie title he is searching for, then he will get the results .
- Search, this screen will show the searched movie and it can show up to 10 movies, and there is a field to search among these results.
- Details movie details screen, When the user clicks on an item from the output results, he will be redirected to another screen that shows more details about the movie he selected.

### How to use locally?

1. git clone this repo.
2. npm install OR yarn install
3. to test the app just run "react-native run-'ios/android'"
4. you need to go to omdbapi.com and generate your access token.
5. to get the API key working, you need to create a file in the root directory of this repo named token.js, and insert these lines to it.

```
export const accessToken = "you generated access token";
```

6. Have fun!
