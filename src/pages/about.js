import React from "react";

import Layout from "../components/layout";


function AboutPage() {
  return (
    <Layout>
      

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
            <h1 className="font-bold text-2xl mb-5">About us</h1>
          <p className="pl-4 font-serif leading-loose text-justify  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatibus tenetur minus a sequi quidem reprehenderit consequatur ad? 
            Obcaecati voluptatum repudiandae facilis. Nobis velit placeat architecto
             aspernatur ad, sit voluptates esse aliquam aut atque libero a ratione 
             repudiandae harum exercitationem
             ea quasi natus officia iste culpa voluptate fugit dignissimos alias voluptatibus?
          </p>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Peter Williams
          </cite>
        </div>

        <figure className="w-2/3 md:w-1/3">
          
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;