import { Fragment } from "react";

const Home = (props) => {
  return (
    <Fragment >
        <header className="text-5xl text-center text-blue-500 font-medium mt-3">
            TODOS
        </header>
      <div>{props.children}</div>
    </Fragment>
  );
};

export default Home;
