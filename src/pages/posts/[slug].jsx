import Navbar from "components/Navbar";
import React from "react"
import { GraphQLClient ,gql } from "graphql-request"
import { useState } from "react";
import { Document, Outline, Page,pdfjs } from 'react-pdf';
import {BiChevronLeft,BiChevronRight} from "react-icons/bi"
import {MdOutlineLibraryBooks} from "react-icons/md" 
const graphcms = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/cldiict2a21gy01uq77a0go4n/master");


const QUERY = gql`
 query Post($slug : String!){
  post(where:{
    slug:$slug
  }){
    id,
    slug,
    pdfitem {
      fileName
      url
    }
  
  }
 }
`;

const SLUGLIST = gql`
{
  posts{
    slug
  }
}
`;



export async function getStaticPaths(){
  const {posts} = await graphcms.request(SLUGLIST);
  return{
    paths : posts.map((post) =>
    ({params : { slug : post.slug}})
    ),
    fallback:false,    
  };
}


export async function getStaticProps({params}){
  const slug = params.slug
  const data = await graphcms.request(QUERY,{slug});
  const post = data.post;
  return{
    props:{
      post,
    },
  };
}

export default function BlogFullPost({post}){

  const url = `${post.pdfitem.url}`

  pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);
   const [togglechap,settogglechap] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
  setNumPages(numPages);
  setPageNumber(1);
}
function onItemClick({ pageNumber: itemPageNumber }) {
  setPageNumber(itemPageNumber);
  settogglechap(!togglechap)
}

function changePage(offset) {
  setPageNumber(prevPageNumber => prevPageNumber + offset);
}

function previousPage() {
  changePage(-1);
}

function nextPage() {
  changePage(1);
}

  

  return(    
    <>
    <Navbar/>
    <div className="main relative lg:pt-8">
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        >
        { togglechap ?
        <div className="absolute rounded-lg dark:border shadow bottom-24 left-[50%] overflow-scroll z-10 h-56 bg-black text-white dark:bg-white dark:text-black">
        <Outline className="text-sm text-center p-2 "
        onItemClick={onItemClick}/>
        </div> : <></>
 }
        
        <div className="lg:scale-100 h-[650px] overflow-hidden">
        <Page scale={0.7} pageNumber={pageNumber} />
        </div>
      </Document>


   {/* Navigationbutton */}
   <div className="flex absolute bottom-10 shadow bg-black text-white dark:bg-white dark:text-black left-[50%] w-44 h-12 justify-evenly rounded-lg items-center border-black">

        <button className="hover:scale-150"
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
        <BiChevronLeft/>
        </button>    

        <p className="text-xs">
          {pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}
        </p>
        
        <button className="hover:scale-150"
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          <BiChevronRight />
        </button>

        <button title="Chapters"
        onClick={() => settogglechap(!togglechap)}
         className="hover:scale-150">
          <MdOutlineLibraryBooks/>
        </button>
      </div>
      
     </div>
    </>
  )
}