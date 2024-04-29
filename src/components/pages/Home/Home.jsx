import React from 'react'
import Header from '../../partials/Header'
import { PageTitle } from '../../helpers/functions-general'
import Sidebar_Expanded from '../../partials/Sidebar_Expanded'
import Sidebar_Collapsed from '../../partials/Sidebar_Collapsed'
import HomeVideoCards from './HomeVideoCards'

const Home = () => {
    PageTitle('YouTube')
    const [showSideBar, setShowSideBar] = React.useState(false);
    
    return (
        <>
            <div className={`home relative`}>
                <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
                <div className={`home_body relative w-full`}>
                    <div className={`mobile flex xl:hidden w-full xl:w-0`}>
                        <Sidebar_Collapsed />
                        <Sidebar_Expanded setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>

						<main className={`relative top-14 left-[72px] ml-2 h-fit w-[calc(100%-72px)] ${showSideBar ? 'overflow-hidden' : 'overflow-y-visible'} custom-scroll_a`}>
							{/* <div className="grid grid-cols-4">
								<div className="h-screen bg-cyan-800"></div>
								<div className="h-screen bg-pink-900"></div>
								<div className="h-screen bg-yellow-700"></div>
								<div className="h-screen bg-black"></div>
							</div> */}
                            <HomeVideoCards/>
						</main>
                    </div>
					
                    <div className={`desktop w-full hidden xl:flex ${showSideBar ? "grid-cols-[240px_1fr]" : "grid-cols-[72px_1fr]"}`}>
                        {showSideBar === false && <Sidebar_Collapsed />}
                        {showSideBar === true && <Sidebar_Expanded setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>}

                        <main className={`relative top-14 ${showSideBar ? "left-[240px] w-[calc(100%-240px)]" : "left-[72px] w-[calc(100%-72px)]"} ml-2  h-fit ${showSideBar ? 'overflow-hidden' : 'overflow-y-visible'} custom-scroll_a`}>
							{/* <div className="grid grid-cols-4">
								<div className="h-screen bg-cyan-800"></div>
								<div className="h-screen bg-pink-900"></div>
								<div className="h-screen bg-yellow-700"></div>
								<div className="h-screen bg-black"></div>
							</div> */}
                            <HomeVideoCards/>
						</main>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home