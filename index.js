import express from "express";
import path from "path";
import { fileURLToPath } from "url";

let app = express();
let port = 3000;

// Get directory
let __fileName = fileURLToPath(import.meta.url);
let __dirName = path.dirname(__fileName);

// Use static assets
app.use(express.static("public"));

// Set template engine
app.set("views", "./views");
app.set("view engine", "pug");

// Home route
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirName, "public", "index.html"));
// });

app.get("/", async (req, res) => {
  let moviesRes = await fetch("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E1ODczYjUyYjAzNzgzMzc2NWI3OTFhZTIxODMyZCIsIm5iZiI6MTcyNzc3NjA5NS45ODIwMDgsInN1YiI6IjY1ZjAwYWRhMWY3NDhiMDE4NDUxYTY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aThUPYHK0-cR2YfLIPFSBftS6V6g1FgRJTdXeiZ3D4Q",
    },
  });

  let movies = await moviesRes.json();
  console.log({ movies });

  res.render("index", { data: movies });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

// {
//     "page": 1,
//     "results": [
//       {
//         "adult": false,
//         "backdrop_path": "/dvBCdCohwWbsP5qAaglOXagDMtk.jpg",
//         "genre_ids": [
//           28,
//           35,
//           878
//         ],
//         "id": 533535,
//         "original_language": "en",
//         "original_title": "Deadpool & Wolverine",
//         "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
//         "popularity": 4402.238,
//         "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
//         "release_date": "2024-07-24",
//         "title": "Deadpool & Wolverine",
//         "video": false,
//         "vote_average": 7.739,
//         "vote_count": 3497
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
//         "genre_ids": [
//           16,
//           10751,
//           35,
//           28
//         ],
//         "id": 519182,
//         "original_language": "en",
//         "original_title": "Despicable Me 4",
//         "overview": "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
//         "popularity": 2644.56,
//         "poster_path": "/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
//         "release_date": "2024-06-20",
//         "title": "Despicable Me 4",
//         "video": false,
//         "vote_average": 7.163,
//         "vote_count": 1808
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/Asg2UUwipAdE87MxtJy7SQo08XI.jpg",
//         "genre_ids": [
//           28,
//           14,
//           27,
//           53,
//           80
//         ],
//         "id": 957452,
//         "original_language": "en",
//         "original_title": "The Crow",
//         "overview": "Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right.",
//         "popularity": 1590.34,
//         "poster_path": "/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg",
//         "release_date": "2024-08-21",
//         "title": "The Crow",
//         "video": false,
//         "vote_average": 5.409,
//         "vote_count": 450
//       },
//     ]
// }
