/** Decorative edge routing; deliberately leaves the project center clear. */
export default function ProjectBackdrop(){
 return <div className="project-backdrop" aria-hidden="true">
  <svg className="project-traces project-traces-left" viewBox="0 0 260 520" fill="none" preserveAspectRatio="xMinYMid slice" focusable="false">
   <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 0V44L106 130H188M45 0V28L130 113H224M0 62L68 130V192L104 228V267M0 106L42 148V206M0 226H40L104 290H180M0 260L74 334H120L184 398H248M0 322L50 372V420M0 376L106 482H160M0 422L74 496H112"/>
    <circle cx="188" cy="130" r="4"/><circle cx="224" cy="113" r="4"/><circle cx="104" cy="267" r="4"/><circle cx="42" cy="206" r="4"/><circle cx="180" cy="290" r="4"/><circle cx="248" cy="398" r="4"/><circle cx="50" cy="420" r="4"/><circle cx="160" cy="482" r="4"/><circle cx="112" cy="496" r="4"/>
   </g>
  </svg>
  <svg className="project-traces project-traces-right" viewBox="0 0 260 520" fill="none" preserveAspectRatio="xMaxYMid slice" focusable="false">
   <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M260 78H212L164 30H82M260 122H236L190 76H162L66 172M260 166H220L156 230V284L96 344M260 260H194L154 300H70M260 314H232L124 422V484M260 350H238L184 404V500M260 390H246L218 418V458"/>
    <circle cx="82" cy="30" r="4"/><circle cx="66" cy="172" r="4"/><circle cx="96" cy="344" r="4"/><circle cx="70" cy="300" r="4"/><circle cx="124" cy="484" r="4"/><circle cx="184" cy="500" r="4"/><circle cx="218" cy="458" r="4"/>
   </g>
  </svg>
 </div>;
}
