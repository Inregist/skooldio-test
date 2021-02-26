import React from "react";
import math_circle from "../assets/math_circle.svg";

export interface CardProps {
  id: string;
  faculty: {
    logo: string;
    name: string;
    branch: string;
    university: string;
  };
  rounds: number[];
  score?: {
    roundNo: number;
    type: string;
    userScore: number;
    min: number;
    max: number;
    avg: number;
  };
  likes: number;
}

export default function Card({ faculty, rounds, score, likes }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={faculty.logo} alt="" />
        <div>
          <h1>{faculty.name}</h1>
          <h2>{faculty.branch}</h2>
          <h2>{faculty.university}</h2>
        </div>
      </div>
      <div className="card-body">
        <div className="round">
          <span>รอบที่เปิด</span>
          {rounds.map((r, index) => (
            <div className={r > 0 ? "round-active" : "round-inactive"}>
              {index + 1}
            </div>
          ))}
        </div>
        <div className="current-round">
          <span>รอบที่ ? : ?</span>
          <button className="edit-score">
            <span>แก้ไขคะแนน</span>
            <img src={math_circle} alt="" />
          </button>
        </div>
        {score ? (
          <div>
            <div>คะแนนของคุณ {score?.userScore}</div>
            <div>คะแนนต่ำสุด {score?.min}</div>
            <div>คะแนนสูงสุด {score?.max}</div>
            <div>คะแนนเฉลี่ย {score?.avg}</div>
          </div>
        ) : (
          <span>ไม่มีข้อมูลคะแนน</span>
        )}
        <div style={{padding: "20px 0"}}>ดูสัดส่วนคะแนน</div>
        <div>{likes} คนที่สนใจ</div>
      </div>
      <div className="card-body"></div>
    </div>
  );
}
