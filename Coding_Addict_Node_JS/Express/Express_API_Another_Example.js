const express = require("express");
const app = new express();
const { product_data, family_members } = require("./data");

//console.log(product_data);
app.get("/api/v1/get-product-data", (request, response) => {
  let products = product_data.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });
  response.json(product_data);
});

//In this request, we want to fetch the product having product id=1, so we passed 1 in the url and then compare with the product.id and return the response of the product having the same requested id
app.get("/api/v1/get-product-data/1", (request, response) => {
  const single_product = product_data.find((product) => product.id === 1);
  response.json(single_product);
});

//In this approach, we will make use of the params, which will store the data which we passed in the url, to use params, we need to use the syntax as :param_name. Params is a property of the request object, whatever we pass in the params, with the :, that will be stored in the request object->params property

app.get("/api/v1/get-product-data/:product_id", (request, response) => {
  const required_product_id = request.params.product_id;
  // console.log(required_product_id)

  const actual_required_product = product_data.find(
    (product) => product.id === Number(required_product_id)
  );
  response.json(actual_required_product);
});

//Query-String
//Suppose we need to fetch all those products which start with a specific letter or we need to limit the response to a number that only give first 10 products starting with a specific letter, so in this case we will make use of the query property of the request object

app.get("/api/v1/get-product-data/query", (request, response) => {
  const { data } = request.query;
  let copy_products = [...product_data];
  copy_products = copy_products.filter((product) =>
    product.name.startsWith(data)
  );
  response.json(copy_products);
});

app.listen(5000, () => {
  console.log("Listening to the server on the port 5000.....");
});
