
import './App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import RowPost from './components/RowPost/RowPost'
import YouTube from 'react-youtube'
import requests from './Urls'

function App() {
  
return(
    <>
    <NavBar/>
   <Banner/>
   <RowPost title="Netflix Original" url={requests.fetchNetflixOriginals} />
   <RowPost title="Trending" isSmall url={requests.fetchTrending} />
   <RowPost title="Action" isSmall url={requests.fetchActionMovies} />
   <RowPost title="Comedy" isSmall url={requests.fetchComedyMovies} />
   
   <RowPost title="Documentaries" isSmall url={requests.fetchDocumentaries} />
   <RowPost title="Horror Movies" isSmall url={requests.fetchHorrorMovies} />
   <RowPost title="Romance Movies" isSmall url={requests.fetchRomanceMovies} />

    </>
    
)
}

export default App