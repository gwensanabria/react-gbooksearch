const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGOD_URI || "mongod://localhost/googlebooks");

const bookSeed = [
    {
        authors: ["Suzanne Collins"],
        description:
          "Set in a dark vision of the near future, a terrifying reality TV show is taking place.Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        image:
          "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link:
          "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games",
      },
      {
        authors: ["Jane Yolen"],
        description:
          "'A triumphantly moving book.' —Kirkus Reviews, starred review Hannah dreads going to her family's Passover Seder—she's tired of hearing her relatives talk about the past. But when she opens the front door to symbolically welcome the prophet Elijah, she's transported to a Polish village in the year 1942. Why is she there, and who is this 'Chaya' that everyone seems to think she is? Just as she begins to unravel the mystery, Nazi soldiers come to take everyone in the village away. And only Hannah knows the unspeakable horrors that await. A critically acclaimed novel from multi-award-winning author Jane Yolen. '[Yolen] adds much to understanding the effects of the Holocaust, which will reverberate throughout history, today and tomorrow.' —SLJ, starred review 'Readers will come away with a sense of tragic history that both disturbs and compels.' —Booklist Winner of the National Jewish Book Award An American Bookseller 'Pick of the Lists'.",
        image:
          "http://books.google.com/books/content?id=wG_BBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link:
          "https://play.google.com/store/books/details?id=wG_BBwAAQBAJ&source=gbs_api",
        title: "The Devil's Arithmetic",
      }
]

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + "data inserted")
        process.exit(0)
    })
    .catch(err => {
        console.log(err)
        process.exit(1)
    })
