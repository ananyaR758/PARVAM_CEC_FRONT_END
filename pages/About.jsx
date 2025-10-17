const About = () => (
  <section className="about-section">
    {/*  Video Section First */}
    <div className="about-video">
      <video
        src="https://www.youtube.com/embed/M-wpD74NPX4" // Replace with your video URL
        controls
        autoPlay
        muted
        loop
      />
      {/* Alternatively, for a YouTube embed: 
      <iframe width="1312" 
      height="738" 
      src="https://www.youtube.com/embed/M-wpD74NPX4" 
      title="Exploring Spices: Origins, Myths and Established Medicinal Uses" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen></iframe>
      */}
    </div>

    {/* 📝 About Text */}
    <h2>About SouthSpice</h2>
    <p>
      Founded in 2020, SouthSpice is a wholesale masala company dedicated to
      connecting spice farmers with South Indian markets. Our marketing, sales,
      and delivery teams ensure every product reaches customers fresh and fast.
    </p>

    {/* 👥 Team Grid */}
    <div className="team-grid">
      {["Marketing Team", "Sales Team", "Delivery Team"].map((team) => (
        <div key={team} className="team-card">
          <h3>{team}</h3>
          <p>
            Dedicated professionals ensuring smooth operations across South India.
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default About;
<iframe width="1312" 
height="738" 
src="https://www.youtube.com/embed/M-wpD74NPX4" 
title="Exploring Spices: Origins, Myths and Established Medicinal Uses" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin"
 allowfullscreen></iframe>
