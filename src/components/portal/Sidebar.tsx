import { Bell, ChevronDown, MoreHorizontal, Settings, X } from "lucide-react";
import type { Role } from "../../types";
import { roleNames, roleNav } from "../../data";
import { Brand } from "../Brand";

export function Sidebar({ role, active, setActive, open, close }: {
  role: Role;
  active: string;
  setActive: (value: string) => void;
  open: boolean;
  close: () => void;
}) {
  return (
    <aside className={open ? "sidebar open" : "sidebar"}>
      <div className="sidebar-brand"><Brand light /><button onClick={close}><X size={20} /></button></div>
      <div className="school-chip">
        <div className="school-crest">H</div>
        <div><b>{role === "Super Admin" ? "Kelem Platform" : "Hillside Academy"}</b><span>{role === "Super Admin" ? "Platform workspace" : "2017 E.C. • Term 2"}</span></div>
        <ChevronDown size={16} />
      </div>
      <nav className="side-nav">
        <small>WORKSPACE</small>
        {roleNav[role].map(({ label, icon: Icon }) => (
          <button className={active === label ? "active" : ""} key={label} onClick={() => { setActive(label); close(); }}>
            <Icon size={18} /><span>{label}</span>{label === "Messages" && <i>4</i>}
          </button>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <button><Settings size={18} /> Settings</button>
        <button><Bell size={18} /> Notifications <i>3</i></button>
        <div className="user-mini"><div className="avatar">MA</div><div><b>{roleNames[role]}</b><span>{role}</span></div><MoreHorizontal size={18} /></div>
      </div>
    </aside>
  );
}
