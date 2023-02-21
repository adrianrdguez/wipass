import { Link } from "react-router-dom";

const Item = (props) => {
  const { page } = props;
  if (page === "homepage") {
    return <div id="page">{page}</div>;
  } else {
    return (
      <div id="page">
        <Link to="/">
        </Link>
        {page}
      </div>
    );
  }
};

export default Item;