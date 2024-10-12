import pic1 from "../assets/testimonial-pic-1.png";
import pic2 from "../assets/testimonial-pic-2.png";
import pic3 from "../assets/testimonial-pic-1.png";
import pic4 from "../assets/testimonial-pic-2.png";
import pic5 from "../assets/testimonial-pic-1.png";

const testimonials = [
  {
    picture: pic2,
    name: "Lade",
    occupation: "Student of University of Lagos",
    content:
      "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
  },
  {
    picture: pic3,
    name: "Jesse",
    occupation: "Digital Marketer",
    content:
      "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
  },
  {
    picture: pic4,
    name: "Raye",
    occupation: "Student of Augustine University",
    content:
      "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
  },
  {
    picture: pic1,
    name: "Joyce Igwe",
    occupation: "Content Creator",
    content:
      "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
  },
  {
    picture: pic5,
    name: "Chigozie Michael",
    occupation: "Student of the University of Benin",
    content:
      "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
  },
];

const Testimonials = () => {
  return (
    <div className="flex lg:bg-[#f8fdfd] overflow-x-scroll w-[98%] pt-5 md:pt-10 gap-8 pb-10">
      {testimonials.length
        ? testimonials.map((testimonial) => (
            <div
              key=""
              className="shadow-lg shadow-[#40BBC326] min-w-[359px] mb-5 md:mb-[0px] pl-[5px] p-5 rounded-[15px]"
            >
              <div className="h-[170px]">
                <p className="text-center lg:text-left text-[16px] pt-2 pl-[24px] text-brandGrey">
                  {testimonial?.content}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 pl-[24px] items-center justify-center lg:justify-start">
                <img
                  src={testimonial?.picture}
                  width={40}
                  height={40}
                  alt="testimonials picture"
                />
                <div>
                  <p className="font-bold lg:text-left text-center">
                    {testimonial?.name}
                  </p>
                  <p className="block lg:hidden lg:text-left text-center">
                    {testimonial?.occupation}
                  </p>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Testimonials;
