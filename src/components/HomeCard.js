import {
  Link
} from "react-router-dom";

const HomeCard = props => {
  let {
    className,
    ...otherProps
  } = props;    
  let classNames = ['home-card', className].join(' ');

  return (
    <div className={classNames} {...otherProps}>
      <div className="card-wrapper">
        <p><b>{props.title}</b></p>
        <Link className="link" to={props.link}>
          <span>{props.linkText}</span>
          </Link>
      </div>
    </div>
  );
}

export default HomeCard;