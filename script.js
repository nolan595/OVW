import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "2m", target: 1000 }, // 100 users over 2 mins
    { duration: "10m", target: 2000 }, // stay at 100 users for 5
    { duration: "2m", target: 0 }, // slowly back down
  ],
};

export default function () {
  http.get("https://ovw-3pigs.netlify.app/game-over");
  sleep(3);
}
