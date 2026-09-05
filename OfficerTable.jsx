import {
  MoreHorizontal
} from "lucide-react";

const officers = [
  {
    name: "Javad Amiri",
    badge: "LSPD-001",
    rank: "Commander",
    division: "Command",
    coin: 1280,
    playtime: "126h 42m",
    status: "Online"
  },
  {
    name: "Michael Carter",
    badge: "LSPD-024",
    rank: "Captain",
    division: "SWAT",
    coin: 980,
    playtime: "98h 21m",
    status: "Online"
  },
  {
    name: "Alex Morgan",
    badge: "LSPD-031",
    rank: "Lieutenant",
    division: "CID",
    coin: 760,
    playtime: "84h 17m",
    status: "Offline"
  },
  {
    name: "Daniel Wilson",
    badge: "LSPD-042",
    rank: "Sergeant",
    division: "Patrol",
    coin: 590,
    playtime: "71h 09m",
    status: "Online"
  },
  {
    name: "Ryan Cooper",
    badge: "LSPD-055",
    rank: "Officer III",
    division: "K9",
    coin: 420,
    playtime: "53h 32m",
    status: "Offline"
  }
];

export default function OfficerTable() {
  return (
    <div className="table-card">

      <div className="table-header">
        <div>
          <h2>Officers</h2>
          <span>Recently active officers</span>
        </div>

        <button className="view-all">
          View All
        </button>
      </div>

      <div className="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>OFFICER</th>
              <th>RANK</th>
              <th>DIVISION</th>
              <th>COINS</th>
              <th>PLAYTIME</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>

          <tbody>

            {officers.map((officer) => (

              <tr key={officer.badge}>

                <td>
                  <div className="officer-cell">

                    <div className="officer-avatar">
                      {officer.name
                        .split(" ")
                        .map(x => x[0])
                        .join("")}
                    </div>

                    <div>
                      <strong>
                        {officer.name}
                      </strong>

                      <span>
                        {officer.badge}
                      </span>
                    </div>

                  </div>
                </td>

                <td>
                  <span className="rank-badge">
                    {officer.rank}
                  </span>
                </td>

                <td>
                  {officer.division}
                </td>

                <td>
                  <span className="coin-text">
                    🪙 {officer.coin}
                  </span>
                </td>

                <td>
                  {officer.playtime}
                </td>

                <td>

                  <span
                    className={
                      officer.status === "Online"
                        ? "status online"
                        : "status offline"
                    }
                  >
                    <i></i>
                    {officer.status}
                  </span>

                </td>

                <td>
                  <button className="more-btn">
                    <MoreHorizontal size={19} />
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}
