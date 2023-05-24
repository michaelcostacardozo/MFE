module.exports.handler = async (event, context) => {
  var resp = `
  {
    "categories": [
        {
            "name": "Clothing",
            "url": "https://teste.com.br/clothing"
        },
        {
            "name": "Accessories",
            "url": "https://teste.com.br/accessories"
        },
        {
            "name": "Beauty",
            "url": "https://teste.com.br/beauty"
        }
    ]
}
  `
  const response = {
    statusCode: 200,
    headers : {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      "Content-Type" : "application/json"
    },
    body: resp
  };  return response;  

};