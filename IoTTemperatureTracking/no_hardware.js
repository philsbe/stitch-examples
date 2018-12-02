// Set-up the Stitch client
import Stitch from 'mongodb-stitch-browser-sdk';

// Send sample data while within this loop
function generateData(stitchClient) {
   // Create a random temperature and humidity data point with
   // temp ranging from -20 to 20 °C
   const data = {
      "temp" : Math.floor(Math.random() * 20) - 20,
      "humid" : Math.floor(Math.random() * 100)
   };

   // Print to the console
   console.log(data);

   // Simulate write to MongoDB every 2 minutes
   stitchClient.callFunction("Imp_Write", data).then(
      setTimeout(() => generateData(stitchClient), 120000)
   );
}

// Use the API Key to load data
const stitchClient = Stitch.initializeDefaultAppClient("<e8051-kzjaj>");

stitchClient.auth.loginWithCredential(new ServerApiKeyCredential("<LSfcbsugfGPgQW0395nS66pe7kPPeegIw5I7M9UESdDubq1FwnUvqW9AudXTaq5b>"))
   .then(() => {
      generateData(stitchClient);
});
