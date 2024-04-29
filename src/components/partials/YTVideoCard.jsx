import React from 'react'
import { baseImgUrl } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const YTVideoCard = ({video}) => {
  return (
    <div className='yt_video_card f-col-center'>
        <Link to={'#'} className='relative'>
            <img src={`${baseImgUrl}/${video.video_img}`} alt="" className='w-full h-auto aspect-video rounded-xl' />
            <span className='text-xs ft-sb bg-black/80 px-1.5 py-0.5 rounded-md absolute bottom-2 right-2'>{video.length}</span>
        </Link>
        <div className="video_card_info grid grid-cols-[36px_1fr] gap-3 pr-6 mt-3">
            <img src={`${baseImgUrl}/${video.channel_img}`} alt="" className='rounded-full' />
            <div className='f-col'>
                <h4 className='line-clamp-2 text-ellipsis ft-md text-wrap text-base leading-[20px] text-text_primary mb-2 pointer hover:text-white'>{video.title}</h4>
                <h5 className='line-clamp-1 text-ellipsis text-xs ft-nm leading-none text-text_secondary mb-2 pointer hover:text-text_primary'>{video.channel_name}</h5>
                <span className='line-clamp-1 text-ellipsis text-xs ft-nm leading-none text-text_secondary'>{video.views} Views • {video.uploaded}</span>
            </div>
        </div>
    </div>
  )
}

export default YTVideoCard