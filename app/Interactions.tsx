"use client";
import {useEffect,useRef,useState} from 'react';
import {Tabs,TabsList,TabsTrigger,TabsContent} from '@/components/ui/tabs';
import {Slider} from '@/components/ui/slider';


export function Navigation(){
 const [active,setActive]=useState('home');const [progress,setProgress]=useState(0);
 useEffect(()=>{let scheduled=false;const update=()=>{const h=document.documentElement;setProgress(h.scrollHeight>innerHeight?scrollY/(h.scrollHeight-innerHeight):0);scheduled=false};const scroll=()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update)}};const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting)setActive(e.target.id)},{rootMargin:'-15% 0px -60% 0px'});document.querySelectorAll('section[id]').forEach(e=>observer.observe(e));addEventListener('scroll',scroll,{passive:true});update();return()=>{removeEventListener('scroll',scroll);observer.disconnect()}},[]);
 return <><a href="#main" className="skip-link">Skip to content</a><nav aria-label="Main navigation"><a className="wordmark" href="#home" aria-label="Sanskriti Binani home">SB<span> / ELECTRICAL ENGINEER</span></a><div>{[['work','WORK'],['about','ABOUT'],['experience','EXPERIENCE'],['publications','PUBLICATIONS'],['contact','CONTACT']].map(([id,label])=><a key={id} href={'#'+id} aria-current={active===id?'location':undefined}>{label}</a>)}</div></nav><div className="scroll-progress" aria-hidden="true" style={{transform:`scaleX(${progress})`}}/></>;
}

export function SignalPath(){
 const [source,setSource]=useState(0);const [running,setRunning]=useState(true);
 return <div className={'signal-system '+(running?'flowing':'')}><div className="signal-heading"><span className="eyebrow">FOLLOW THE SIGNAL</span><button className="text-button" onClick={()=>setRunning(!running)} aria-pressed={!running}>{running?'Pause flow':'Resume flow'}</button></div><div className="signal-nodes">{['SENSE','PROCESS','ACTUATE','CONNECT'].map((s,i)=><button key={s} className={source===i?'selected':''} onClick={()=>setSource(i)} aria-pressed={source===i}><span>{String(i+1).padStart(2,'0')}</span>{s}</button>)}</div><svg className="signal-lines" viewBox="0 0 1000 90" aria-hidden="true"><path d="M0 45 H190 L220 15 H440 L470 45 H620 L650 75 H810 L840 45 H1000"/><path className="current" d="M0 45 H190 L220 15 H440 L470 45 H620 L650 75 H810 L840 45 H1000"/>{[125,375,625,875].map((x,i)=><circle key={x} cx={x} cy={i===1?15:45} r={source===i?7:4} fill={source===i?'var(--accent)':'var(--muted)'}/>)}</svg><p className="signal-description" aria-live="polite">{['A physical change becomes an electrical input. Temperature, light, or skin conductance starts the loop.','Firmware turns sensor readings into a decision. Timing, shared resources, and error handling matter.','The decision becomes a physical action: a folding arm moves, a fan spins, or a heater activates.','Telemetry closes the loop, carrying system state from the board to a useful interface.'][source]}</p><span className="small muted">Conceptual signal flow · select a stage to explore</span></div>;
}

export function BoardInspector(){
 const [zoom,setZoom]=useState(1);
 const views=[['front','foldeasy-front-cutout.webp','Component side'],['back','foldeasy-back-cutout.webp','Back side'],['built','foldeasy-built-cutout.webp','As assembled'],['layout','foldeasy-layout-cutout.webp','PCB layout']];
 return <div className="image-inspector"><div className="panel-heading"><span>BOARD INSPECTION / FOLDEASY</span><span className="small">Supplied images · not a 3D model</span></div><Tabs defaultValue="front" onValueChange={()=>setZoom(1)}><TabsList className="inspector-tabs">{views.map(([id,,label])=><TabsTrigger key={id} value={id}>{label}</TabsTrigger>)}</TabsList>{views.map(([id,file,label])=><TabsContent key={id} value={id}><div className="board-image-scroll"><div className="board-fit-stage" style={{width:`${zoom*100}%`,height:`${zoom*100}%`}}><img src={'/assets/'+file} alt={'FoldEasy '+label.toLowerCase()} loading="lazy" /></div></div></TabsContent>)}</Tabs><div className="zoom-controls"><span id="image-zoom">Image zoom</span><Slider ref={(el)=>{el?.querySelector('[role="slider"]')?.setAttribute('aria-label','Image zoom')}} aria-labelledby="image-zoom" min={1} max={2.5} step={.1} value={[zoom]} onValueChange={v=>setZoom(v[0])}/><output>{Math.round(zoom*100)}%</output><button onClick={()=>setZoom(1)}>Reset</button></div><p className="small muted">The complete board fits at 100%. Zoom in to inspect details.</p></div>;
}

