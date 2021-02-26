import React, { useEffect, useState } from "react";
import Card, { CardProps } from "./components/Card";
import axios from "axios";

import "./style.css";

function App() {
  const [cardList, setCardList] = useState<CardProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
      );
      const cards = data.map((d: any) => {
        const item: CardProps = {
          id: d.id,
          faculty: {
            logo: d.logo,
            name: d.faculty.name,
            branch: d.name,
            university: d.faculty.university.name,
          },
          rounds: d.roundSeats,
          score: d.score && {
            roundNo: 0,
            type: d.score.scoreType,
            userScore: 0,
            min: d.score.min,
            max: d.score.max,
            avg: d.score.avg,
          },
          likes: d.likes,
        };
        return item;
      });
      setCardList(cards);
    };
    fetchData();
  }, []);

  return (
    <div className="card-list">
      {cardList.map((card) => (
        <Card {...card} key={card.id} />
      ))}
    </div>
  );
}

export default App;
