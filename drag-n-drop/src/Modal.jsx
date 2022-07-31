import React, {Fragment, useState} from 'react';
import './Modal.css';

const Modal = ({tabs}) => {

    const [toggle, setToggle] = useState(true);
    const [edit, setEdit] = useState(false);

    let main = {};
    let extras = {};
    for(const tabName in tabs) {
        if(tabs[tabName].extra === false) {
            main[tabName] = tabs[tabName];
        } else {
            extras[tabName] = tabs[tabName];
        }
    }
    
    const mainTabsJsx = <Fragment>
        <div className='mainTab'>twitter</div>
        <div className='mainTab'>facebook</div>
        <div className='mainTab'>youtube</div>
        <div className='mainTab'>linkedin</div>
    </Fragment>;

    const extraTabsJsx = <Fragment>
        <div className='extraTab'>instagram</div>
        <div className='extraTab'>snapchat</div>
        <div className='extraTab'>pinterest</div>
    </Fragment>;

    const editJsx = <Fragment>
        {edit ? 'Update' : 'Edit +'}
    </Fragment>

    const extraToggle = (toggle) => {
        let elems = document.getElementsByClassName('extraTab');
        if(toggle === true) {
            for (let i=0;i<elems.length;i+=1){
                elems[i].style.display = 'block';
            }
            setToggle(false)
        } else {
            for (let i=0;i<elems.length;i+=1){
                elems[i].style.display = 'none';
            }
            setToggle(true)
        }
    }

    return (
        <div className='Modal'>
            <div className='mainContainer'>   
                {mainTabsJsx}
            </div>
            <div className="extraContainer">
                <div className='elips' onClick={()=>extraToggle(toggle)}>...</div>
                <ttp>
                    <extras>
                        {extraTabsJsx}
                    </extras>
                </ttp>
            </div>
            <div className='edit' onClick={()=>setEdit(!edit)}>
                {editJsx}
            </div>
        </div>
    )
}

export default Modal