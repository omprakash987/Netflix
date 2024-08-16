import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';


export async function getServerSideProps(context:NextPageContext){
    const session = await getSession(context); 

    if(!session){
return {
    redirect:{
        destination:"/",
        permanent:false,

    }
}
    }
    return {
        props:{

        }
    }
}





 


 
 

const profile = () => {
    const  router = useRouter(); 

    const {data:user} = useCurrentUser(); 

  return (
   <div className=' flex items-center h-full justify-center'>
    <div className=' flex flex-col'>
        <h1 className=' text-3xl md:text-6xl text-white text-center'>Who is Watching</h1>
        <div className=' flex items-center justify-center gap-8 mt-10'></div>
        <div onClick={()=>router.push('/')}>

            <div className=' group flex-row w-44 mx-auto:'>
                <div className=' w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent groupt-hover:cursor-pointer group-hover:border-white overflow-hidden cursor-pointer'>
                    <img src="/images/default-red.png" alt="" />
                </div>

                <div className=' mt-4 text-gray-400 text-2xl  text-center group-hover:text-white'>
                    new user

                </div>

            </div>
        </div>
    </div>
   </div>
  )
}

export default profile