import React, { useEffect, useRef, useState } from "react";

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
};

const InvestmentCard = ({ data, idx }) => {
  const { link, image } = data;
  const cardRef = useRef();
  const isIntersecting = useOnScreen(cardRef);

  useEffect(() => {
    if (isIntersecting) {
      cardRef.current.classList.add("bumping");
    }
  }, [isIntersecting]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      className="w-full h-full fade-in text-black flex items-center p-1 justify-center"
    >
     {data?.bg ? <img src={image} alt="Investment" className={`object-contain h-[140px] bg-[#0a0a0aad] px-3 rounded-lg`} />: <img src={image} alt="Investment" className="object-contain h-[140px]" />}
    </a>
  );
};

export default InvestmentCard;
