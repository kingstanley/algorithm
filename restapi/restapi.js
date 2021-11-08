
/**
 * Fetch data from api in frontend
 * @param {*} date 
 */
function getData(date) {
    fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`, { method: 'Get' }).then((res) => {
        res.json().then((data) => {
            console.log('data: ', data);
        });
    });
}

getData('5-january-2000');

/**
 * Kobo360 Get data from rest api and return a promise of object 
 * @param {*} date 
 * @returns 
 */
async function getStockInformation(date) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>
    if(date[0] == 0){
        date = date.substr(1);
    }
    let jsonData;
    let getData = (url) => {
  return new Promise(
    (resolve, reject) => {
      https.get(url, function (res) {
        let body = "";
        let jsonData;
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          try {
            jsonData = JSON.parse(body);

            // do something with JSON
            
            resolve(jsonData);
          } catch (error) {
            console.error(error.message);
          };
          
        })
      }
      );
    }
  )
};
    
 
  jsonData = await getData(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`);
//   console.log("Data: ", jsonData.data[0]);
    return jsonData.data.length >0 ? Promise.resolve(jsonData.data[0]) : Promise.resolve({});
}