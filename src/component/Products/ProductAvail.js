import React from "react";
import Navber from "../Navber/Navber";
import "./Card.css";
import InfiniteCarousel from "react-leaf-carousel";
const Products = () => {
  return (
    <div>
      <Navber />

      <br></br>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={false}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
      >
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BkU-JQiFwez2gdtA1mliXIn84Iaanlc6aA&usqp=CAU"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>Divya Vishtindukadi Vati</h3>
              <p>
                20g
              </p>

              <button
                style={{ backgroundColor: "#02123a", color: "white" }}
                onClick={() => alert("Thanks for your Booking")}
              >
                Order Now
              </button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.jillcarnahan.com%2Fwp-content%2Fuploads%2F2016%2F08%2FAdobeStock_76987407.jpeg&imgrefurl=https%3A%2F%2Fwww.jillcarnahan.com%2F2016%2F08%2F21%2Fpower-subconscious-mind-heal%2F&tbnid=Xjt0aMUIbSmDcM&vet=12ahUKEwjO2Yy0zKH7AhUwjNgFHWa8DOEQMygCegUIARCMAQ..i&docid=65hSL30NBhXDrM&w=1920&h=1314&q=subconscious%20mind%20healing%20techniques&ved=2ahUKEwjO2Yy0zKH7AhUwjNgFHWa8DOEQMygCegUIARCMAQ"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>Divya Swasari Pravahi</h3>
              <p>
                250ml
              </p>

              <button>Order Now</button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp2VZyh_zqeHedlPGMdRuf3JxV96upZqLfIg&usqp=CAU"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>Patanjali Balm</h3>
              <p>
                25g
              </p>

              <button>Order Now</button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>My local hipster cafe</h3>
              <p>
                My local cafe. I highly recommend a visit to the local hipster
                cafe,
              </p>

              <button>Book Now</button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>My local hipster cafe</h3>
              <p>
                My local cafe. I highly recommend a visit to the local hipster
                cafe,
              </p>

              <button>Book Now</button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>My local hipster cafe</h3>
              <p>
                My local cafe. I highly recommend a visit to the local hipster
                cafe,
              </p>

              <button>Book Now</button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>My local hipster cafe</h3>
              <p>
                My local cafe. I highly recommend a visit to the local hipster
                cafe,
              </p>

              <button>Book Now</button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>My local hipster cafe</h3>
              <p>
                My local cafe. I highly recommend a visit to the local hipster
                cafe,
              </p>

              <button>Book Now</button>
            </article>
          </section>
        </div>
      </InfiniteCarousel>
    </div>
  );
};
export default Products;
