import { Container } from "reactstrap";
import createPlotlyComponent from "react-plotly.js/factory";

import Plotly from "plotly.js";

import Footer from "../components/Footer";
import BreadcrumbSelect from "../components/BreadcrumbSelect";

const Plot = createPlotlyComponent(Plotly);

const values = { x: [], y: [], z: [] };
[...Array(8)].forEach((n, i) => {
  [...Array(8)].forEach((n, j) => {
    values.x.push(i);
    values.y.push(j);
    values.z.push(i * i - j);
  });
});

const data = [
  {
    x: [...values.x],
    y: [...values.y],
    z: [...values.z],
    opacity: 0.8,
    type: "mesh3d",
    color: "#34eb67",
  },
];

export default function Index() {
  return (
    <>
      <Container className="pt-5" style={{ flex: "1" }}>
        <BreadcrumbSelect firstIsActive={true} secondIsActive={false} />
        <h1 className="display-2 px-3 d-none d-md-inline">Independent work</h1>
        <h1 className="display-4 px-3 d-sm-inline d-md-none">
          Independent work
        </h1>
        <p className="h2 display-4 p-3">
          Task: plot the graph of
          <br />
          <code style={{ color: "green" }}>
            <var>f(x, y)</var> ={" "}
            <var>
              x<sup>2</sup>
            </var>{" "}
            - <var>y</var>
          </code>
        </p>
        <Plot
          data={data}
          layout={{ title: "Answer:", font: { size: 13 } }}
          config={{ responsive: true }}
        />
      </Container>
      <Footer />
    </>
  );
}
