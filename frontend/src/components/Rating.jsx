import { Star } from 'react-feather';

const Rating = ({ valueRating }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        let rating = valueRating - i;
        if (rating >= 1) {
          return <FullStar key={i} />;
        } else if (rating >= 0.5) {
          return <HalfStar key={i} />;
        } else {
          return <Star key={i} stroke="#FFC107" size={16} />;
        }
      })}
    </>
  );
};

export default Rating;

const FullStar = () => {
  return <Star fill="#FFC107" stroke="#FFC107" size={16} />;
};

const HalfStar = () => {
  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <linearGradient id="halfYellow" x1="0" x2="100%" y1="0" y2="0">
          <stop offset="50%" stopColor="#FFC107" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </svg>

      <Star fill="url(#halfYellow)" stroke="#FFC107" size={16} />
    </>
  );
};
