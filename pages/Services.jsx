import image from "../assets/OIP.jpg";

const services = [
  {
    title: "Wholesale Supply",
    desc: "`We specialize in supplying premium-quality spices and herbs in bulk quantities to retailers, restaurants, and distributors across the region Our products are sourced directly from trusted farmers and processing units to ensure authenticity, aroma, and purity in every batch. We offer a wide range of whole and ground spices—carefully cleaned, graded, and packed to preserve natural freshness. Whether you need large-scale  procurement or regular restocking, our flexible packaging options, quality assurance, and competitive pricing make us the preferred choice for spice businesses across India.`, ",
    img: image,
  },
  {
    title: "Pan-South Delivery",
    desc: "`Our efficient logistics network ensures fast and reliable spice delivery across all southern states. With well-established transport partners and storage facilities, we guarantee on-time shipments and safe handling from our warehouse to your doorstep. Each delivery is closely monitored by our logistics team to maintain freshness and prevent damage during transit. We provide both standard and express delivery options to suit your business needs, ensuring uninterrupted supply and customer satisfaction.`,",
    img: "https://th.bing.com/th/id/OIP.gQktZHRJoC-dEDvrKb_x-AHaE7?w=273&h=182&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
  },
  {
    title: "Marketing & Branding",
    desc: "We don’t just supply spices—we help brands grow. Our marketing and branding support services are designed to enhance the visibility and reach of your spice product creative packaging and logo design to digital promotions and brand storytelling, we assist in building a strong market identity. Our team works closely with clients to understand their goals and develop custom strategies that highlight product quality, heritage, and flavor uniqueness. With our expertise, your brand can connect with customers more effectively and expand into new markets.`,",
    img: "https://th.bing.com/th/id/OIP.7YQsFxcyOg8lWLLKyMvIRQHaE7?w=242&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
  },
];

const Services = () => (
  <section className="services-section">
    <h2>Our Services</h2>
    <div className="services-grid">
      {services.map((s) => (
        <div key={s.title} className="service-card">
          <img src={s.img} alt={s.title} className="service-image" />
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
