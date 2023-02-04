import Link from "next/link"
import {MdReadMore} from "react-icons/md"





const Blogcard = ({title,slug,key,datePublished,coverphoto,owner}) => {


 ///install flowbite for modal 

  return (
    <>
    
      {/* <Link href={"/posts/" + slug}> */}
          <div className="flex flex-col text-white gap-10 bg-[#111111] w-[100vw] md:w-[700px] lg:w-[700px] py-10 px-2">

            <div className="flex justify-around">
              <div className="w-32 h-48 rounded-lg justify-center flex">
                <img src={coverphoto.url} className="rounded-lg object-cover" alt="cover"/>
              </div>

              <div className="w-1/2 flex flex-col justify-evenly ">
                <h1 className="text-xl font-semibold">{title}</h1>
                {/* <div className="flex gap-2">
                  <img src={owner.picture} alt={owner.picture} className="w-6 rounded-full" />
                  <h4>{owner.name}</h4>
                </div> */}
                <p>{datePublished}</p>
              </div>
            </div>         

            <Link className="flex justify-center bg-white w-36 p-2 text-black items-center gap-3 rounded-lg hover:scale-110 transition-all ease-in m-auto"
            href={"/posts/" + slug}>
                
                 <p className="text-sm">Full Book</p>
                 <MdReadMore size="20"/>
                
              </Link>
        </div>        
        {/* </Link> */}

    </>
  )
}

export default Blogcard ;