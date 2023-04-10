import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Best Place To Find Food Recipes and Ingredients</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            consequatur adipisci fugiat fugit ullam placeat, voluptates odit
            accusantium eveniet eum itaque excepturi deleniti alias
            exercitationem maxime debitis praesentium autem commodi!
          </p>
          <div className="foodSearch">
            <form action="">
              <input type="text" placeholder="food name" />
              <select id="cars" name="cars" placeholder="select food type">
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="cereals">Cereals</option>
                <option value="protein">Protain</option>
                <option value="legumes">Legumes</option>
              </select>
              <button>Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
