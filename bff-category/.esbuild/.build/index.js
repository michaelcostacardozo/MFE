"use strict";

// index.js
module.exports.handler = (event, context, callback) => {
  var responseService = `
    categories = [
        {
          name: "Clothing",
          url: "https://teste.com.br/clothing"
        },
        {
          name: "Accessories",
          url: "https://teste.com.br/accessories"
        },
        {
            name: "Beauty",
            url: "https://teste.com.br/beauty"
        }  
      ]
`;
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      "Content-Type": "application/json"
    },
    body: responseService
  };
  return response;
};
