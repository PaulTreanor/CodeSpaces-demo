const https = require('https')

module.exports.handler = async (event) => {
  return new Promise((resolve, reject) => {
    https.get('http://localhost:3000/', (response) => {
      const chunks = []

      // Concatenate the chunks of data into a single buffer
      response.on('data', (chunk) => {
        chunks.push(chunk)
      })

      // When the request is done, resolve the promise with the image
      response.on('end', () => {
        const buffer = Buffer.concat(chunks)
        const base64Image = buffer.toString('base64')

        resolve({
          statusCode: 200,
          headers: {
            'Content-Type': 'image/jpeg'
          },
          isBase64Encoded: true,
          body: base64Image
        })
      })

      // Handle errors and reject the promise
      response.on('error', (error) => {
        reject({
          statusCode: 500,
          body: 'An error occurred while fetching the cat image.'
        })
      })
    })
  })
}
