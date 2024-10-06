import React, { useRef } from 'react'
import Card from './card'
const foreground = () => {
  const ref = useRef(null);
    const data = [
        {
            desc:'lorem dsjflsd fjds fjdpfkdpmf dpfkmwdeojfpowejf dsmfp sdjfpdsj fpidsjfpdsjfoiejf ldsjfdoijfodskfjdsoifhd fdsokfujewoinc sdokmffoisdijfds mcosdij',
            filesize:'.9mb',
            close:false,
            tag:{isOpen:true,tagTitle:'Download Now',tagColor:'green'}
        },
        {
          desc:'lorem dsjflsd fjds fjdpfkdpmf dpfkmwdeojfpowejf dsmfp sdjfpdsj fpidsjfpdsjfoiejf ldsjfdoijfodskfjdsoifhd fdsokfujewoinc sdokmffoisdijfds mcosdij',
          filesize:'.6mb',
          close:true,
          tag:{isOpen:true,tagTitle:'Download Now',tagColor:'blue'}
      },
      {
        desc:'lorem dsjflsd fjds fjdpfkdpmf dpfkmwdeojfpowejf dsmfp sdjfpdsj fpidsjfpdsjfoiejf ldsjfdoijfodskfjdsoifhd fdsokfujewoinc sdokmffoisdijfds mcosdij',
        filesize:'.1mb',
        close:true,
        tag:{isOpen:true,tagTitle:'Download Now',tagColor:'yellow'}
    }
    ]
  return (

    <>
   <div ref={ref} className='forground fixed flex-wrap flex  top-0 z-[3] w-full h-full'>
    {data.map((item, index) => {
        return <Card key={index} data={item} reference = {ref} />;
    })}
</div>
  </>
  )
}

export default foreground