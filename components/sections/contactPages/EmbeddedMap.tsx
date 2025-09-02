import React from "react";

function EmbeddedMap() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Coimbatore Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.156236664015!2d76.93663827475226!3d11.016844291731598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a1b32fabbf%3A0x7a743db623e23d2a!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1693571912345!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true} // ✅ Boolean
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default EmbeddedMap;
