import { useState } from 'react';
import { useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Header from "../components/Header";
import MessageDefault from "../components/MessageDefault";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export default function Event() {
  const { slug } = useParams<{slug: string}>();
  const [isMenuClose, setIsMenuClose] = useState<boolean>(true);

  return (
    <div className="flex flex-col min-h-screen">
      <Header changeMenu={()=>setIsMenuClose(!isMenuClose)} isMenuClose={isMenuClose}/>
      <main className="flex flex-col md:flex-row md:flex-1">       
        {
          slug 
          ? <Video lessonSlug={slug}/> 
          : <MessageDefault />
        }                
        <Sidebar isMenuClose={isMenuClose}/>
      </main> 
      <Footer/>
    </div>
  )
}
