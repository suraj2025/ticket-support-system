import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import Intro from "../components/intro"


function Home() {
  return (
    <>
    <Intro />
      <section className="heading">
        <p>Create a support ticket now! To solve your issues</p>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Raise new ticket
      </Link>

      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> View My Tickets
      </Link>
    </>
  );
}

export default Home;
