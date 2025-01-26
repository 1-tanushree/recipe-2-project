import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import {useEffect,useState} from 'react';

const APP_ID=import.meta.env.VITE_APP_ID;
const APP_KEY=import.meta.env.VITE_APP_KEY;


const Homepage = () => {

  const [recipes,setRecipes]=useState([]);
  const[loading,setLoading]=useState(true);

  const fetchRecipes=async(searchQuery)=>{
    setLoading(true);
    setRecipes([]);
    try{
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
      );
      
      const data=await res.json();
      setRecipes(data.hits);
      console.log(data.hits);


    }catch(error){
      console.log(error.message);


    }finally{

     setLoading(false);

    }
  }
  useEffect(()=>{
    fetchRecipes("paneer");

  },[]);


  const handleSearchRecipe=(e)=>{
    e.preventDefault();
    fetchRecipes(e.target[0].value);
  };





  return (
    <div className="bg-[#ffff9d] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={24} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What do you want to Cook Today?"
            />
          </label>
        </form>
        <h1 className="font-bold text-3xl md:text-5xl mt-4">Recommended Recipes</h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular choices
        </p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {!loading && recipes.map(({recipe},index)=><RecipeCard key={index} recipe={recipe}/>)}

          {loading &&
          [...Array(9)].map((_, index) => (
          <div key={index} className="flex w-52 flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-28"></div>
        </div>
      </div>
      <div className="skeleton h-32 w-full"></div>
    </div>
  ))}










        </div>
      </div>
    </div>
  );
};

export default Homepage; 

