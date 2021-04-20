export default function Footer() {
  return (
    <footer
      aria-roledescription="footer, containing my name and libraries used"
      className="text-white p-5 container-fluid"
      style={{
        backgroundColor: "black",
        display: "block",
      }}
    >
      <p className="h2 display-3 text-center">
        Made by Kazimov Aslan for Calculus
      </p>
      <hr className="bg-white" />
      <div className="text-center">
        <p className="h4 display-4">Libraries used:</p>
        <a rel="noopener noreferrer" href="https://reactjs.org">
          React.js
        </a>
        <br />
        <a rel="noopener noreferrer" href="https://plotly.com/javascript">
          plotly.js
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          href="https://github.com/reactstrap/reactstrap"
        >
          reactstrap
        </a>
        <br />
        <a rel="noopener noreferrer" href="https://getbootstrap.com">
          Bootstrap
        </a>
        <br />
        <a rel="noopener noreferrer" href="https://reactrouter.com/">
          React-router
        </a>
      </div>
    </footer>
  );
}
