// import React from 'react';
// import productionImage from '@/assets/images/production.png'
// import setImage from '@/assets/images/set.png'
// import chartImage from '@/assets/images/chart.png'
// import vectorImage from '@/assets/images/vector.png'
import location1 from '@/assets/images/location1.jpg'
import location2 from '@/assets/images/2 (1).jpg'

const AboutSection = () => {
  return (
    <div className="m-40">
      <div className="section-title">
        {/* <h3 className="about-cones heading-text-style mt-10">We Produce Cones</h3> */}
      </div>

      

      <div className="heading-text-style about-container">
        <h1 className="font-bold text-6xl text-decoration-line: underline">About us</h1>
        <p className='text-lg font-bold'>
          N.K TEXCONE is the Manufacturer and Exporter of all types of TEXTILE PAPER CONES. 
          We offer various types with varying paper weights. Our major products include 
          3°30', 4°20', 5°57', Jumbo, Waxed Cones, and more. Established in 2014 in Hapur, 
          India, we have earned a great reputation in our field.
        </p>

        {/* <table className="bg-aliceblue w-full mt-4 border-spacing-0 ">
          <hr />
          <tbody>
            <tr>
              <th className="text-blue font-bold">Basic Information</th>
            </tr>
            <tr>
              <td className="border">Nature of Business</td>
              <td className="border">Manufacturer and Exporter</td>
            </tr>
            <tr>
              <th className="font-medium border-hidden bg-lightgray">
                <ul>
                  <li>Additional Business</li>
                  <li>Registered Address</li>
                  <li>Industry</li>
                  <li>Year of Establishment</li>
                  <li>Legal Status of Firm</li>
                  <li>GST Number</li>
                </ul>
              </th>
              <th className="font-medium">
                <ul className="list-none">
                  <li>Exporter</li>
                  <li>
                    3/20, Surya Vihar, Opp Gurudwara, Delhi Road, Hapur- 245101, 
                    Uttar Pradesh, India
                  </li>
                  <li>Manufacturing, Trading, Importer, and Exporter of Paper Cones</li>
                  <li>2014</li>
                  <li>Partnership Firm</li>
                  <li>09AAKFN5721H2Z2</li>
                </ul>
              </th>
            </tr>
            <tr>
              <th className="text-blue">Trade & Market</th>
            </tr>
            <tr>
              <td className="border-hidden bg-lightgray">Export Percentage</td>
              <td>10-20%</td>
            </tr>
            <tr>
              <th className="text-blue">Company USP</th>
            </tr>
            <tr>
              <td className="border-hidden bg-lightgray">Primary Competitive Advantage</td>
              <td>
                <ul>
                  <li>Competitive Pricing</li>
                  <li>Experienced R & D Department</li>
                  <li>Good Financial Position</li>
                  <li>Guaranteed Service</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th className="text-blue">Infrastructure</th>
            </tr>
            <tr>
              <td className="border-hidden bg-lightgray">Location Type</td>
              <td>INDUSTRIAL</td>
            </tr>
          </tbody>
        </table> */}
        <p className="color-blue text-4xl text-center mt-4">Location Photos</p>
        <div className=' flex  flex-col justify-center md:flex-row gap-10'>
        
        
        <img
          src={location1}
          alt="nktexcone location"
          className="w-45 h-20"
        />
    
       
        <img
          src={location2}
          alt="Location photo 2"
          className=" w-45 h-20"
        />
        
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
