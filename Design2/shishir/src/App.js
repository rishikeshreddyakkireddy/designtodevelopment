import Content from "./components/Content";
import Image from "./components/Image";


function App() {
  return (
    <div  className='grid grid-cols-1  sm:grid-col-1   md:grid-col-2 
                    xl:grid-cols-2 2xl:grid-cols-2  grid-flow-row  bg-yellow-light'>
      <Content />
      <Image />
    </div>
  );
}

export default App;