import React, {useState} from 'react'

const Modal = ({tabs}) => {
    const [mainTabs, setMainTabs] = useState();

    let main = {}
    let extras = {}
    for(const tabName in tabs) {
        if(tabs[tabName].extra === false) {
            main[tabName] = tabs[tabName]
        } else {
            extras[tabName] = tabs[tabName]
        }
    }
    
    const mainTabsJsx = Object.entries(main).forEach(([key, value]) => {
        console.log(key,value)
        return <div>
            {key}
        </div>
    })

    console.log(mainTabsJsx)
    return (
        <div className='Modal'>
            {mainTabsJsx}
        </div>
    )
}

export default Modal