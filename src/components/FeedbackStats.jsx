import PropTypes from "prop-types";
function FeedbackStats({ feedback }) {
  let media =
    feedback.reduce((acc, currente) => {
      return acc + currente.rating;
    }, 0) / feedback.length;
  media = media.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Media de Rating: {isNaN(media) ? 0 : media}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
