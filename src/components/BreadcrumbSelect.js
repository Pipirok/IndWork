import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function BreadcrumbSelect({ firstIsActive, secondIsActive }) {
  return (
    <Breadcrumb>
      <BreadcrumbItem active={firstIsActive}>
        {firstIsActive ? "Index" : <Link to="/">Index</Link>}
      </BreadcrumbItem>
      <BreadcrumbItem active={secondIsActive}>
        {secondIsActive ? "About" : <Link to="/about">About</Link>}
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
