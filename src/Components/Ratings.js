import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Ratings({ getStar }) {
  const [changeRate, setChanngeRate] = useState(1);

  const gettheRealStar = () => {
    getStar(changeRate);
  };
  return (
    <div className="Stars">
      <ReactStars
        value={changeRate}
        count={5}
        onChange={setChanngeRate}
        size={24}
        activeColor="#ffd700"
      />
      <Button variant="primary" onClick={gettheRealStar}>
        search by Rate
      </Button>
    </div>
  );
}

export default Ratings;
