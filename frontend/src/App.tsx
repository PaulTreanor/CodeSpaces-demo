import './App.css'

function App () {
  const fetchCatImage = async (): Promise<void> => {
    try {
      // Fetch image blob from the API
      const response = await fetch('https://cataas.com/cat', {
        method: 'GET'
      })

      // Check if request was successful
      if (response.ok) {
        // Create a blob URL from the fetched image blob
        const blob = await response.blob()
        const blobURL = URL.createObjectURL(blob)

        // Find the existing img element and update its src to blobURL
        const catImageElement = document.getElementById('catImage')
        catImageElement.src = blobURL
      } else {
        console.error('Failed to fetch cat image.')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  return (
    <>
      <h1>Random Cats 😻</h1>
      <div className="card">
        <img id="catImage"/>
        <button onClick={fetchCatImage}>
          Get a cat!
        </button>
      </div>
    </>
  )
}

export default App
