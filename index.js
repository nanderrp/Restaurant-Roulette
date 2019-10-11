/* eslint-disable */

// REQUIREMENTS

const express = require('express');

const app = express();

const yelp = require('yelp-fusion');

const apiKey = 'ku4s9GCQScl3lF8t4Ypfp0RHHV3zQBguYiLpN3K5r_Tu9V_g7jqlKfjVr8Ln4zgbpc-c4tAr6JFT1Vo950KGqjhmM6sbzrMTXwWkCYkCNVSmzTw4LeyswPXIANGcXXYx';

const client = yelp.client(apiKey);


app.listen(4000, () => {console.log('Listening at 4000')})

app.use(express.static('public'));

app.use(express.json({limit: '1mb'}));

// RESTAURANT PICKER

client.search({
  limit: '50',
  term: 'breakfast',
  price: '2',
  location: 'portland, or',
}).then(response => {
  console.log(response.jsonBody.businesses[Math.floor(Math.random() * 29)]);
}).catch(e => {
  console.log(e);
});

// DISPLAY THE RESULTS