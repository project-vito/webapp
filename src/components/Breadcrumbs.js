import {
  Link
} from "react-router-dom";

const Breadcrumbs = props => {
  return (
    <Breadcrumbs {...props}>

      <div className="container">
        <ul className="breadcrumb">
          <li><Link to={props.link}>{props.name}</Link></li>
        </ul>
      </div>
    </Breadcrumbs>
  );
}

export default Breadcrumbs;