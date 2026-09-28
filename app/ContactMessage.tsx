'use client';
import {useState} from 'react';
import {ArrowUpRight,X} from 'lucide-react';
import {Dialog,DialogTrigger,DialogContent,DialogTitle} from '@/components/ui/dialog';
import {profile} from './content';

export default function ContactMessage(){
 const [open,setOpen]=useState(false);
 return <Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><button type="button" className="message-card"><span className="contact-label">03 / MESSAGE</span><h2>Send a message</h2><span className="contact-detail">Write to me directly</span><ArrowUpRight/></button>
 </DialogTrigger><DialogContent className="message-dialog" showCloseButton={false} aria-describedby={undefined}>
 <div className="message-heading"><DialogTitle>Send A message !</DialogTitle><button type="button" aria-label="Close message form" onClick={()=>setOpen(false)}><X/></button></div>
 <form action={'https://formsubmit.co/'+profile.email} method="POST" target="_blank">
 <input type="hidden" name="_subject" value="New message from Sanskriti’s portfolio"/>
 <input type="hidden" name="_template" value="table"/>
 <input type="hidden" name="_next" value="https://sanskriti1110.github.io/MyPortfolio/"/>
 <input type="hidden" name="_url" value="https://sanskriti1110.github.io/MyPortfolio/"/>
 <div className="message-honey" aria-hidden="true"><label>Leave this empty<input name="_honey" tabIndex={-1} autoComplete="off"/></label></div>
 <label htmlFor="message-name">Your name<input id="message-name" name="name" autoComplete="name" required maxLength={100}/></label>
 <label htmlFor="message-email">Your email<input id="message-email" name="email" type="email" autoComplete="email" required maxLength={254}/></label>
 <label htmlFor="message-body">Message<textarea id="message-body" name="message" rows={5} required maxLength={5000}/></label>
 <button type="submit" className="message-send">Send message <ArrowUpRight size={18}/></button>
 </form></DialogContent></Dialog>;
}




