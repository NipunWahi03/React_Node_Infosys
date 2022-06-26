users = [
  { id: 1, name: "Nipun", age: 18 },
  { id: 2, name: "Palak", age: 19 },
  { id: 3, name: "Priya", age: 20 },
];

articles = [
  { id: 1, articles: ["one", "two", "three"] },
  { id: 2, articles: ["four", "five", "six"] },
  { id: 3, articles: ["seven", "eight", "nine"] },
];

//Using Then and Catch like in promises
// getUser('Nipun')
// .then((data)=>getArticles(data.id))
// .then((article_data)=>console.log(article_data))
// .catch((err)=>console.log(err));

//Using Async and Await to get the data
const getData = async () => {
  try {
    const user = await getUser("Palak");
    console.log(user);
    const article_data = await getArticles(user.id);
    console.log(article_data);
  } catch (error) {
    console.log(error);
  }
};
getData();

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);
    if (user) {
      return resolve(user);
    } else {
      reject(`No such user exists with the name ${name}`);
    }
  });
}

function getArticles(user_id) {
  return new Promise((resolve, reject) => {
    const user_articles = articles.find((article) => article.id === user_id);
    if (articles) {
      return resolve(user_articles.articles);
    } else {
      reject("You have passed the Wrong ID");
    }
  });
}
