import PropTypes from "prop-types";

function ProfileCard({ title, handle, image, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image}></img>
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">Title: {title}</p>
          <p className="subtitle is-6">Handle: {handle}</p>
          <p className="subtitle is-6">Description: {description}</p>
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProfileCard;
