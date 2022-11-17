import React, { useEffect, useState } from 'react';
// import { ImCog } from 'react-icons/im';
import{IoIosColorFilter} from 'react-icons/io'
import { setTheme } from '../../helper/theme';
import './styles.scss';
const colorArray = [
    {
        id: 'blue',
        bgColor: 'skyblue'
    },
    {
        id: 'yellow',
        bgColor: '#ffdd40'
    },
    {
        id: 'green',
        bgColor: "#6ac045"
    },
    {
        id: 'gray',
        bgColor: '#ccc'
    }
    
]
export const Theme = () => {
    const [theme, setCurrentTheme] = useState('blue');
    const [toggle, setToggle] = useState(false);
    const handleToggleTheme = (currentId) => {
        setCurrentTheme(currentId)
        setToggle(false)
    }
    useEffect(()=>{
        setTheme(theme)
    },[theme])
    return (
        <div className={`theme-wrapper ${toggle ? 'active' : ''}`}>
            <div className="theme-wrapper__toggle-icon">
                <IoIosColorFilter size={40} onClick={() => setToggle(!toggle)} />
            </div>
            <div className="theme-wrapper__menu">
                <h4>Choose Theme</h4>
                <ul>
                    {
                        colorArray.map((color, key) => (
                            <li onClick={() => handleToggleTheme(color.id)} key={key} style={{ background: color.bgColor }} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
