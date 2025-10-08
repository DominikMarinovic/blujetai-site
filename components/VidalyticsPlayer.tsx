"use client"

import { useEffect } from "react"

type VidalyticsPlayerProps = {
  embedId: string
  scriptUrl: string
  aspectRatio?: string
}

export function VidalyticsPlayer({ embedId, scriptUrl, aspectRatio = "56.25%" }: VidalyticsPlayerProps) {
  useEffect(() => {
    if (!embedId || !scriptUrl) return

    const snippet = `(function (v, i, d, a, l, y, t, c, s) {
    y='_' + d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
})(window, document, 'Vidalytics', '${embedId}', '${scriptUrl}');`

    try {
      // eslint-disable-next-line no-new-func
      const run = new Function(snippet)
      run()
    } catch (error) {
      console.error("Failed to load Vidalytics player", error)
    }
  }, [embedId, scriptUrl])

  return (
    <div id={embedId} style={{ width: "100%", position: "relative", paddingTop: aspectRatio }} />
  )
}
