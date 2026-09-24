'use client';
import {useEffect,useState} from 'react';
import {Pause,Play} from 'lucide-react';
import {experience} from './content';

const milestones=[
 {entry:3,label:'GRASP Lab',year:'2025',x:12,y:83,path:'M 3 83 L 12 83'},
 {entry:2,label:'FilterFox',year:'2025',x:37,y:61,path:'M 12 83 C 22 83 22 62 29 62 L 37 61'},
 {entry:1,label:'UPenn',year:'2026',x:62,y:38,path:'M 37 61 L 43 60 C 51 58 51 39 57 39 L 62 38'},
 {entry:0,label:'Rainmaker',year:'2026',x:87,y:14,path:'M 62 38 L 68 37 C 76 34 76 17 81 16 L 87 14'},
];
export default function CareerGrowth(){
 const [step,setStep]=useState(0),[phase,setPhase]=useState<'grow'|'focus'|'rest'>('grow');
 const [selected,setSelected]=useState(0);
 useEffect(()=>setSelected(step),[step]);
 const [paused,setPaused]=useState(false),[reduced,setReduced]=useState(false);
 useEffect(()=>{const query=matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setReduced(query.matches);sync();query.addEventListener('change',sync);return()=>query.removeEventListener('change',sync)},[]);
 useEffect(()=>{
  if(paused||reduced)return;
  const timer=setTimeout(()=>{
   if(phase==='grow')setPhase('focus');
   else if(phase==='focus')setPhase('rest');
   else{setStep(s=>(s+1)%milestones.length);setPhase('grow')}
  },phase==='grow'?1600:phase==='focus'?3400:1100);
  return()=>clearTimeout(timer);
 },[step,phase,paused,reduced]);

 const select=(index:number)=>{setPaused(true);setSelected(index);setPhase('focus')};
 return <section className="career-growth" aria-label="Career milestones">
  <header className="growth-heading"><div><h1>Built on experience.<br/><span>Always growing.</span></h1></div><button className="growth-play" onClick={()=>setPaused(p=>!p)} disabled={reduced} aria-label={paused?'Play career animation':'Pause career animation'}>{paused?<Play size={15}/>:<Pause size={15}/>}<span>{reduced?'SELECT A MILESTONE':paused?'PLAY JOURNEY':'PAUSE JOURNEY'}</span></button></header>
  <div className="growth-chart" data-paused={paused||reduced}>
   <div className={'growth-camera '+(phase==='focus'&&!reduced?'is-focused':'')}>
    <svg className="growth-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
     {milestones.map((m,i)=><path key={m.label} d={m.path} pathLength="1" className={'growth-segment '+(reduced||i<step||(i===step&&phase!=='grow')?'is-drawn':i===step?'is-growing':'is-pending')}/>)}
    </svg>
    {milestones.map((m,i)=><button key={m.label} className={'growth-milestone '+(selected===i?'is-active ':'')+(reduced||i<=step?'is-reached':'')} style={{left:m.x+'%',top:m.y+'%'}} onClick={()=>select(i)} aria-pressed={selected===i} aria-label={'View '+experience[m.entry].company}><i/><span>{m.label}<small>{m.year}</small></span></button>)}
   </div>
  </div>
  <div className="growth-details">{milestones.map((m,index)=>{const role=experience[m.entry];return <article className={'growth-detail '+(selected===index?'is-visible':'')} key={m.label} aria-hidden={selected!==index}><div className="growth-date"><span>0{index+1} / 04</span><p>{role.date}</p></div><div><h2>{role.company}</h2><h3>{role.title}</h3><p>{role.text}</p></div></article>})}</div>
 </section>;
}
