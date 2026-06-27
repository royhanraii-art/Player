'use client';

import { useSearchParams } from 'next/navigation';
import { servers } from './servers';

export default function Page() {
  const searchParams = useSearchParams();

  const server = searchParams.get('server');
  const id = searchParams.get('id') || 550;

  const type = searchParams.get('type') || "movie";
  const season = searchParams.get('season');
  const episode = searchParams.get('episode');

  

 let url = servers[server||0].url
 url = url+type+"/"+id

 if(type=='tv'){
  url = url+`${season}/${episode}`
 }

 if(servers[server||0].end){
  url= url + servers[server||0]?.end
 }
 console.log(url)
  return (
    <div className="h-[100dvh] w-full bg-black">
      <iframe
        src={url}
        className="w-full h-full border-0"
        allow="fullscreen; autoplay"
        allowFullScreen
      />
    </div>
  );
}