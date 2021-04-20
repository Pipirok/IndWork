import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Container className="pt-5" style={{ flex: "1" }}>
        <h1 className="h1 display-1 p-2 p-md-5 text-center">
          404 - Page Not Found
        </h1>
        <div className="ml-auto mr-auto display-block pt-3 pb-3">
          <p className="display-4 text-center">
            Take me back to <Link to="/">index</Link>
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}
