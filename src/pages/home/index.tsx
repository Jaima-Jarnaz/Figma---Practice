import { Navbar } from "components/organisms/navbar";
import { Searchbar } from "components/organisms/searchbar";

import { UpcomingSeason } from "components/organisms/upcoming-season";

const Home = () => {
  return (
    <div className="p-home">
      <div className="p-home__navbar">
        <Navbar></Navbar>
      </div>

      <div className="p-home__content">
        <div className="p-home__content-searchbar">
          <Searchbar></Searchbar>
        </div>

        <div className="p-home__content-upcoming-season">
          <h3>Upcoming Seasons:</h3>

          <UpcomingSeason
            text="AI and Machine Learning"
            sub_text="Master of Computer Science"
            time_label="8:30am-1:00pm"
            week="Tomorrow"
            day="09"
            month="APRIL"
          ></UpcomingSeason>
          <hr className="p-home__content-upcoming-season-dash" />
          <UpcomingSeason
            text="Database and Information Systems"
            sub_text="Master of Computer Science"
            time_label="9:00am-2:30pm"
            week="Wed"
            day="10"
            month="APRIL"
          ></UpcomingSeason>
          <hr className="p-home__content-upcoming-season-dash" />
          <UpcomingSeason
            text="Definition & Ideation"
            sub_text="Certificate UX/UI Design"
            time_label="3:00pm-7:30pm"
            week="Mon"
            day="18"
            month="DECEMBER"
          ></UpcomingSeason>
        </div>
      </div>
    </div>
  );
};

export default Home;
