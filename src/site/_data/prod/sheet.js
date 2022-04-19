const axios  = require('axios');
const seed   = require('../../../utils/save-seed.js');


// Once a googel sheet is "published to the web" we can access its JSON
// via a URL of this form. We just need to pass in the ID of the sheet
// which we can find in the URL of the document.


const googleSheetUrl = `https://v1.nocodeapi.com/indiantinker/google_sheets/zOAggryWfXUPLBiK?tabId=Sheet1`;

module.exports = () => {
  return new Promise((resolve, reject) => {

    console.log(`Requesting data from ${googleSheetUrl}`);

    axios.get(googleSheetUrl)
      .then(response => {
       console.log(response.data)
        var data = {
          "content": null
        };
        data.content=response.data.data;
        // response.data.forEach(item => {

        //   data.content.push({
        //     "Date": item.Date,
        //     "Time": item.Time,
        //     "Channel Name": item["Channel Name"],
        //     "User": item.User,
        //     "Link": item.link,
        //     "User Message": item["User Message"],
        //     "Link Type": item["Link Type"]
            
        //   })
        // });

        // stash the data locally for developing without
        // needing to hit the API each time.
        seed(JSON.stringify(data), `${__dirname}/../dev/sheet.json`);

        // resolve the promise and return the data
        resolve(data);

      })

      // uh-oh. Handle any errrors we might encounter
      .catch(error => {
        console.log('Error :', error);
        reject(error);
      });
  })
}
