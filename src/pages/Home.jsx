import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <h2>社会</h2>
        <div>
          <Link to="../pref-quiz">都道府県クイズ</Link>
          <Link to="../capital-quiz">県庁所在地クイズ</Link>
          <Link to="../map-icon-quiz">地図記号クイズ</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
