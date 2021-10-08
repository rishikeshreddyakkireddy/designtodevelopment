import Content from "./components/Content";
import Image from "./components/Image";


function App() {
  return (//grid grid-cols-1  sm:grid-cols-1   md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2  grid-flow-row
    <div className=' h-screen  w-full  bg-yellow-light' >
      
      <Image />
      <Content  />
      
    </div>
  );
}
export default App;