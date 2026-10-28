"""Regenerate the self-hosted font subsets after editing website copy.
Install: python -m pip install fonttools brotli
Usage: python tools/subset-fonts.py --sources PATH_TO_ORIGINAL_FONTS [--site PATH]
Original filenames: BricolageGrotesque.ttf and IBMPlexMono-Regular.ttf. See assets/FONT-LICENSES.txt for sources.
"""
import argparse
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--sources',required=True,type=Path)
    parser.add_argument('--site',type=Path,default=Path(__file__).resolve().parents[1])
    args=parser.parse_args()
    text=''.join((args.site/name).read_text(encoding='utf-8') for name in ['index.html','site.js'])
    text+=''.join(chr(i) for i in range(32,127))
    fonts=[('BricolageGrotesque.ttf','bricolage.woff2','XC11 Display'),
           ('IBMPlexMono-Regular.ttf','plex-mono.woff2','XC11 Mono')]
    for source,target,family in fonts:
        font=TTFont(args.sources/source)
        opts=subset.Options()
        opts.flavor='woff2'
        opts.layout_features=['*']
        sub=subset.Subsetter(options=opts)
        sub.populate(text=text)
        sub.subset(font)
        for record in font['name'].names:
            if record.nameID in [1,2,3,4,6,16,17]:
                value='Regular' if record.nameID in [2,17] else (family.replace(' ','') if record.nameID==6 else family)
                record.string=value.encode(record.getEncoding(),errors='replace')
        font.flavor='woff2'
        font.save(args.site/'assets'/target)
        print(target)
if __name__=='__main__':
    main()
