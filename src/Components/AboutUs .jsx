import logo from '../assets/image/289768428_2439637812843838_994272389908153991_n.jpg'


const AboutUs = () => {
    return (
        <div>
            <img src={logo} alt="" />
      <div className="p-6 bg-white text-end shadow-lg rounded-lg">
        
        <h2 className="text-4xl font-bold mb-4">من نحن</h2>
        <p className="text-gray-600">
          نحن شركة متخصصة في تقديم أفضل الخدمات لعملائنا، ونسعى دائمًا لتحقيق أعلى معايير الجودة والتميز.
        </p>
      </div>
        </div>
    );
  };
  
  export default AboutUs;
  