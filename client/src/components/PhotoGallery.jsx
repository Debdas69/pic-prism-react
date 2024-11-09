import ImageCard from "./ImageCard"
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">

     <ImageCard 
     title="The beatch"
     author="Debdas"
     img="https://images.pexels.com/photos/29187003/pexels-photo-29187003/free-photo-of-couple-strolling-through-a-vibrant-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     price={25}
     icon1={ <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     icon2={<FaHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     />

     <ImageCard 
     title="The beatch"
     author="Debdas"
     img="https://images.pexels.com/photos/29187003/pexels-photo-29187003/free-photo-of-couple-strolling-through-a-vibrant-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     price={25}
     icon1={ <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     icon2={<FaHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     />

     <ImageCard 
     title="The beatch"
     author="Debdas"
     img="https://images.pexels.com/photos/29187003/pexels-photo-29187003/free-photo-of-couple-strolling-through-a-vibrant-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     price={25}
     icon1={ <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     icon2={<FaHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     />

     <ImageCard 
     title="The beatch"
     author="Debdas"
     img="https://images.pexels.com/photos/29187003/pexels-photo-29187003/free-photo-of-couple-strolling-through-a-vibrant-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     price={25}
     icon1={ <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     icon2={<FaHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     />

     <ImageCard 
     title="The beatch"
     author="Debdas"
     img="https://images.pexels.com/photos/29187003/pexels-photo-29187003/free-photo-of-couple-strolling-through-a-vibrant-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     price={25}
     icon1={ <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     icon2={<FaHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     />

     <ImageCard 
     title="The beatch"
     author="Debdas"
     img="https://images.pexels.com/photos/29187003/pexels-photo-29187003/free-photo-of-couple-strolling-through-a-vibrant-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     price={25}
     icon1={ <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     icon2={<FaHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     />

     <ImageCard 
     title="The beatch"
     author="Debdas"
     img="https://images.pexels.com/photos/29187003/pexels-photo-29187003/free-photo-of-couple-strolling-through-a-vibrant-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     price={25}
     icon1={ <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     icon2={<FaHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
     />
     
      </div>
    </div>
  )
}

export default PhotoGallery