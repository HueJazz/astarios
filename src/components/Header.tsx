import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { Menu } from '.././utils/constants'
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {

    const path = useLocation().pathname;
    const [scrollPosition, setScrollPosition] = useState<number>(window.scrollY);
    const [hoveredItem, setHoveredItem] = useState<any>(null);
    const menuTrigger:number = 50;

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        console.log(path)

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div className={scrollPosition >= menuTrigger ? 'duration-200 fixed z-20 w-full bg-neutral-900 bg-opacity-90 text-white' : 'duration-200 fixed z-10 w-full bg-neutral-800 bg-opacity-0 text-white'}>
            <div className={scrollPosition >= menuTrigger ? 'duration-200 flex flex-row justify-between items-center max-w-custom mx-auto px-6 py-4' : 'duration-200 flex flex-row justify-between items-center max-w-custom mx-auto px-6 py-8'}>
                <div className="basis-1/12 min-w-fit cursor-pointer">
                    {path !== '/' ? (
                        <NavLink to='/'>
                            <img src="https://astarios.com/wp-content/uploads/2020/05/logo.svg" className="mr-8 custom-md-width" alt="astarios" />
                        </NavLink>
                    ) : (
                        <Link to="banner" spy={true} smooth={true} offset={-88} duration={750} key="banner" className="cursor-pointer py-4">
                            <img src="https://astarios.com/wp-content/uploads/2020/05/logo.svg" className="mr-8 custom-md-width" alt="astarios" />
                        </Link>
                    )}
                </div>
                <div className="basis-6/12">
                    <ul className="flex justify-between items-center gap-6">
                        {Menu.map((item, index) => (
                                <li className="whitespace-nowrap" onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)}>
                                    {!item.more ? ( 
                                        path !== '/' ? (
                                            <NavLink to="/" key={item.link} className="cursor-pointer py-4">
                                                {item.name}
                                            </NavLink>
                                        ) : (
                                            <Link to={item.link} spy={true} smooth={true} offset={-88} duration={750} key={item.link} className="cursor-pointer py-4">
                                                {item.name}
                                            </Link>)
                                    ) : (
                                        <div className="group relative">
                                            {path !== '/' ? (
                                                <NavLink to="/" key={item.link} className="flex items-center py-4 cursor-pointer">
                                                    {item.name} <img alt="Arrow" className="brightness-75 max-h-5 max-w-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbklEQVR4nO2PQQqAIBBFa9FZ25QFXSR3HTZ6IVlINFA24GYeiIv5/jdWlWEYZQEajYz0sAfWcL/IdDmCkYMNcA9zF2eBIUdQA3MiuUqANilfQvazQJKgVX6T+ERylvvf5cJPdDYXJFM8uuWGUZYd/E6/69UyskUAAAAASUVORK5CYII=" />
                                                </NavLink>
                                            ) : (
                                                <Link to={item.link} spy={true} smooth={true} offset={-88} duration={750} key={item.link} className="flex items-center py-4 cursor-pointer">
                                                    {item.name} <img alt="Arrow" className="brightness-75 max-h-5 max-w-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbklEQVR4nO2PQQqAIBBFa9FZ25QFXSR3HTZ6IVlINFA24GYeiIv5/jdWlWEYZQEajYz0sAfWcL/IdDmCkYMNcA9zF2eBIUdQA3MiuUqANilfQvazQJKgVX6T+ERylvvf5cJPdDYXJFM8uuWGUZYd/E6/69UyskUAAAAASUVORK5CYII=" />
                                                </Link>)}
                                            {hoveredItem === index && (
                                                <ul className="absolute text-neutral-700 bg-white rounded-2xl p-2 left-1/2 -translate-x-1/2 shadow-xl animate-fade-in" onMouseEnter={() => setHoveredItem(index)}>
                                                    {item.more?.map((subitem, subindex) => (
                                                        <li className = "p-2 px-2 hover:text-sky-500 cursor-pointer duration-200" key={subindex}>{subitem}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </li>
                        ))}
                    </ul>
                </div>
                <div className="basis-3/12 flex items-center justify-end gap-4 ml-8">
                    <div className="cursor-pointer">
                        En
                    </div>
                    {path !== '/' ? (
                        <NavLink to="/" key="contact" className="flex items-center duration-300 border-solid border-2 border-white hover:bg-slate-50 hover:text-black cursor-pointer custom-px h-12 min-h-full whitespace-nowrap">
                            <div className="flex items-center cursor-pointer">
                                Contact us
                            </div>
                        </NavLink>
                    ) : (
                        <Link to="contact" spy={true} smooth={true} duration={750} key="contact" className="flex items-center duration-300 border-solid border-2 border-white hover:bg-slate-50 hover:text-black cursor-pointer custom-px h-12 min-h-full whitespace-nowrap">
                            <div className="flex items-center cursor-pointer">
                                Contact us
                            </div>
                        </Link>)}
                </div>
            </div>
        </div>
    );
}

export default Header