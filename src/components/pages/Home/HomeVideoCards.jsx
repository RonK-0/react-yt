import React from 'react'
import YTVideoCard from '../../partials/YTVideoCard'
import { videos_list } from './data'

const HomeVideoCards = () => {
  return (
    <>
        <div className="homeVideoCards grid grid-cols-auto-fill gap-x-4 gap-y-10 p-6 mt-12">
            {videos_list.map((item,key) => (
                <YTVideoCard video={item} key={key}/>
            ))}
            {videos_list.map((item,key) => (
                <YTVideoCard video={item} key={key}/>
            ))}
            {videos_list.map((item,key) => (
                <YTVideoCard video={item} key={key}/>
            ))}
            {videos_list.map((item,key) => (
                <YTVideoCard video={item} key={key}/>
            ))}
            {videos_list.map((item,key) => (
                <YTVideoCard video={item} key={key}/>
            ))}

            {/* RANDOM SORT OF VIDEOS BUT BROKEN AS IT REFRESHES THE OTHER ON ANY BUTTON CLICK */}
            {/* {videos_list.sort(() => Math.random() - 0.5).map((item,key) => ( <YTVideoCard video={item} key={key}/> ))} */}
        </div>
    </>
  )
}

export default HomeVideoCards