const spices = [
 { name: "Turmeric", img: "https://hips.hearstapps.com/hmg-prod/images/close-up-of-turmeric-on-table-royalty-free-image-890928998-1532356554.jpg?crop=1.00xw:0.828xh;0,0.0873xh&resize=1200:*" },
 { name: "Red Chilli", img: "https://cdn.pixabay.com/photo/2023/12/09/21/03/chilli-pepper-8440176_1280.jpg" },
 { name: "Cumin Seeds", img: "https://cdn.britannica.com/59/219359-050-662D86EA/Cumin-Spice.jpg" },
 { name: "black pepper", img:"https://png.pngtree.com/background/20220718/original/pngtree-black-pepper-hd-photography-material-picture-image_1665254.jpg"},
 { name: "cardmom", img:"https://pramoda.co.in/wp-content/uploads/2020/03/march_blog_red_chillies-2.jpg"},
 { name: "cardmom", img:"https://cdn.pixabay.com/photo/2020/03/18/13/08/curry-leaf-4943943_640.jpg"},
 
];
const Products = () => {
  return (
    <section className="products-section">
      <h2>Our Wholesale Products</h2>
      <div className="products-list">
        {spices.map((spice) => (
          <div key={spice.name} className="product-row">
            <img src={spice.img} alt={spice.name} />
            <div className="product-details">
              <h3>{spice.name}</h3>
              <p>Pure and fresh spices directly from the source.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Products;
