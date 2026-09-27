import {projects} from './content';
import {BoardInspector} from './Interactions';
import {projectEvidence} from './projectEvidence';
import {imageDimensions} from './imageDimensions';

export default function ProjectSection({project:p}:{project:typeof projects[number]}) {
 const evidence=projectEvidence[p.id];
 return <article id={p.id} className={'project project-'+p.id}>
  <div className="project-heading"><span className="project-index">{p.number}</span><div><p className="eyebrow">{p.category}</p><h3>{p.name}</h3></div></div>
  <div className="project-main">
   <div className="project-story"><h4>{p.headline}</h4><p className="summary">{p.summary}</p><div className="role"><span>CONTRIBUTION</span><p>{p.role}</p></div><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div>
   <figure className="project-figure"><a href={'/assets/'+p.image} target="_blank" rel="noreferrer" aria-label={'Open full-size '+p.name+' image'}><img src={'/assets/'+p.image} alt={p.alt} loading="lazy" {...imageDimensions[p.image]}/></a><figcaption>{p.caption} · open full size ↗</figcaption></figure>
  </div>
  {evidence && <dl className="project-metrics" aria-label="Technical highlights">{evidence.metrics.map(metric=><div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>}
  <div className="engineering-details">{p.sections.map((s,i)=><div key={s.title}><span className="detail-number">{String(i+1).padStart(2,'0')}</span><h5>{s.title}</h5><p>{s.text}</p></div>)}</div>
  {evidence && evidence.figures.length > 0 && <section className="technical-gallery" aria-labelledby={p.id+'-evidence-title'}><div className="technical-gallery-heading"><p className="eyebrow">DESIGN & VALIDATION</p><h4 id={p.id+'-evidence-title'}>Engineering details</h4><p>Open any image to inspect the original at full size.</p></div><div className="technical-figures">{evidence.figures.map((figure,i)=><figure key={figure.file}><a href={'/assets/'+figure.file} target="_blank" rel="noreferrer" aria-label={'Open full-size '+figure.title}><img src={'/assets/'+figure.file} alt={figure.title} {...imageDimensions[figure.file]} loading="lazy" decoding="async"/><span>View full size ↗</span></a><figcaption><span className="figure-kind">{String(i+1).padStart(2,'0')} / {figure.kind}</span><h5>{figure.title}</h5><p>{figure.description}</p></figcaption></figure>)}</div></section>}
  {p.id==='foldeasy' && <BoardInspector/>}
  <div className="lesson"><span>WHAT I LEARNED</span><p>{p.lesson}</p></div>
  {p.note&&<p className="source-note">{p.note}</p>}{p.credit&&<p className="source-note">{p.credit}</p>}{p.link&&<a className="inline-link" href={p.link} target="_blank" rel="noreferrer">View project documentation ↗</a>}
 </article>;
}
