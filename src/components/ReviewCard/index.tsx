import React from "react";

type ReviewCardProps = {
  content: string;
  imgSrc: string;
  name: string;
  company: string;
};

const ratings = new Array(5);
ratings.fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1' },
});

console.log(ratings);

const ReviewCard: React.FC<ReviewCardProps> = ({
  content,
  imgSrc,
  name,
  company,
}) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span key={key} className="material-symbols-rounded text-yellow-300 text-[18px]" style={style}>
            {icon}
          </span>
        ))}
      </div>
      <p className="text-zinc-400 mb-8">{content}</p>
      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            className="img-cover"
            width={44}
            height={44}
            loading="lazy"
          />
        </figure>
        <div>
            <p>{name}</p>
            <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
