//Handling GET request means to handle the data or form data using the GET method, GET method or POST method are the two methods which are used to fetch the data and store the data in the server.
//using GET requires some terms to be used which are: url, query, queryString
//url is used to fetch the url as in GET, the data is always present in the url
//To parse the given url, parse(request.url) method is used
//ANd to fetch the querystring from the url, query method is used so the complete method becomes:url.parse(request.url).query
//QuerySTring method is used to fetch the exact parameter name value so that it can be used server side to fetch or store the data and the value correspondin to that.
//Function looks like this:querystring.parse(query).['parametername]
