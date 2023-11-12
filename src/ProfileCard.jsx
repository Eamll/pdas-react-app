import PropTypes from 'prop-types';

function ProfileCard({title, handle,image}) {
  return (
    <>
        <div>Title: {title}</div>
        <div>Handle: {handle}</div>
        <img src={image}></img>
    </>
  )
}

ProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ProfileCard;
