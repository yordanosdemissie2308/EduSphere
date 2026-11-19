import { useState } from "react";
import { ArrowRight, ChevronDown, Languages, ShieldCheck } from "lucide-react";
import type { View } from "../types";
import { Brand } from "./Brand";

export function Login({ setView }: { setView: (view: View) => void }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="login-page">
      <div className="login-art">
        <button className="back-link" onClick={() => setView("website")}><ArrowRight size={16} /> Back to website</button>
        <Brand light />
        <div className="login-quote"><div className="quote-mark">“</div><h2>One community.<br />Every learner supported.</h2><p>A secure, connected environment for students, families, teachers, and school leaders.</p></div>
        <div className="login-art-footer"><ShieldCheck size={18} /> Enterprise-grade security and privacy</div>
      </div>
      <div className="login-panel">
        <div className="login-box">
          <span className="section-kicker">Welcome to Kelem</span>
          <h1>Sign in to your school</h1>
          <p>Use your school account to continue to your workspace.</p>
          <label>School or organization</label>
          <div className="select-field"><div className="mini-mark">H</div><span><small>Hillside International Academy</small>Addis Ababa</span><ChevronDown size={17} /></div>
          <label>Email address</label><input type="email" defaultValue="admin@hillside.edu.et" />
          <div className="label-row"><label>Password</label><button>Forgot password?</button></div>
          <div className="password-field"><input type={visible ? "text" : "password"} defaultValue="password123" /><button onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"}</button></div>
          <label className="remember"><input type="checkbox" defaultChecked /> Keep me signed in on this device</label>
          <button className="btn primary login-submit" onClick={() => setView("portal")}>Sign in securely <ArrowRight size={17} /></button>
          <div className="login-support">Need help signing in? <b>Contact school support</b></div>
        </div>
        <div className="login-language"><Languages size={16} /> English <span>•</span> አማርኛ</div>
      </div>
    </div>
  );
}
