    import React from 'react'
    import { IoCloudDownloadOutline } from "react-icons/io5";
    import { IoMdCloseCircleOutline } from "react-icons/io";
    import { motion } from "framer-motion"
    import { IoDocumentTextOutline } from "react-icons/io5";
    const card = ({data, reference}) => {
    return (
        <>
        <motion.div drag dragConstraints={reference} className='card mx-10 my-20 relative overflow-hidden w-60 min-h-72 max-h-72 z-0 text-white rounded-[40px] px-5 py-5 bg-zinc-900/25 '>
            <IoDocumentTextOutline /> 
            <p className=' text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='absolute footer  left-0 bottom-0  w-full h-16 py-1 mb-8'>
                    <div className=' flex items-center justify-between px-5  py-1  '>
                        <h5>{data.filesize}</h5>
                        <span className='rounded-full w-7 h-7 bg-zinc-600  flex items-center justify-center'>
                            {data.close ? <IoCloudDownloadOutline   color='#fff' />: <IoMdCloseCircleOutline />}
                       
                        </span>

                    </div>

            </div>
          
            {data.tag.isOpen ?    <div className='tag  flex justify-center items-center font-bold absolute z-0 tag h-11 w-full bg-sky-200  left-0 bottom-0 ' style={{backgroundColor:data.tag.tagColor}}>{data.tag.tagTitle}</div>:null}
          

        </motion.div> 
        </> )
    }

    export default card