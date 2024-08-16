

import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import Navbar from "@/components/Navbar";

import {getSession,signOut} from "next-auth/react"
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList"
import useMovieList from "@/hooks/useMovieList";


export async function getServerSideProps(context:NextPageContext){
  const session = await getSession(context); 

  if(!session){
    return {
      redirect:{
        destination:'/auth',
        perament:false,

      }
    }
  }
  return {
    props:{

    }
  }
}
  export default function Home(){
    // const { data:user} = useCurrentUser(); 

  const {data:movie = []} = useMovieList(); 

     


    return (
      <>
     <Navbar/>
     <Billboard/>
     <div className="pb-40">

     <MovieList title="Treanding Now" data={movie}/>
     </div>
   

      </>
    )
  }
