import React from 'react'
import Header from '../../partials/Header'
import { PageTitle } from '../../helpers/functions-general'
import Sidebar_Expanded from '../../partials/Sidebar_Expanded'
import Sidebar_Collapsed from '../../partials/Sidebar_Collapsed'
import HomeVideoCards from './HomeVideoCards'
import VIdeoCategories from './VIdeoCategories'

const Home = () => {
    PageTitle('Home - YouTube')
    const [showSideBar, setShowSideBar] = React.useState(false);
    
    return (
        <>
            <div className={`home relative`}>
                <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
                <VIdeoCategories leftOffset={`${showSideBar ? "xl:left-[240px] xl:w-[calc(100%-240px)] left-[72px] w-[calc(100%-72px)]" : "left-[72px] w-[calc(100%-72px)]"}`}/>
                <div className={`home_body relative w-full`}>

                    <div className={`mobile flex xl:hidden w-full xl:w-0`}>
                        <Sidebar_Collapsed />
                        <Sidebar_Expanded setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
						<main className={`relative top-14 left-[72px] ml-2 h-fit w-[calc(100%-72px)] ${showSideBar ? 'overflow-hidden' : 'overflow-y-visible'}`}>
                            <HomeVideoCards/>
						</main>
                    </div>
					
                    <div className={`desktop hidden xl:flex w-0 xl:w-full`}>
                        {showSideBar === false && <Sidebar_Collapsed />}
                        {showSideBar === true && <Sidebar_Expanded setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>}
                        <main className={`relative top-14 ${showSideBar ? "left-[240px] w-[calc(100%-240px)]" : "left-[72px] w-[calc(100%-72px)]"} ml-2  h-fit ${showSideBar ? 'overflow-hidden' : 'overflow-y-visible'}`}>
                            <HomeVideoCards/>
						</main>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home