import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
function Tweet(props) {

  return (
    <div className="tweet">
    {/* I EXTRACT THE FOLLOWING IN ProfileImage.jsx.  src={props.tweet.user.image} is a LINK!!*/}
    {/*  <img
        src={props.tweet.user.image} 
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
        {/* I EXTRACT THE FOLLOWING IN User.jsx */}
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">@{props.tweet.user.handle}</span>
          </span> */}

          <User name = {props.tweet.user.name} handle={props.tweet.user.handle} />
          <Timestamp time ={props.tweet.timestamp} />
          
        </div>

        <p className="message">
        {props.tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
