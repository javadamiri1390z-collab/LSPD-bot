import {
  LayoutDashboard,
  Users,
  Coins,
  ClipboardList,
  Radio,
  Building2,
  Megaphone,
  Clock3,
  Trophy,
  FileText,
  ShieldCheck,
  UserCircle,
  Settings
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Officers",
    icon: Users
  },
  {
    title: "Coins & Rank Up",
    icon: Coins
  },
  {
    title: "Activities",
    icon: ClipboardList
  },
  {
    title: "Dispatch",
    icon: Radio
  },
  {
    title: "Divisions",
    icon: Building2
  },
  {
    title: "Announcements",
    icon: Megaphone
  },
  {
    title: "Playtime",
    icon: Clock3
  },
  {
    title: "Top Officers",
    icon: Trophy
  },
  {
    title: "Logs",
    icon: FileText
  },
  {
    title: "Permissions",
    icon: ShieldCheck
  }
];

export default function Sidebar({
  activePage,
  setActivePage
}) {
  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-logo">
          <ShieldCheck size={28} />
        </div>

        <div>
          <h2>LSPD</h2>
          <span>MANAGEMENT</span>
        </div>
      </div>

      <div className="profile-mini">
        <div className="avatar">
          JA
        </div>

        <div>
          <strong>Javad Amiri</strong>
          <span>Command</span>
        </div>
      </div>

      <nav>
        <div className="menu-label">
          MAIN MENU
        </div>

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className={
                activePage === item.title
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() =>
                setActivePage(item.title)
              }
            >
              <Icon size={19} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-bottom">

        <button
          className="nav-item"
          onClick={() => setActivePage("Profile")}
        >
          <UserCircle size={19} />
          <span>My Profile</span>
        </button>

        <button
          className="nav-item"
          onClick={() => setActivePage("Settings")}
        >
          <Settings size={19} />
          <span>Settings</span>
        </button>

      </div>

    </aside>
  );
            }
