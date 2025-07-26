export default function HeroSection() {
  return(
    <section id= "heroSection" className="hero--section">
      <div className= "hero--section--content--box">
        <div className= "hero--section--content">
          <p className="section--title">Hey, I'm Pavan</p>
          <h1 className="hero--section--title">
             <span className="hero--section--title--color">
                Full Stack 
                </span> {" "}
                <br />
                Developer
          </h1>
               <p className="hero--section--description">
                I am a Full Stack Developer with a passion for building
                <br />
                 web applications that provide seamless user experiences.
               </p>
        </div>
          <button className="btn btn-primary">
            Get In Touch
          </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />

      </div>
      
       </section>
  );
  
}