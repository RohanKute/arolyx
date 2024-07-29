import React from 'react';
import '../../animations.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in-down">Welcome to Arolyx</h1>
          <p className="text-lg mb-6 max-w-3xl mx-auto animate-fade-in">
            At Arolyx, we blend innovation and elegance to bring you the finest car fresheners. Our products are more than just fresheners; they are a fusion of art and science, designed to transform your driving experience.
          </p>
          <a href="#explore" className="bg-white text-yellow-700 py-3 px-8 rounded-full shadow-xl hover:bg-gray-100 transition duration-300 animate-bounce text-lg font-semibold">
            Explore Our Collection
          </a>
        </div>
        <img src="https://via.placeholder.com/1500x600" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      </section>

      {/* Unique Designs Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold mb-6 animate-fade-in-left text-yellow-700">Unique Designs</h2>
            <p className="text-lg mb-6 max-w-lg mx-auto animate-fade-in">
              At Arolyx, we believe that car fresheners should be both functional and beautiful. Our unique designs are created to add a touch of elegance to your car's interior, making them a stylish accessory that complements your vehicle.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="https://via.placeholder.com/600x400" alt="Unique Design" className="rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-300 animate-fade-in-right" />
          </div>
        </div>
      </section>

      {/* Natural Diffusion Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold mb-6 animate-fade-in-left text-yellow-700">Natural Diffusion</h2>
            <p className="text-lg mb-6 max-w-lg mx-auto animate-fade-in">
              Our car fresheners utilize a specially designed wooden cap that allows for natural, consistent fragrance diffusion. This method ensures that your car remains pleasantly scented for longer periods, providing a refreshing atmosphere on every journey.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="https://via.placeholder.com/600x400" alt="Natural Diffusion" className="rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-300 animate-fade-in-right" />
          </div>
        </div>
      </section>

      {/* Why Choose Arolyx Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 animate-fade-in-down text-yellow-700">Why Choose Arolyx?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full md:w-1/3 px-6 mb-6 flex">
              <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-between h-full hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
                <img src="https://via.placeholder.com/400x300" alt="Quality Fragrances" className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-yellow-700" />
                <h3 className="text-2xl font-bold mb-4 text-yellow-700">Quality Fragrances</h3>
                <p>We use only the finest ingredients to create our signature scents, ensuring a high-quality and refreshing experience.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6 flex">
              <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-between h-full hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
                <img src="https://via.placeholder.com/400x300" alt="Eco-Friendly" className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-yellow-700" />
                <h3 className="text-2xl font-bold mb-4 text-yellow-700">Eco-Friendly</h3>
                <p>Our wooden caps are sustainably sourced, reflecting our commitment to the environment.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6 flex">
              <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-between h-full hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
                <img src="https://via.placeholder.com/400x300" alt="Stylish & Functional" className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-yellow-700" />
                <h3 className="text-2xl font-bold mb-4 text-yellow-700">Stylish & Functional</h3>
                <p>Our car fresheners are designed to be both a functional and stylish addition to your vehicle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Collection Section */}
      <section id="explore" className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 animate-fade-in-down">Explore Our Collection</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto animate-fade-in">
            Browse our diverse range of car fresheners and find the perfect scent to complement your style and elevate your driving experience. Whether you prefer floral, fruity, or woody notes, Arolyx has something for everyone.
          </p>
          <Link to="/products" className="bg-white text-yellow-700 py-3 px-8 rounded-full shadow-xl hover:bg-gray-100 transition duration-300 animate-bounce text-lg font-semibold">
            Shop Now
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 animate-fade-in-down text-yellow-700">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto text-left">
            <details className="mb-6 group animate-fade-in">
              <summary className="cursor-pointer text-xl font-semibold flex items-center justify-between">
                What are the ingredients used in Arolyx car fresheners?
                <span className="transition-transform duration-300 group-open:rotate-180">+</span>
              </summary>
              <p className="mt-2 text-lg">We use only the finest natural ingredients and essential oils to create our signature scents.</p>
            </details>
            <details className="mb-6 group animate-fade-in">
              <summary className="cursor-pointer text-xl font-semibold flex items-center justify-between">
                How long do the fragrances last?
                <span className="transition-transform duration-300 group-open:rotate-180">+</span>
              </summary>
              <p className="mt-2 text-lg">Our specially designed wooden cap ensures consistent fragrance diffusion, lasting up to 45 days.</p>
            </details>
            <details className="mb-6 group animate-fade-in">
              <summary className="cursor-pointer text-xl font-semibold flex items-center justify-between">
                Are Arolyx products eco-friendly?
                <span className="transition-transform duration-300 group-open:rotate-180">+</span>
              </summary>
              <p className="mt-2 text-lg">Yes, our wooden caps are sustainably sourced, reflecting our commitment to the environment.</p>
            </details>
            <details className="mb-6 group animate-fade-in">
              <summary className="cursor-pointer text-xl font-semibold flex items-center justify-between">
                How can I contact customer support?
                <span className="transition-transform duration-300 group-open:rotate-180">+</span>
              </summary>
              <p className="mt-2 text-lg">You can reach our customer support team through the contact form on our website or by emailing support@arolyx.com.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 animate-fade-in-down text-yellow-700">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full md:w-1/3 px-6 mb-6 flex flex-col items-center">
              <img src="https://via.placeholder.com/100" alt="User 1" className="w-24 h-24 rounded-full mb-4 shadow-lg" />
              <p className="text-xl font-semibold mb-2">Jane Doe</p>
              <p className="text-lg italic">"The Arolyx car freshener has transformed my driving experience. It smells amazing and lasts for weeks!"</p>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6 flex flex-col items-center">
              <img src="https://via.placeholder.com/100" alt="User 2" className="w-24 h-24 rounded-full mb-4 shadow-lg" />
              <p className="text-xl font-semibold mb-2">John Smith</p>
              <p className="text-lg italic">"Absolutely love the design and fragrance. It adds a touch of elegance to my car interior!"</p>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6 flex flex-col items-center">
              <img src="https://via.placeholder.com/100" alt="User 3" className="w-24 h-24 rounded-full mb-4 shadow-lg" />
              <p className="text-xl font-semibold mb-2">Emily Johnson</p>
              <p className="text-lg italic">"The best car freshener I've ever used. It’s eco-friendly and the scent is divine!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-yellow-700 text-white py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6 animate-fade-in-down">Ready to Transform Your Drive?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto animate-fade-in">
            Discover the perfect Arolyx car freshener for you and elevate your driving experience. Shop now and enjoy the ultimate in fragrance and style.
          </p>
          <Link
           to="/products" className="bg-white text-yellow-700 py-3 px-8 rounded-full shadow-xl hover:bg-gray-100 transition duration-300 animate-bounce text-lg font-semibold">
            Shop Now
         
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
