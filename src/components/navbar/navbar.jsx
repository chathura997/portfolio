import "./navbar.scss"
import Sidebar from "../sidebar/sidebar";
import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";
import {motion} from "framer-motion"


const navbar = () => {

  return (

  <div className="navbar">

    {/* sidebar */}
    <Sidebar/>
    <div className="wrapper">

    {/* add framer-motion to span */}
      <motion.span 
      initial={{opacity:0,scale:0.5}} 
      animate={{opacity:1,scale:1}} 
      transition={{duration:0.5}} 
      >
        Chathura
      </motion.span>

      <div className="social">
        <motion.a whileHover={{scale: 1.4,transition: { duration: 0.5 }}} style={{color:'white', fontSize:'250%'}} href="#"><DiGithubBadge /></motion.a>
        <a style={{color:'#ffffff', fontSize:'250%'}} href="#"><BsLinkedin /></a>
        <a style={{color:'white', fontSize:'250%'}} href="#"><FaHackerrank /></a>
      </div>

    </div>
  </div>
  )
}

export default navbar