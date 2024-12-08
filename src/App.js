import "./App.css";
import { DirectionAwareHover } from "./components/Card.tsx";

function App() {
  const imageUrl =
    "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <div className="h-screen relative flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <div className="flex justify-between items-center w-full px-8">
          <div className="flex-1">
            <p className="font-bold text-xl text-white">Camera</p>
            <p className="font-normal text-sm text-gray-300">$499</p>
          </div>

          <div className="flex-shrink-0 ml-20">
            {/* <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Buy Now
              </div> */}
            {/* </button> */}
            <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Buy Now
            </button>
          </div>
        </div>
      </DirectionAwareHover>
    </div>
  );
}

export default App;
