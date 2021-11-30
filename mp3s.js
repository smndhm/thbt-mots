require('dotenv').config();
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const { paramCase } = require('param-case');
const listesMots = require('./words');

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

listesMots.forEach((liste) => {
  liste.words.forEach((mot) => {
    saveMp3(mot);
  });
});

async function saveMp3(mot) {
  // Construct the request
  const request = {
    input: { text: mot },
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: 'fr-FR', ssmlGender: 'NEUTRAL' },
    // select the type of audio encoding
    audioConfig: { audioEncoding: 'MP3' },
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  const filePath = `public/audio/${paramCase(mot)}.mp3`;
  await writeFile(filePath, response.audioContent, 'binary');
  console.log(`Audio content written to file: ${filePath}`);
}
