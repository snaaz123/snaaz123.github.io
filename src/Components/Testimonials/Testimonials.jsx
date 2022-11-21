import React from "react";
import "./Testimonials.css";
import {Swiper,SwiperSlide} from 'swiper/react';
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css'
const Testimonials=()=>{
   const clients = [
     {
       img: profilepic1,
       review: "lorxncxbcxbbcxvcbxvbcxjvkjxcnvmxcn matchMediabhjxcbvhcbxhvj",
     },
     {
       img: profilepic2,
       review: "lorxncxbcxbbcxvcbxvbcxjvkjxcnvmxcn matchMediabhjxcbvhcbxhvj",
     },
     {
       img: profilepic3,
       review: "lorxncxbcxbbcxvcbxvbcxjvkjxcnvmxcn matchMediabhjxcbvhcbxhvj",
     },
     {
       img: profilepic4,
       review: "lorxncxbcxbbcxvcbxvbcxjvkjxcnvmxcn matchMediabhjxcbvhcbxhvj",
     },
   ];
    return (
      <div className="t-wrapper" id="Testimonials">
        <div className="t-heading">
          <span>Clents always get</span>
          <span>Exceptional Work</span>
          <span>From me....</span>
          <div
            className="blur t-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
          <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
        {/* slider */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <img src={client.img} alt="" />
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
}
export default Testimonials;