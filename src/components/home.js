import Movies from './movies';
import Text from './text';
import Images from './carousel'
function Home() {

    return (
      <div className="home">
           <Images />
           <Text />
           <Movies />
      </div>
    ) 
}
export default Home
