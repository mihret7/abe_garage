import React from 'react'

const Map = () => {

    const style={
        maxWidth:'1200px',
        height:'600px',
        textAlign:'center',
        display:'flex',
        justifyContent:'center'
    }

  return (
     <div className=" pl-lg-5">
          <section className="map-section">
            <div className="contact-map" style={style}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63353.63548284981!2d38.490235799999994!3d7.0559381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b14573a067b82b%3A0xa82c1a9985db8f16!2sHawassa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1752499024092!5m2!1sen!2sus"
                width="1000"
                height="470"
                
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </div> 
  )
}

export default Map