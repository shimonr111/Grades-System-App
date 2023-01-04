import "./Page404.css";
import ProblemGIF from "../Assets/Problem.gif"

//function that route to error page.
function Page404() {
  return (
    <div className="Page404">
      <h2>The page you are looking for doesn't exist!</h2>
      <img src={ProblemGIF} alt="Problem" />
    </div>
  );
}

export default Page404;
