/* ===== Moteur Word et évaluations sommatives ===== */
/* ===== MQ_DOCX : génération de fichiers Word (.docx) et d'images PNG, sans bibliothèque ===== */
(function(G){
  'use strict';
  /* ---------- ZIP (sans compression) ---------- */
  var CT=(function(){ var t=[],c,n,k; for(n=0;n<256;n++){ c=n; for(k=0;k<8;k++) c=(c&1)?(0xEDB88320^(c>>>1)):(c>>>1); t[n]=c>>>0; } return t; })();
  function crc32(u8){ var c=0xFFFFFFFF; for(var i=0;i<u8.length;i++) c=CT[(c^u8[i])&0xFF]^(c>>>8); return (c^0xFFFFFFFF)>>>0; }
  function u16(a,v){ a.push(v&255,(v>>>8)&255); } function u32(a,v){ a.push(v&255,(v>>>8)&255,(v>>>16)&255,(v>>>24)&255); }
  function utf8(s){ return new TextEncoder().encode(s); }
  function zip(files){
    var out=[], central=[], offset=0, DT=((2026-1980)<<9)|(10<<5)|1;
    files.forEach(function(f){
      var name=utf8(f.name), data=(typeof f.data==='string')?utf8(f.data):f.data, crc=crc32(data), h=[];
      u32(h,0x04034b50); u16(h,20); u16(h,0x0800); u16(h,0); u16(h,0); u16(h,DT); u32(h,crc); u32(h,data.length); u32(h,data.length); u16(h,name.length); u16(h,0);
      out.push(new Uint8Array(h),name,data);
      var c=[]; u32(c,0x02014b50); u16(c,20); u16(c,20); u16(c,0x0800); u16(c,0); u16(c,0); u16(c,DT); u32(c,crc); u32(c,data.length); u32(c,data.length); u16(c,name.length); u16(c,0); u16(c,0); u16(c,0); u16(c,0); u32(c,0); u32(c,offset);
      central.push(new Uint8Array(c),name);
      offset+=h.length+name.length+data.length;
    });
    var csize=central.reduce(function(s,x){ return s+x.length; },0), e=[];
    u32(e,0x06054b50); u16(e,0); u16(e,0); u16(e,files.length); u16(e,files.length); u32(e,csize); u32(e,offset); u16(e,0);
    var all=out.concat(central,[new Uint8Array(e)]), total=all.reduce(function(s,x){ return s+x.length; },0), res=new Uint8Array(total), p=0;
    all.forEach(function(x){ res.set(x,p); p+=x.length; }); return res;
  }

  /* ---------- PNG ---------- */
  function adler32(u8){ var a=1,b=0; for(var i=0;i<u8.length;i++){ a=(a+u8[i])%65521; b=(b+a)%65521; } return ((b<<16)|a)>>>0; }
  function zlibStored(raw){
    var out=[0x78,0x01], pos=0; var n=raw.length;
    if(n===0){ out.push(1,0,0,255,255); }
    while(pos<n){ var len=Math.min(65535,n-pos), last=(pos+len>=n)?1:0; out.push(last,len&255,len>>>8,(~len)&255,((~len)>>>8)&255); for(var i=0;i<len;i++) out.push(raw[pos+i]); pos+=len; }
    var ad=adler32(raw); out.push((ad>>>24)&255,(ad>>>16)&255,(ad>>>8)&255,ad&255); return new Uint8Array(out);
  }
  function deflate(raw){
    if(typeof CompressionStream==='function'){
      try{ var cs=new CompressionStream('deflate'), w=cs.writable.getWriter(); w.write(raw); w.close();
        return new Response(cs.readable).arrayBuffer().then(function(b){ return new Uint8Array(b); }); }catch(e){}
    }
    return Promise.resolve(zlibStored(raw));
  }
  function chunk(type,data){ var a=[]; u32a(a,data.length); var t=utf8(type); var body=new Uint8Array(t.length+data.length); body.set(t,0); body.set(data,t.length);
    var c=crc32(body), r=new Uint8Array(12+data.length), dv=new DataView(r.buffer); dv.setUint32(0,data.length); r.set(body,4); dv.setUint32(8+data.length,c); return r; }
  function u32a(a,v){ a.push((v>>>24)&255,(v>>>16)&255,(v>>>8)&255,v&255); }
  function png(w,h,rgb){ // rgb : Uint8Array w*h*3
    var raw=new Uint8Array((w*3+1)*h); for(var y=0;y<h;y++){ raw[y*(w*3+1)]=0; raw.set(rgb.subarray(y*w*3,(y+1)*w*3),y*(w*3+1)+1); }
    return deflate(raw).then(function(z){
      var ih=new Uint8Array(13), dv=new DataView(ih.buffer); dv.setUint32(0,w); dv.setUint32(4,h); ih[8]=8; ih[9]=2; ih[10]=0; ih[11]=0; ih[12]=0;
      var parts=[new Uint8Array([137,80,78,71,13,10,26,10]),chunk('IHDR',ih),chunk('IDAT',z),chunk('IEND',new Uint8Array(0))], n=parts.reduce(function(s,x){ return s+x.length; },0), r=new Uint8Array(n), p=0;
      parts.forEach(function(x){ r.set(x,p); p+=x.length; }); return r; });
  }

  /* ---------- Rastérisation de figures (traits vectoriels, anticrénelage 2x) ---------- */
  var GLY={A:[[[0,0],[2,6],[4,0]],[[.8,2],[3.2,2]]],B:[[[0,0],[0,6],[2.6,6],[3.6,5.4],[3.6,4],[2.6,3.2],[0,3.2]],[[2.6,3.2],[3.8,2.6],[3.8,.8],[2.8,0],[0,0]]],
   C:[[[4,5],[3,6],[1,6],[0,5],[0,1],[1,0],[3,0],[4,1]]],D:[[[0,0],[0,6],[2.4,6],[4,4.6],[4,1.4],[2.4,0],[0,0]]],E:[[[4,6],[0,6],[0,0],[4,0]],[[0,3],[3,3]]],F:[[[4,6],[0,6],[0,0]],[[0,3],[3,3]]],
   G:[[[4,5],[3,6],[1,6],[0,5],[0,1],[1,0],[3,0],[4,1],[4,3],[2.2,3]]],H:[[[0,0],[0,6]],[[4,0],[4,6]],[[0,3],[4,3]]],I:[[[1,0],[3,0]],[[1,6],[3,6]],[[2,0],[2,6]]],
   J:[[[4,6],[4,1],[3,0],[1,0],[0,1]]],K:[[[0,0],[0,6]],[[4,6],[0,2.5]],[[1.3,3.6],[4,0]]],L:[[[0,6],[0,0],[4,0]]],M:[[[0,0],[0,6],[2,2.5],[4,6],[4,0]]],N:[[[0,0],[0,6],[4,0],[4,6]]],
   O:[[[1,0],[0,1],[0,5],[1,6],[3,6],[4,5],[4,1],[3,0],[1,0]]],P:[[[0,0],[0,6],[3,6],[4,5],[4,3.8],[3,2.8],[0,2.8]]],Q:[[[1,0],[0,1],[0,5],[1,6],[3,6],[4,5],[4,1],[3,0],[1,0]],[[2.6,1.6],[4,0]]],
   R:[[[0,0],[0,6],[3,6],[4,5],[4,3.8],[3,2.8],[0,2.8]],[[2,2.8],[4,0]]],S:[[[4,5],[3,6],[1,6],[0,5],[0,4],[1,3.1],[3,2.9],[4,2],[4,1],[3,0],[1,0],[0,1]]],T:[[[0,6],[4,6]],[[2,6],[2,0]]],
   U:[[[0,6],[0,1],[1,0],[3,0],[4,1],[4,6]]],V:[[[0,6],[2,0],[4,6]]],W:[[[0,6],[1,0],[2,4],[3,0],[4,6]]],X:[[[0,6],[4,0]],[[4,6],[0,0]]],Y:[[[0,6],[2,3],[4,6]],[[2,3],[2,0]]],Z:[[[0,6],[4,6],[0,0],[4,0]]],
   '0':[[[1,0],[0,1],[0,5],[1,6],[3,6],[4,5],[4,1],[3,0],[1,0]]],'1':[[[1,5],[2,6],[2,0]],[[1,0],[3,0]]],'2':[[[0,5],[1,6],[3,6],[4,5],[4,4],[0,0],[4,0]]],
   '3':[[[0,5],[1,6],[3,6],[4,5],[4,4],[3,3.2],[1.6,3.2]],[[3,3.2],[4,2.4],[4,1],[3,0],[1,0],[0,1]]],'4':[[[3,0],[3,6],[0,2],[4,2]]],'5':[[[4,6],[0,6],[0,3.2],[3,3.2],[4,2.4],[4,1],[3,0],[1,0],[0,1]]],
   '6':[[[4,5],[3,6],[1,6],[0,5],[0,1],[1,0],[3,0],[4,1],[4,2.2],[3,3.2],[0,3.2]]],'7':[[[0,6],[4,6],[1.6,0]]],'8':[[[1,3.2],[0,4.2],[0,5],[1,6],[3,6],[4,5],[4,4.2],[3,3.2],[1,3.2],[0,2.2],[0,1],[1,0],[3,0],[4,1],[4,2.2],[3,3.2]]],
   '9':[[[0,1],[1,0],[3,0],[4,1],[4,5],[3,6],[1,6],[0,5],[0,3.8],[1,2.8],[4,2.8]]],'.':[[[1.7,0],[2.3,0],[2.3,.6],[1.7,.6],[1.7,0]]],',':[[[2,.6],[1.5,-.9]]],'=':[[[.4,2.2],[3.6,2.2]],[[.4,3.8],[3.6,3.8]]],
   '-':[[[.6,3],[3.4,3]]],'+':[[[.6,3],[3.4,3]],[[2,1.4],[2,4.6]]],'/':[[[0,0],[4,6]]],'\u00b0':[[[1.4,5],[1.4,6],[2.6,6],[2.6,5],[1.4,5]]],
   'm':[[[0,0],[0,4]],[[0,3.2],[.9,4],[1.9,3.2],[1.9,0]],[[1.9,3.2],[2.8,4],[3.8,3.2],[3.8,0]]],'c':[[[3.6,3.4],[2.6,4],[1,4],[0,3],[0,1],[1,0],[2.6,0],[3.6,.6]]],'x':[[[0,4],[4,0]],[[4,4],[0,0]]]};
  function Raster(w,h){ this.w=w; this.h=h; this.S=2; this.W=w*2; this.H=h*2; this.px=new Uint8Array(this.W*this.H*3).fill(255); }
  Raster.prototype.set=function(x,y,c){ if(x<0||y<0||x>=this.W||y>=this.H) return; var i=(y*this.W+x)*3; this.px[i]=c[0]; this.px[i+1]=c[1]; this.px[i+2]=c[2]; };
  Raster.prototype.line=function(x1,y1,x2,y2,wd,c){
    var S=this.S; x1*=S;y1*=S;x2*=S;y2*=S; wd*=S; var r=wd/2, minx=Math.floor(Math.min(x1,x2)-r-1), maxx=Math.ceil(Math.max(x1,x2)+r+1), miny=Math.floor(Math.min(y1,y2)-r-1), maxy=Math.ceil(Math.max(y1,y2)+r+1);
    var dx=x2-x1, dy=y2-y1, L2=dx*dx+dy*dy;
    for(var y=miny;y<=maxy;y++) for(var x=minx;x<=maxx;x++){
      var t=L2?((x-x1)*dx+(y-y1)*dy)/L2:0; t=Math.max(0,Math.min(1,t)); var px=x1+t*dx, py=y1+t*dy, d=Math.sqrt((x-px)*(x-px)+(y-py)*(y-py)); if(d<=r) this.set(x,y,c); }
  };
  Raster.prototype.poly=function(pts,c){ var S=this.S, P=pts.map(function(p){ return [p[0]*S,p[1]*S]; }), miny=Math.floor(Math.min.apply(null,P.map(function(p){return p[1];}))), maxy=Math.ceil(Math.max.apply(null,P.map(function(p){return p[1];})));
    for(var y=miny;y<=maxy;y++){ var xs=[]; for(var i=0;i<P.length;i++){ var a=P[i], b=P[(i+1)%P.length]; if((a[1]<=y&&b[1]>y)||(b[1]<=y&&a[1]>y)) xs.push(a[0]+(y-a[1])*(b[0]-a[0])/(b[1]-a[1])); }
      xs.sort(function(p,q){return p-q;}); for(var k=0;k+1<xs.length;k+=2) for(var x=Math.ceil(xs[k]);x<=Math.floor(xs[k+1]);x++) this.set(x,y,c); } };
  Raster.prototype.dot=function(x,y,r,c){ this.line(x,y,x,y,r*2,c); };
  Raster.prototype.text=function(str,x,y,size,c,anchor){ // y = ligne de base ; size = hauteur des capitales
    var sc=size/6, adv=function(ch){ return ch==='m'?4.6:(ch===' '?2.4:(ch==='.'||ch===','?2.6:(ch==='I'?4.2:4.9))); }, total=0, i;
    for(i=0;i<str.length;i++) total+=adv(str[i]); total*=sc; var x0=anchor==='middle'?x-total/2:(anchor==='end'?x-total:x), wd=Math.max(1.2,size*0.14);
    for(i=0;i<str.length;i++){ var g=GLY[str[i]]||GLY[str[i].toUpperCase()]; if(g) g.forEach(function(pl){ for(var j=0;j+1<pl.length;j++) this.line(x0+pl[j][0]*sc,y-pl[j][1]*sc,x0+pl[j+1][0]*sc,y-pl[j+1][1]*sc,wd,c); },this); x0+=adv(str[i])*sc; }
  };
  Raster.prototype.toPNG=function(){ var w=this.w,h=this.h,S=this.S,out=new Uint8Array(w*h*3);
    for(var y=0;y<h;y++) for(var x=0;x<w;x++) for(var k=0;k<3;k++){ var s=0; for(var dy=0;dy<S;dy++) for(var dx=0;dx<S;dx++) s+=this.px[((y*S+dy)*this.W+(x*S+dx))*3+k]; out[(y*w+x)*3+k]=Math.round(s/(S*S)); }
    return png(w,h,out); };

  /* ---------- Word (WordprocessingML) ---------- */
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function rPr(o){ o=o||{}; var x=''; if(o.font) x+='<w:rFonts w:ascii="'+o.font+'" w:hAnsi="'+o.font+'" w:cs="'+o.font+'" w:eastAsia="'+o.font+'"/>'; if(o.b) x+='<w:b/>'; if(o.i) x+='<w:i/>'; if(o.color) x+='<w:color w:val="'+o.color+'"/>'; if(o.sz) x+='<w:sz w:val="'+o.sz+'"/><w:szCs w:val="'+o.sz+'"/>'; if(o.u) x+='<w:u w:val="single"/>'; if(o.sup) x+='<w:vertAlign w:val="superscript"/>'; return x?'<w:rPr>'+x+'</w:rPr>':''; }
  function run(t,o){ return '<w:r>'+rPr(o)+'<w:t xml:space="preserve">'+esc(t)+'</w:t></w:r>'; }
  function br(){ return '<w:r><w:br/></w:r>'; } function tab(){ return '<w:r><w:tab/></w:r>'; }
  function vec(name,o){ o=o||{}; return run(name+'\u20d7',{sz:o.sz,b:o.b,color:o.color}); }
  function rich(text,o){ // texte avec jetons →AB (vecteurs)
    var out='', re=/\u2192([A-Za-z0-9'][A-Za-z0-9']{0,3})/g, last=0, m; text=String(text);
    while((m=re.exec(text))){ if(m.index>last) out+=run(text.slice(last,m.index),o); out+=vec(m[1],o); last=re.lastIndex; }
    if(last<text.length) out+=run(text.slice(last),o); return out; }
  function para(content,p){ p=p||{}; var x=''; if(p.keepNext) x+='<w:keepNext/>'; if(p.keepLines) x+='<w:keepLines/>'; if(p.pageBreakBefore) x+='<w:pageBreakBefore/>';
    if(p.border) x+='<w:pBdr>'+['top','left','bottom','right'].filter(function(k){ return p.border[k]; }).map(function(k){ var b=p.border[k]; return '<w:'+k+' w:val="single" w:sz="'+(b.sz||6)+'" w:space="'+(b.space||1)+'" w:color="'+(b.color||'000000')+'"/>'; }).join('')+'</w:pBdr>';
    if(p.shade) x+='<w:shd w:val="clear" w:color="auto" w:fill="'+p.shade+'"/>';
    if(p.tabs) x+='<w:tabs>'+p.tabs.map(function(t){ return '<w:tab w:val="'+t.type+'" '+(t.leader?'w:leader="'+t.leader+'" ':'')+'w:pos="'+t.pos+'"/>'; }).join('')+'</w:tabs>';
    if(p.before!=null||p.after!=null||p.line) x+='<w:spacing'+(p.before!=null?' w:before="'+p.before+'"':'')+(p.after!=null?' w:after="'+p.after+'"':'')+(p.line?' w:line="'+p.line+'" w:lineRule="auto"':'')+'/>';
    if(p.ind) x+='<w:ind'+(p.ind.left!=null?' w:left="'+p.ind.left+'"':'')+(p.ind.hanging!=null?' w:hanging="'+p.ind.hanging+'"':'')+(p.ind.first!=null?' w:firstLine="'+p.ind.first+'"':'')+'/>';
    if(p.align) x+='<w:jc w:val="'+p.align+'"/>';
    return '<w:p>'+(x?'<w:pPr>'+x+'</w:pPr>':'')+(Array.isArray(content)?content.join(''):(content||''))+'</w:p>'; }
  function cell(content,o){ o=o||{}; var tc='<w:tcW w:w="'+o.w+'" w:type="dxa"/>'; if(o.span) tc+='<w:gridSpan w:val="'+o.span+'"/>';
    if(o.borders){ tc+='<w:tcBorders>'+['top','left','bottom','right'].map(function(k){ var b=o.borders[k]; return b===null?'<w:'+k+' w:val="nil"/>':(b?'<w:'+k+' w:val="single" w:sz="'+(b.sz||4)+'" w:space="0" w:color="'+(b.color||'000000')+'"/>':''); }).join('')+'</w:tcBorders>'; }
    if(o.shade) tc+='<w:shd w:val="clear" w:color="auto" w:fill="'+o.shade+'"/>';
    if(o.mar) tc+='<w:tcMar><w:top w:w="'+o.mar[0]+'" w:type="dxa"/><w:left w:w="'+o.mar[1]+'" w:type="dxa"/><w:bottom w:w="'+o.mar[2]+'" w:type="dxa"/><w:right w:w="'+o.mar[3]+'" w:type="dxa"/></w:tcMar>';
    if(o.valign) tc+='<w:vAlign w:val="'+o.valign+'"/>';
    var body=Array.isArray(content)?content.join(''):content; if(!body||body.indexOf('<w:p>')!==0&&body.indexOf('<w:p ')!==0) body=(body||'')+(body&&/<\/w:p>\s*$/.test(body)?'':para(''));
    return '<w:tc><w:tcPr>'+tc+'</w:tcPr>'+body+'</w:tc>'; }
  function table(rows,widths,o){ o=o||{}; var total=widths.reduce(function(a,b){ return a+b; },0), bd=o.borders===false?'':'<w:tblBorders>'+['top','left','bottom','right','insideH','insideV'].map(function(k){ var b=(o.borders&&o.borders[k]!==undefined)?o.borders[k]:{sz:4,color:'8896B0'}; return b===null?'<w:'+k+' w:val="nil"/>':'<w:'+k+' w:val="single" w:sz="'+b.sz+'" w:space="0" w:color="'+b.color+'"/>'; }).join('')+'</w:tblBorders>';
    var pr='<w:tblPr><w:tblW w:w="'+total+'" w:type="dxa"/>'+(o.center?'<w:jc w:val="center"/>':'')+bd+'<w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="'+(o.padV!=null?o.padV:40)+'" w:type="dxa"/><w:left w:w="'+(o.padH!=null?o.padH:90)+'" w:type="dxa"/><w:bottom w:w="'+(o.padV!=null?o.padV:40)+'" w:type="dxa"/><w:right w:w="'+(o.padH!=null?o.padH:90)+'" w:type="dxa"/></w:tblCellMar></w:tblPr>';
    var grid='<w:tblGrid>'+widths.map(function(w){ return '<w:gridCol w:w="'+w+'"/>'; }).join('')+'</w:tblGrid>';
    return '<w:tbl>'+pr+grid+rows.map(function(r){ return '<w:tr>'+(r.header?'<w:trPr><w:cantSplit/><w:tblHeader/></w:trPr>':(r.cantSplit?'<w:trPr><w:cantSplit/></w:trPr>':''))+(r.cells||r).join('')+'</w:tr>'; }).join('')+'</w:tbl>'; }
  var EMU=360000; // 1 cm
  function image(rid,wcm,hcm,id,descr){ var cx=Math.round(wcm*EMU), cy=Math.round(hcm*EMU);
    return '<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="'+cx+'" cy="'+cy+'"/><wp:docPr id="'+id+'" name="Figure '+id+'" descr="'+esc(descr||'')+'"/><wp:cNvGraphicFramePr><a:graphicFrameLocks noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic><pic:nvPicPr><pic:cNvPr id="'+id+'" name="figure'+id+'.png"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="'+rid+'"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="'+cx+'" cy="'+cy+'"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>'; }
  var NS='xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"';
  function styles(font){ return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="'+font+'" w:hAnsi="'+font+'" w:cs="'+font+'" w:eastAsia="'+font+'"/><w:sz w:val="20"/><w:szCs w:val="20"/><w:lang w:val="fr-FR" w:eastAsia="fr-FR" w:bidi="ar-SA"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="0" w:line="252" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style><w:style w:type="table" w:default="1" w:styleId="TableNormal"><w:name w:val="Normal Table"/><w:uiPriority w:val="99"/><w:semiHidden/><w:tblPr><w:tblInd w:w="0" w:type="dxa"/><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="108" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="108" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style></w:styles>'; }
  function footerXml(text){ return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:ftr '+NS+'>'+para([run(text+'  \u00b7  Page ',{sz:15,color:'5A6675'}),'<w:fldSimple w:instr=" PAGE "><w:r><w:rPr><w:color w:val="5A6675"/><w:sz w:val="15"/><w:szCs w:val="15"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple>',run(' / ',{sz:15,color:'5A6675'}),'<w:fldSimple w:instr=" NUMPAGES "><w:r><w:rPr><w:color w:val="5A6675"/><w:sz w:val="15"/><w:szCs w:val="15"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple>'],{align:'center',border:{top:{sz:6,color:'1F3864',space:4}}})+'</w:ftr>'; }
  function headerXml(left,right){ return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:hdr '+NS+'>'+para([run(left,{b:true,sz:16,color:'1F3864'}),tab(),run(right,{sz:16,color:'5A6675'})],{tabs:[{type:'right',pos:10200}],border:{bottom:{sz:8,color:'1F3864',space:3}}})+'</w:hdr>'; }
  // opts : {title, body (xml), images:[{rid,data(Uint8Array)}], footer, headerL, headerR, font}
  function build(o){
    var font=o.font||'Arial', files=[], rels='<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/>';
    (o.images||[]).forEach(function(im){ rels+='<Relationship Id="'+im.rid+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/'+im.rid+'.png"/>'; files.push({name:'word/media/'+im.rid+'.png',data:im.data}); });
    var sect='<w:sectPr><w:headerReference w:type="default" r:id="rId3"/><w:footerReference w:type="default" r:id="rId2"/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1050" w:right="850" w:bottom="1000" w:left="850" w:header="450" w:footer="450" w:gutter="0"/></w:sectPr>';
    var doc='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document '+NS+'><w:body>'+o.body+sect+'</w:body></w:document>';
    var ct='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Default Extension="png" ContentType="image/png"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/><Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>';
    var rr='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>';
    var core='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>'+esc(o.title||'')+'</dc:title><dc:creator>MathChrono-Quiz</dc:creator><cp:lastModifiedBy>MathChrono-Quiz</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">2026-10-01T08:00:00Z</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">2026-10-01T08:00:00Z</dcterms:modified></cp:coreProperties>';
    var app='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>MathChrono-Quiz</Application></Properties>';
    files=[{name:'[Content_Types].xml',data:ct},{name:'_rels/.rels',data:rr},{name:'word/document.xml',data:doc},{name:'word/_rels/document.xml.rels',data:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'+rels+'</Relationships>'},{name:'word/styles.xml',data:styles(font)},{name:'word/footer1.xml',data:footerXml(o.footer||'')},{name:'word/header1.xml',data:headerXml(o.headerL||'',o.headerR||'')},{name:'docProps/core.xml',data:core},{name:'docProps/app.xml',data:app}].concat(files);
    return zip(files);
  }
  G.MQ_DOCX={zip:zip,crc32:crc32,png:png,Raster:Raster,esc:esc,run:run,br:br,tab:tab,vec:vec,rich:rich,para:para,cell:cell,table:table,image:image,build:build};
})(typeof globalThis!=='undefined'?globalThis:this);

