import Head from 'next/head'
import { useState } from "react"
import { FaUserAlt } from "react-icons/fa"
import Blogcard from "components/Blogcard"
import { GraphQLClient ,gql } from "graphql-request"
import Navbar from "components/Navbar"
import { ThemeContextProvider } from "contexts/ThemeContext";
import { Theme } from "components/Theme";
import UserSettings from "components/UserSettings";




const graphcms = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/cldiict2a21gy01uq77a0go4n/master");

//posts(orderBy:createdAt_DESC){title,etc} for desending order
const QUERY = gql`{
 
    posts{
    title  
    cover{url}
    updatedBy {
      picture
      name
    }
    id
    datePublished
    slug

}

}`;

export async function getStaticProps(){
  const {posts} = await graphcms.request(QUERY);
  return{
    props:{
      posts,
    },
  };
}

export default function Home({posts}) {

  const [handleClick,sethandleClick] = useState(false);


    

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
      <ThemeContextProvider>
      <Navbar/>
      <main className="flex flex-col justify-center items-center pb-10 bg-black dark:bg-white">
      <div className="text-white dark:text-black flex items-center justify-around w-[100vw]">
        <h1 className="py-4 px-4 font-semibold text-xl">Home</h1>
       <div className="flex gap-4">
        <Theme/>
        <button className="hover:text-orange-400" 
        onClick={() => sethandleClick(!handleClick)}>
        {handleClick ? <UserSettings/> : <FaUserAlt size={20}/> }
 
        </button>
       </div>
      </div>
      
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-5 lg:justify-center ">
        {posts.map((post) =>
          <Blogcard 
          title={post.title}
          coverphoto={post.cover}
          key={post.id}
          datePublished={post.datePublished}
          slug={post.slug}
          owner={post.updatedBy}
           /> 
        )}
        </div>
      </main>
      </ThemeContextProvider>
      </>
    </>
  )
}
