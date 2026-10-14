import re,json
books=[(3176,"The Innocents Abroad","Mark Twain"),(119,"A Tramp Abroad","Mark Twain"),(650,"Pictures from Italy","Charles Dickens"),(534,"An Inland Voyage","Robert Louis Stevenson"),(535,"Travels with a Donkey in the Cévennes","Robert Louis Stevenson")]
out={"books":[],"passages":[]}
for gid,title,author in books:
    t=open(f"raw/{gid}.txt",encoding="utf-8-sig").read().replace("\r","")
    s=re.search(r"\*\*\* ?START OF.*?\*\*\*",t); e=re.search(r"\*\*\* ?END OF.*?\*\*\*",t)
    t=t[s.end():e.start()]
    paras=[re.sub(r"\s+"," ",p).strip() for p in re.split(r"\n\s*\n",t)]
    paras=[p for p in paras if p and "gutenberg" not in p.lower()]
    bi=len(out["books"]); out["books"].append({"title":title,"author":author,"gutenberg":gid})
    ch="Opening"; started=False
    for p in paras:
        if re.match(r"^(CHAPTER|Chapter)\s+[IVXLCDM\d]+\b",p) or (len(p)<60 and p.isupper() and re.search(r"[A-Z]{3}",p) and started):
            ch=(re.sub(r"^CHAPTER","Chapter",p) if p.upper().startswith("CHAPTER") else (p.title() if p.isupper() else p)); continue
        if len(p)<40: continue
        started=True
        out["passages"].append([bi,ch,p])
json.dump(out,open("book.json","w"),ensure_ascii=False,separators=(",",":"))
print(len(out["passages"]))
