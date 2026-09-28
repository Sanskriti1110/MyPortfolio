'use client';
import ProjectBackdrop from './ProjectBackdrop';
import {useEffect,useRef,useState,type CSSProperties} from 'react';
import {ArrowUpRight,ChevronLeft,ChevronRight,Download,Power,X,Activity,Waves,SquareActivity} from 'lucide-react';
import {Dialog,DialogContent,DialogTitle,DialogDescription} from '@/components/ui/dialog';
import {profile,projects,publications} from './content';
import CaseStudy from './CaseStudy';
import CareerGrowth from './CareerGrowth';
import './lab.css';
const views=[{name:'Overview',mode:'EYE DIAGRAM',color:'#ffe529'},{name:'About',mode:'DEVICE DATASHEET',color:'#28d7ff'},{name:'Projects',mode:'PROJECT MEMORY',color:'#69f52c'},{name:'Experience',mode:'SPECTRUM ANALYZER',color:'#ff526d'},{name:'Contact',mode:'SERIAL TERMINAL',color:'#c08aff'}];
function Traces({view,running,gain}:{view:number,running:boolean,gain:number}){
 const ref=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const canvas=ref.current;if(!canvas)return;
  const ctx=canvas.getContext('2d');if(!ctx)return;
  const media=matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0,last:number|null=null,elapsed=0;
  const draw=(now:number)=>{
   const {width:w,height:h}=canvas.getBoundingClientRect();if(!w||!h)return;
   const d=Math.min(devicePixelRatio,2);
   if(canvas.width!==Math.round(w*d)||canvas.height!==Math.round(h*d)){canvas.width=Math.round(w*d);canvas.height=Math.round(h*d)}
   if(last!==null&&running&&!media.matches)elapsed+=Math.min(now-last,40);
   last=now;
   ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,w,h);
   ctx.strokeStyle='#b0bec51a';ctx.lineWidth=1;
   for(let x=0;x<w;x+=w/12){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}
   for(let y=0;y<h;y+=h/8){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
   ctx.setLineDash([2,6]);ctx.strokeStyle='#b0bec536';ctx.beginPath();ctx.moveTo(w/2,0);ctx.lineTo(w/2,h);ctx.moveTo(0,h/2);ctx.lineTo(w,h/2);ctx.stroke();ctx.setLineDash([]);
   if(view===0){
    const reduced=media.matches,t=reduced?0:elapsed/1000;
    // Acquire left-to-right, then leave a softly breathing phosphor envelope.
    const progress=reduced?1:Math.min(1,elapsed/1800),reveal=1-Math.pow(1-progress,2);
    const wave=(u:number,n:number)=>{
     const drift=reduced?0:Math.sin(t*.8)*.022;
     const amplitude=.30+n*.0012+(reduced?0:Math.sin(t*1.15+n*.4)*.012);
     return h*.5+(n%2?1:-1)*Math.cos((u-.5+drift)*Math.PI*2)*h*amplitude+Math.sin(u*16-t*1.8+n*.6)*h*.008;
    };
    ctx.save();ctx.beginPath();ctx.rect(0,0,w*reveal,h);ctx.clip();
    for(let n=17;n>=0;n--){
     ctx.beginPath();ctx.lineWidth=n<2?1.7:.8;ctx.strokeStyle=views[0].color;
     ctx.globalAlpha=Math.min(1,(n===0?.9:n===1?.38:.075)*gain/65)*Math.min(1,progress*4);
     ctx.shadowColor=views[0].color;ctx.shadowBlur=n<2?11:0;
     for(let x=0;x<=w+2;x+=2){const y=wave(x/w,n);x===0?ctx.moveTo(x,y):ctx.lineTo(x,y)}ctx.stroke();
    }
    // A moving bright sweep makes continuous acquisition visible without flashing.
    if(!reduced){
     const head=progress<1?reveal:((t-1.8)*.18)%1;
     for(let branch=0;branch<2;branch++){
      for(let k=0;k<28;k++){
       const u=head-k*.0025;if(u<0)continue;
       ctx.beginPath();ctx.strokeStyle=views[0].color;ctx.lineWidth=2;
       ctx.globalAlpha=(1-k/28)*(branch===0?.85:.5);ctx.shadowBlur=15;
       ctx.moveTo(u*w,wave(u,branch));ctx.lineTo(Math.min(1,u+.003)*w,wave(Math.min(1,u+.003),branch));ctx.stroke();
      }
     }
    }
    ctx.restore();
   }
   ctx.globalAlpha=1;ctx.shadowBlur=0;
   if(view===0&&running&&!media.matches)frame=requestAnimationFrame(draw);
  };
  const redraw=()=>{cancelAnimationFrame(frame);last=null;draw(performance.now())};
  const resize=new ResizeObserver(redraw);resize.observe(canvas);media.addEventListener('change',redraw);redraw();
  return()=>{cancelAnimationFrame(frame);resize.disconnect();media.removeEventListener('change',redraw)};
 },[view,running,gain]);
 return <canvas className="screen-traces" ref={ref} aria-hidden="true"/>;
}
export default function LabPortfolio(){
 const running=true,gain=65;
 const [view,setView]=useState(0),[projectIndex,setProjectIndex]=useState(0),[power,setPower]=useState(true),[selected,setSelected]=useState<string|null>(null),[dialogOpen,setDialogOpen]=useState(false);
 const lastTrigger=useRef<HTMLButtonElement|null>(null),scroller=useRef<HTMLDivElement>(null),current=views[view],project=projects.find(p=>p.id===selected);
 const featured=projects[projectIndex];
 const changeProject=(direction:number)=>setProjectIndex(i=>(i+direction+projects.length)%projects.length);
 const changeView=(n:number)=>{setView(n);setPower(true);scroller.current?.scrollTo({top:0})};
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.altKey||e.ctrlKey||e.metaKey||document.querySelector('[role=dialog]'))return;if(/^[1-5]$/.test(e.key)){setView(+e.key-1);setPower(true);scroller.current?.scrollTo({top:0})}};addEventListener('keydown',onKey);return()=>removeEventListener('keydown',onKey)},[]);
 return <div className="instrument-room"><a className="skip-link" href="#scope-content">Skip to instrument screen</a><div className="bench-caption"><span>SANSKRITI BINANI</span><span>HARDWARE / EMBEDDED / VALIDATION</span><a href="/assets/Sanskriti-Binani-Resume.pdf" target="_blank" rel="noreferrer">RÉSUMÉ <ArrowUpRight size={13}/></a></div><div className="instrument-perspective"><div className="whole-instrument" style={{'--channel':current.color} as CSSProperties} onPointerMove={e=>{if(e.pointerType!=='mouse'||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const b=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--tilt-x',`${-(e.clientY-b.top-b.height/2)/b.height*1.2}deg`);e.currentTarget.style.setProperty('--tilt-y',`${(e.clientX-b.left-b.width/2)/b.width*1.2}deg`)}} onPointerLeave={e=>{e.currentTarget.style.setProperty('--tilt-x','0deg');e.currentTarget.style.setProperty('--tilt-y','0deg')}}><div className="chassis-top"><a href="#" onClick={e=>{e.preventDefault();changeView(0)}} className="instrument-logo">sb</a><div className="io-ports"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i/>GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i/>LinkedIn</a><a href={'mailto:'+profile.email} aria-label="Email"><i/>E-mail</a></div><span className="chassis-model">SB / 2026</span><div className="header-power"><button className={'power-key '+(power?'on':'')} aria-label={power?'Put display in standby':'Power on display'} aria-pressed={power} onClick={()=>setPower(!power)}><Power size={19}/></button></div></div><div className="instrument-layout"><div className={'display-bezel '+(!power?'screen-off':'')}><div className="instrument-screen">
 {power?<><div className="display-top"><span className="channel-indicator">CH {view+1}</span><span className="acquisition"><i className={running?'live':''}/>{running?'RUNNING':'STOPPED'}</span><span className="screen-count">{String(view+1).padStart(2,'0')} / 05</span></div><div className="screen-viewport"><Traces view={view} running={running} gain={gain}/><div className="screen-scroll" ref={scroller} id="scope-content" tabIndex={-1}><div key={view} className={'screen-view view-'+view}>
 {view===0&&<section className="eye-view"><div className="eye-meta"><span>ACQUISITION: CONTINUOUS</span></div><div className="eye-name"><p>ELECTRICAL & HARDWARE ENGINEER</p><h1>Sanskriti<br/><span>Binani.</span></h1><p className="eye-description">I design PCBs, write embedded firmware,<br/>and test hardware.</p><button onClick={()=>changeView(2)} className="screen-action">EXPLORE PROJECTS <ArrowUpRight size={17}/></button></div><div className="eye-bottom"><span><b>PCB</b> DESIGN</span><span><b>FW</b> EMBEDDED</span><span><b>TEST</b> VALIDATION</span></div></section>}
 {view===2&&<section className="project-memory" aria-label="Project carousel" onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();changeProject(e.key==='ArrowRight'?1:-1)}}}><ProjectBackdrop/><div className="memory-header"><span aria-live="polite">{String(projectIndex+1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</span></div><div className="memory-stage"><button className="memory-arrow" aria-label="Previous project" onClick={()=>changeProject(-1)}><ChevronLeft/></button><button key={featured.id} className="memory-thumbnail" aria-label={'Open '+featured.name+' case study'} onClick={e=>{lastTrigger.current=e.currentTarget;setSelected(featured.id);setDialogOpen(true)}}><img src={'/assets/'+(featured.thumbnail ?? featured.image)} alt={featured.alt} width="1000" height="750"/><span>VIEW PROJECT <ArrowUpRight size={16}/></span></button><button className="memory-arrow" aria-label="Next project" onClick={()=>changeProject(1)}><ChevronRight/></button></div><div className="memory-caption" aria-live="polite"><h1>{featured.name}</h1><p>{featured.headline}</p><div>{featured.tags.slice(0,3).map(t=><span key={t}>{t}</span>)}</div></div></section>}
 {view===1&&<section className="datasheet-view"><div className="view-heading"><div><h1>PCB design,<br/><span>firmware, and testing.</span></h1></div></div><div className="datasheet-body"><div><p className="about-lead">I’m Sanskriti, an electrical engineer with experience in <strong>PCB design, embedded firmware, and hardware testing.</strong></p><p className="about-detail">At Penn and through my work with GRASP Lab, FilterFox, and Rainmaker Technologies, I’ve worked on sensor systems, wireless devices, and motor-testing hardware. My work spans circuit design and board layout through firmware development, calibration, and testing. I enjoy understanding how a system behaves in practice and using those results to improve the design.</p></div><figure className="engineer-package"><img src="/assets/headshot.webp" alt="Sanskriti Binani" width="1067" height="1600"/><figcaption>SANSKRITI BINANI<br/><span>M.S. Electrical Engineering<br/>University of Pennsylvania · 2026</span></figcaption></figure></div><div className="signal-skills"><div className="signal-skill" style={{'--skill-color':'#eac477'} as CSSProperties}><div className="skill-probe"><span>1</span><SquareActivity size={28}/></div><div><p>HARDWARE & CIRCUIT DESIGN</p><h2>Altium Designer <b>/</b> KiCad <b>/</b> <em>Cadence</em></h2><p className="skill-detail">Multilayer & rigid-flex PCBs · Sensor interfaces · Power converters · RF integration · CMOS circuit design</p></div></div><div className="signal-skill" style={{'--skill-color':'#87cbb2'} as CSSProperties}><div className="skill-probe"><span>2</span><Waves size={28}/></div><div><p>EMBEDDED SYSTEMS & SOFTWARE</p><h2>C, C++ <b>/</b> Python <b>/</b> <em>FreeRTOS</em></h2><p className="skill-detail">ESP32 · nRF microcontrollers · ATmega328PB · Raspberry Pi · I²C / SPI · DroneCAN</p></div></div><div className="signal-skill" style={{'--skill-color':'#d990b0'} as CSSProperties}><div className="skill-probe"><span>3</span><Activity size={28}/></div><div><p>TEST & VALIDATION</p><h2>Oscilloscope <b>/</b> LabVIEW <b>/</b> <em>Calibration</em></h2><p className="skill-detail">Environmental-chamber testing · 4-wire Kelvin measurement · Motor test automation · Sensor characterization</p></div></div><a className="probe-resume" href="/assets/Sanskriti-Binani-Resume.pdf" target="_blank" rel="noreferrer"><span>VIEW RÉSUMÉ</span><ArrowUpRight size={20}/></a></div><div className="research-register"><div className="research-route"><span>RESEARCH & PUBLICATIONS</span><svg viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true"><path d="M 6 34 H 432 L 460 6 H 994"/></svg></div>{publications.map(p=><a key={p.title} href={p.url} target="_blank" rel="noreferrer"><span>{p.year}</span><div className="research-copy"><h2>{p.title}</h2><span>{p.venue} · View publication <ArrowUpRight size={14}/></span></div></a>)}</div></section>}
 {view===3&&<CareerGrowth/>}
 {view===4&&<section className="contact-view" aria-label="Get in touch"><header className="contact-heading"><h1>Get in touch. <span>Contact me.</span></h1><p>You can contact me about engineering roles, project collaborations, or questions about my work.</p></header><div className="contact-links"><a className="contact-primary" href={'mailto:'+profile.email}><span className="contact-label">01 / EMAIL</span><h2>Send an email</h2><span className="contact-detail">{profile.email}</span><ArrowUpRight/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-label">02 / LINKEDIN</span><h2>LinkedIn profile</h2><span className="contact-detail">Experience and updates</span><ArrowUpRight/></a><a href={profile.github} target="_blank" rel="noreferrer"><span className="contact-label">03 / GITHUB</span><h2>GitHub projects</h2><span className="contact-detail">Code and project files</span><ArrowUpRight/></a><a href="/assets/Sanskriti-Binani-Resume.pdf" target="_blank" rel="noreferrer"><span className="contact-label">04 / RÉSUMÉ</span><h2>View my résumé</h2><span className="contact-detail">Open my résumé</span><Download/></a></div></section>}
 </div></div></div></>:<div className="standby"><Power size={35}/><h1>Display in standby.</h1><button onClick={()=>setPower(true)}>POWER ON</button></div>}
 </div></div></div><div className="chassis-bottom"><div className="channel-keys" role="navigation" aria-label="Portfolio channels">{views.map((v,i)=><button key={v.name} style={{'--key-color':v.color} as CSSProperties} className={view===i?'selected':''} aria-current={view===i?'page':undefined} onClick={()=>changeView(i)}><span>CH {i+1}</span>{v.name}<i/></button>)}</div></div><span className="chassis-screw screw-tl"/><span className="chassis-screw screw-tr"/><span className="chassis-screw screw-bl"/><span className="chassis-screw screw-br"/></div></div><div className="bench-footer"><span>DESIGNED TO BE EXPLORED.</span><span>SELECT A CHANNEL · OR PRESS 1–5</span><span>© {new Date().getFullYear()} SANSKRITI BINANI</span></div><Dialog open={dialogOpen} onOpenChange={setDialogOpen}><DialogContent className="case-dialog instrument-case" showCloseButton={false} onCloseAutoFocus={e=>{e.preventDefault();lastTrigger.current?.focus({preventScroll:true})}}><div className="case-toolbar"><span>PROJECT / {project?.name}</span><button onClick={()=>setDialogOpen(false)} aria-label="Close project"><X size={20}/></button></div><div className="case-scroll"><DialogTitle className="sr-only">{project?.name} engineering case study</DialogTitle><DialogDescription className="sr-only">Project overview, my contribution, and testing.</DialogDescription>{project&&<CaseStudy project={project}/>}</div></DialogContent></Dialog></div>
}
