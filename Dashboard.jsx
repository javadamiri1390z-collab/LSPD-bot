import {
  Users,
  UserCheck,
  Coins,
  ClipboardCheck,
  ArrowUpRight,
  Clock,
  Radio,
  AlertCircle
} from "lucide-react";

import StatCard from "../components/StatCard";
import OfficerTable from "../components/OfficerTable";

export default function Dashboard() {

  return (
    <div className="dashboard">

      <header className="page-header">

        <div>
          <span className="breadcrumb">
            LSPD / Dashboard
          </span>

          <h1>
            Command Dashboard
          </h1>

          <p>
            Welcome back, Commander. Here's what's
            happening in the department.
          </p>
        </div>

        <div className="header-actions">
          <div className="live-indicator">
            <i></i>
            System Online
          </div>

          <div className="date-box">
            Saturday, Sep 05, 2026
          </div>
        </div>

      </header>


      <section className="stats-grid">

        <StatCard
          title="Total Officers"
          value="128"
          subtitle="+8 this month"
          icon={Users}
          type="blue"
        />

        <StatCard
          title="Online Now"
          value="37"
          subtitle="29% of department"
          icon={UserCheck}
          type="green"
        />

        <StatCard
          title="Total Coins"
          value="45,820"
          subtitle="+12.4% this month"
          icon={Coins}
          type="yellow"
        />

        <StatCard
          title="Pending Activities"
          value="18"
          subtitle="Needs verification"
          icon={ClipboardCheck}
          type="purple"
        />

      </section>


      <section className="content-grid">

        <div className="activity-card">

          <div className="card-title">
            <div>
              <h2>Recent Activities</h2>
              <span>Latest department activity</span>
            </div>

            <ArrowUpRight size={20} />
          </div>

          <div className="activity-list">

            <Activity
              icon={Radio}
              title="Robbery Response"
              officer="Javad Amiri"
              time="5 minutes ago"
              status="Pending"
            />

            <Activity
              icon={ClipboardCheck}
              title="Patrol Completed"
              officer="Michael Carter"
              time="18 minutes ago"
              status="Approved"
            />

            <Activity
              icon={Clock}
              title="Training Session"
              officer="Daniel Wilson"
              time="42 minutes ago"
              status="Approved"
            />

            <Activity
              icon={AlertCircle}
              title="Traffic Operation"
              officer="Ryan Cooper"
              time="1 hour ago"
              status="Pending"
            />

          </div>

        </div>


        <div className="rank-card">

          <div className="card-title">
            <div>
              <h2>Rank Progress</h2>
              <span>Officers close to promotion</span>
            </div>
          </div>

          <RankProgress
            name="Daniel Wilson"
            rank="Sergeant"
            current={285}
            required={300}
          />

          <RankProgress
            name="Ryan Cooper"
            rank="Officer III"
            current={215}
            required={250}
          />

          <RankProgress
            name="Alex Morgan"
            rank="Lieutenant"
            current={390}
            required={400}
          />

        </div>

      </section>


      <OfficerTable />

    </div>
  );
}


function Activity({
  icon: Icon,
  title,
  officer,
  time,
  status
}) {

  return (
    <div className="activity-row">

      <div className="activity-icon">
        <Icon size={18} />
      </div>

      <div className="activity-info">
        <strong>{title}</strong>
        <span>
          {officer} • {time}
        </span>
      </div>

      <span
        className={
          status === "Approved"
            ? "activity-status approved"
            : "activity-status pending"
        }
      >
        {status}
      </span>

    </div>
  );
}


function RankProgress({
  name,
  rank,
  current,
  required
}) {

  const percent =
    Math.min(
      Math.round((current / required) * 100),
      100
    );

  return (
    <div className="rank-progress">

      <div className="rank-top">

        <div>
          <strong>{name}</strong>
          <span>{rank}</span>
        </div>

        <b>
          {current}/{required}
        </b>

      </div>

      <div className="progress-bar">
        <div
          style={{
            width: `${percent}%`
          }}
        ></div>
      </div>

      <small>
        {percent}% completed
      </small>

    </div>
  );
        }
