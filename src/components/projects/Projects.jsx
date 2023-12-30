import { useRef } from "react"
import "./projects.scss"
import {motion,useScroll,useSpring,useTransform} from "framer-motion"

const items =[
 {
  id:1,
  name:"Project 1",
  image:"",
  description:"This is the project's description."
 } ,
 {
  id:2,
  name:"Project 2",
  image:"",
  description:"This is the project's description."
 } ,
 {
  id:3,
  name:"Project 3",
  image:"",
  description:"This is the project's description."
 }
  
];

const Single = ({item}) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return(
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
};
const Projects = () => {

const ref = useRef();

const {scrollYProgress} = useScroll({
  target:ref,
  offset:["end end","start start"],
});  

const scaleX = useSpring(scrollYProgress,{
  stiffness:100,
  damping:30,

});

  return (
    <div className="projects">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressbar"></motion.div>
      </div>

      {items.map(item => (  
        <Single item={item} key={item.id}/>
      ))
      }
    </div>
  )
}

export default Projects