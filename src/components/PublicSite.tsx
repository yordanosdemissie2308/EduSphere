import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronRight, Languages, Menu, ShieldCheck, Sparkles, X, BookOpen } from "lucide-react";
import type { View } from "../types";
import { Brand } from "./Brand";

const heroImage =
  "https://images.unsplash.com/photo-1742302237132-0179678d4598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=86&w=1800";

function PublicHeader({ setView }: { setView: (view: View) => void }) {
  const [mobile, setMobile] = useState(false);
  return (
    <header className="public-header">
      <Brand />
      <nav className={mobile ? "public-nav open" : "public-nav"}>
        {["About", "Academics", "Admissions", "Campus Life", "News"].map((item) => (
          <a href={`#${item.toLowerCase().replace(" ", "-")}`} key={item}>{item}</a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="language"><Languages size={17} /> EN <ChevronDown size={14} /></button>
        <button className="btn ghost desktop-only" onClick={() => setView("login")}>Sign in</button>
        <button className="btn primary desktop-only" onClick={() => setView("login")}>Apply now <ArrowRight size={16} /></button>
        <button className="icon-button mobile-menu" onClick={() => setMobile(!mobile)}>{mobile ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function Hero({ setView }: { setView: (view: View) => void }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={15} /> Admissions open for 2017 E.C.</div>
        <h1>Prepared for today.<br /><em>Ready for tomorrow.</em></h1>
        <p>At Hillside International Academy, every student is known, challenged, and inspired to shape a better future.</p>
        <div className="hero-actions">
          <button className="btn primary large" onClick={() => setView("login")}>Begin an application <ArrowRight size={18} /></button>
          <button className="btn ghost large">Explore our school</button>
        </div>
        <div className="hero-trust">
          <span><b>24</b> years of excellence</span>
          <span><b>18:1</b> student–teacher ratio</span>
          <span><b>98%</b> university placement</span>
        </div>
      </div>
      <div className="hero-visual">
        <img src={heroImage} alt="Students collaborating in a bright classroom" />
        <div className="image-caption"><span>Hillside in action</span><b>Learning with purpose, leading with integrity.</b></div>
        <div className="accreditation"><ShieldCheck size={25} /><div><small>ACCREDITED BY</small><b>International Schools Association</b></div></div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="intro" id="about">
      <div><span className="section-kicker">A learning community in Addis Ababa</span><h2>Education that opens<br />doors—and minds.</h2></div>
      <div><p>We combine Ethiopia's rich cultural foundation with a globally respected curriculum, nurturing curious learners from Grade 1 through 12.</p><a href="#academics">Discover our approach <ArrowRight size={16} /></a></div>
    </section>
  );
}

const programs = [
  ["01", "Primary School", "Grades 1–5", "Building confidence through inquiry, literacy, and joyful discovery."],
  ["02", "Middle School", "Grades 6–8", "Deepening independence, collaboration, and critical thinking."],
  ["03", "Secondary School", "Grades 9–12", "Preparing capable, principled graduates for universities worldwide."],
];

function ProgramsSection() {
  return (
    <section className="programs" id="academics">
      <div className="section-heading"><div><span className="section-kicker">Academic journey</span><h2>A strong path at every stage</h2></div><button className="btn ghost">View all programs <ArrowRight size={16} /></button></div>
      <div className="program-grid">
        {programs.map(([number, title, grade, description]) => (
          <article className="program-card" key={title}><div className="program-no">{number}</div><div className="program-icon"><BookOpen /></div><span>{grade}</span><h3>{title}</h3><p>{description}</p><a>Explore program <ChevronRight size={16} /></a></article>
        ))}
      </div>
    </section>
  );
}

function AdmissionSection({ setView }: { setView: (view: View) => void }) {
  return (
    <section className="admission-cta" id="admissions">
      <div><span className="section-kicker gold">Your child's next chapter</span><h2>Come and see what makes<br />Hillside feel different.</h2></div>
      <div><p>Meet our educators, explore our campus, and discover a community where your child can thrive.</p><button className="btn gold" onClick={() => setView("login")}>Start your application <ArrowRight size={17} /></button></div>
    </section>
  );
}

export function PublicSite({ setView }: { setView: (view: View) => void }) {
  return (
    <div className="public">
      <PublicHeader setView={setView} />
      <main><Hero setView={setView} /><IntroSection /><ProgramsSection /><AdmissionSection setView={setView} /></main>
      <footer><Brand light /><p>© 2025 Hillside International Academy · Addis Ababa, Ethiopia</p><div><a>Privacy</a><a>Contact</a><a>Careers</a></div></footer>
    </div>
  );
}
