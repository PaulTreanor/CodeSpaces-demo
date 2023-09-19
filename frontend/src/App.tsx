import type { ReactNode } from 'react'

const codeSpaceName = import.meta.env.VITE_CODESPACE_NAME || 'localhost'
const baseURL = codeSpaceName !== 'localhost'
  ? `https://${codeSpaceName}-3000.app.github.dev/`
  : 'http://localhost:3000/'

function App (): ReactNode {
  const fetchCatImage = async (): Promise<void> => {
    try {
      const response = await fetch(baseURL, { method: 'GET' })

      if (response.ok) {
        const blob = await response.blob()
        const blobURL = URL.createObjectURL(blob)
        const catImageElement = document.getElementById('catImage')

        if (catImageElement != null) {
          catImageElement.src = blobURL
        } else {
          console.error('Image element not found.')
        }
      } else {
        console.error('Failed to fetch cat image.')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  return (
    <>
      <h1 className="text-xl font-semibold text-gray-900">Random Cats 😻</h1>
      <button onClick={fetchCatImage} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">Get a cat!</button>
      <img id="catImage" className="object-contain h-48 w-96" />
    </>
  )
}

export default App
