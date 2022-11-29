import React from "react";
import Navber from "../Navber/Navber";
import "./Card.css";
import InfiniteCarousel from "react-leaf-carousel";
const Treatments = () => {
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
                src="https://layuraura.com/wp-content/uploads/2020/07/Ayurveda-Massage-pics-3-870x500.jpg"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>Kizhi – Herbal Bundles</h3>
              <p>
              A process by which the body is encouraged to sweat by the application of warmed medicinal herb powder, leaves or hot rice tied into warm poultices. The therapy relieves tension and aids in detoxification releasing the pain of strained muscles, joint disorders, arthritic conditions and sciatica creating flexibility in the body.This treatment involves cooked medicinal rice called Njavara.
              </p>

              <button
                style={{ backgroundColor: "#02123a", color: "white" }}
                onClick={() => alert("Thanks for your Booking")}
              >
                Book Now
              </button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://ayurhealing.net/wp-content/uploads/2018/03/abhyanga-%E2%80%93ayurvedic-body-massage-1.jpg"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>Abhyanga Massage</h3>
              <p>
              One of the most rejuvenating therapies of Ayurveda, treating obesity, body pain, weakness and fatigue.Although in Ayurveda, an ideal routine includes abhyanga in the morning when getting ready for the day, it can be done at any other time as well. It removes toxins, delays ageing, promotes development of muscles, improves blood circulation, beautifies skin.
              </p>

              <button
                style={{ backgroundColor: "#02123a", color: "white" }}
                onClick={() => alert("Thanks for your Booking")}
              >
                Book Now
              </button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://www.chandigarhayurvedcentre.com/wp-content/uploads/2019/09/Rice-Milk-Treatment-1920x1040.jpg"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>Navarakizhi- Rice Bundles</h3>
              <p>
              A treatment using bundles of medicated navara rice, known for its nutritional and therapeutic benefits and highly beneficial for rebuilding nerve strength. A restorative treatment for osteoarthritis, rheumatism, gout, numbness, and for rebuilding muscle tissues. It tightens the skin, removes wrinkles, improves blood circulation, increases immunity and promotes sharpness of vision.
              </p>
              <button
                style={{ backgroundColor: "#02123a", color: "white" }}
                onClick={() => alert("Thanks for your Booking")}
              >
                Book Now
              </button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://www.ayurcentre.in/images/therapies/Elakizhi_ayurveda_therapy-2.png"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>Elakizhi- Leaf Bundles</h3>
              <p>
              A fine muslin cloth bundle containing medicinal herbal leaves is applied to the whole body using hot medicated oil. The process strengthens muscles, relieves body pain and cures diseases such as arthritis and paralysis. It promotes increased circulation and perspiration resulting in elimination of toxins from the skin increasing skin lustre and tone.
              </p>

              <button
                style={{ backgroundColor: "#02123a", color: "white" }}
                onClick={() => alert("Thanks for your Booking")}
              >
                Book Now
              </button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwsMuCVsqtjqB766HbeRHSGQ78CIxWmZp7MA&usqp=CAU"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>Podikizhi – Powder Bundles</h3>
              <p>
              In this herbal powder bundle massage, dry herbs are packed in a fine muslin cloth bag then gently heated. The heated bundles are then gently patted over the body, using medicated oil. This treatment is designed to purify and balance the body and is used for relieving tension, increasing circulation, loosening toxins, and strengthening muscle tissue.
              </p>

              <button
                style={{ backgroundColor: "#02123a", color: "white" }}
                onClick={() => alert("Thanks for your Booking")}
              >
                Book Now
              </button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://www.ayurcentre.in/images/therapies/nasya-ayurvedic-treatment-1.jpg"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>Nasyam – Nasal Treatment</h3>
              <p>
              Nasyam is the inhalation of medicated oil drops, usually after a massage to purge and re-juvenate tissues and organs of the head and neck. This treatment improves oxygenation which has a direct influence on brain function and the senses as well as treating sinus congestion, colds, sinusitis, allergies, headaches and migraines.
              </p>

              <button
                style={{ backgroundColor: "#02123a", color: "white" }}
                onClick={() => alert("Thanks for your Booking")}
              >
                Book Now
              </button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://sanskruti-ayurvedam.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/02/20102353/gallary4.png"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>Shirodhara</h3>
              <p>
              This therapy consists of the continuous flow of medicated oil to the forehead. The treatment provides complete rest to the mind, relieving stress-related conditions such as insomnia, anxiety, chronic headaches, hypertension and asthma. It strengthens hair and scalp, reduces nervous tension and improves the functions of the sense organs. It improves mood and alleviates depression.
              </p>

              <button
                style={{ backgroundColor: "#02123a", color: "white" }}
                onClick={() => alert("Thanks for your Booking")}
              >
                Book Now
              </button>
            </article>
          </section>
        </div>
        <div>
          <section class="card-row">
            <article class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9GGfzxYn3PUPPGnebbDNKYZ7eVVHwIhI8Q&usqp=CAU"
                alt="exposed brick wall in a hipster cafe"
              />
              <h3>Panchakarma</h3>
              <p>
              The treatment is designed to restore the body’s natural balance while eliminating toxins and strengthening the immune system. Panchakarma in the Ashram is a unique opportunity to cleanse in a yogic environment, connect with the body, mind and soul while benefiting from the Ashram daily programme of yoga classes, meditation sessions and more. 
              </p>

              <a href="http://localhost:7002/"> <button
                style={{ backgroundColor: "#02123a", color: "white" }}
                // onClick={() => alert("Thanks for your Booking") }
              >
                Book Now
              </button></a>
            </article>
          </section>
        </div>
      </InfiniteCarousel>
    </div>
  );
};
export default Treatments;
