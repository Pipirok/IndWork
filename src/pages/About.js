import { Container } from "reactstrap";

import Footer from "../components/Footer";
import BreadcrumbSelect from "../components/BreadcrumbSelect";

export default function About() {
  return (
    <>
      <Container className="pt-5" style={{ flex: "1" }}>
        <BreadcrumbSelect firstIsActive={false} secondIsActive={true} />

        <a href="https://github.com/Pipirok/IndWork">Source code</a>

        <h1 className="h1">A bit about creating this project</h1>

        <p className="lead">
          This project took way more time than initially planned. I had to deal
          with all kinds of unexpected setbacks, bugs, errors, revisions, and so
          on. Simply making the footer stick to the bottom of the page was a
          pain! One thing that was fast though, is calculating values for
          plotting the function. Instead of calculating them manually, I just
          calculated them via code! The worst part of this whole project though
          was finding a workaround of a certain error within plotly.js Just for
          the heck of it, here's what I saw instead of the graph:
        </p>

        <img
          alt="A screenshot of the error"
          src="Screenshot_195.png"
          style={{ maxWidth: "100%" }}
        />

        <p className="lead">
          Needless to say, it wasn't a pleasant view. However, what I didn't
          know at the time, was that this one error would soon turn into an
          ordeal for my sanity.
        </p>
      </Container>
      <Footer />
    </>
  );
}
