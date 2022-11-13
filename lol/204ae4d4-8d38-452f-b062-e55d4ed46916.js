const fetch = NodeRequire('node-fetch');
const baseURL = "https://bdff1.playfabapi.com/Client/"
const defaultHeaders = {
  "X-Authorization":"",
  "Content-Type":"application/json"
};

async function GetSkins(){
  const body = {"CatalogVersion":"Ingame"};
  const response = await fetch(baseURL+"GetCatalogItems",{body: JSON.stringify(body), headers: defaultHeaders, method:"POST"});
  const json = await response.json();
  let arr = [];
  json["data"]["Catalog"].forEach(element => {
        arr.push(element["ItemId"]);
     });
  return arr;
}