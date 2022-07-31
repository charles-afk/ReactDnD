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
        <div className='mainTab draggable' draggable="true">twitter</div>
        <div className='mainTab draggable' draggable="true">facebook</div>
        <div className='mainTab draggable' draggable="true">youtube</div>
        <div className='mainTab draggable' draggable="true">linkedin</div>
    </Fragment>;

    const extraTabsJsx = <Fragment>
        <div className='extraTab draggable' draggable="true">instagram</div>
        <div className='extraTab draggable' draggable="true">snapchat</div>
        <div className='extraTab draggable' draggable="true">pinterest</div>
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

    // const draggableElems = document.querySelectorAll(".draggable");
    // const droppableElem = document.querySelectorAll(".droppable");

    // draggableElems.forEach(elem => {
    //     elem.addEventListener("dragstart", dragStart); 
    // })

    // droppableElem.forEach(elem => {
    //     elem.addEventListener("dragenter", dragEnter); 
    //     elem.addEventListener("dragover", dragOver); 
    //     elem.addEventListener("dragleave", dragLeave); 
    //     elem.addEventListener("drop", drop); 
    // });

    // function dragStart(event) {
    //     event.dataTransfer.setData("text", event.target.id); 
    // }
      
    // function dragEnter(event) {
    //     if(!event.target.classList.contains("dropped")) {
    //         event.target.classList.add("droppable-hover");
    //     }
    // }
    
    // function dragOver(event) {
    //     if(!event.target.classList.contains("dropped")) {
    //         event.preventDefault(); 
    //     }
    // }
    
    // function dragLeave(event) {
    //     if(!event.target.classList.contains("dropped")) {
    //         event.target.classList.remove("droppable-hover");
    //     }
    // }
    
    // function drop(event) {
    // event.preventDefault(); 
    // event.target.classList.remove("droppable-hover");
    // const draggableElementData = event.dataTransfer.getData("text"); 
    // const droppableElementData = event.target.getAttribute("data-draggable-id");
    // const isCorrectMatching = draggableElementData === droppableElementData;
    //     if(isCorrectMatching) {
    //         const draggableElement = document.getElementById(draggableElementData);
    //         event.target.classList.add("dropped");
    //         event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
    //         draggableElement.classList.add("dragged");
    //         draggableElement.setAttribute("draggable", "false");
    //         event.target.insertAdjacentHTML("afterbegin", `<div className='mainTab draggable'></div>`);
    //     }
    // }


    // const dragStart = (e) => {
    //     e.dataTransfer.setData("text/html", e.target.id);
    // }

    // const dragOver = (e) => {
    //     // e.preventDefault();
    //     // e.dataTransfer.dropEffect = "move";
    //     if(!e.target.classList.contains("dropped")) {
    //         e.preventDefault(); // Prevent default to allow drop
    //       }
    // }

    // function dragEnter(event) {
    //     if(!event.target.classList.contains("dropped")) {
    //       event.target.classList.add("droppable-hover");
    //     }
    // }

    // function dragLeave(event) {
    //     if(!event.target.classList.contains("dropped")) {
    //       event.target.classList.remove("droppable-hover");
    //     }
    // }

    // const drop = (e) => {
    //     e.preventDefault();
    //     const data = e.dataTransfer.getData("text/html");
    //     e.target.appendChild(document.getElementById(data));
    // }

    // window.addEventListener('DOMContentLoaded', () => {
    //     const element = document.getElementsByClassName("mainTab");
    //     element.addEventListener("dragstart", dragStart);
    //   });

    const draggables = document.querySelectorAll('.draggable')
    const containers = document.querySelectorAll('.container')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging')
        })
      
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging')
        })
    })
      
    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault()
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging')
            if (afterElement == null) {
                container.appendChild(draggable)
            } else {
                container.insertBefore(draggable, afterElement)
            }
        })
    })
      
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
      
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect()
            const offset = y - box.top - box.height / 2
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child }
            } else {
                return closest
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    }

    return (
        <div className='Modal'>

            <div className='mainContainer container' id='target'>   
                {mainTabsJsx}
            </div>

            <div className="extraContainer">
                <div className='elips' onClick={()=>extraToggle(toggle)}>...</div>
                <ttp>
                    <extras className='droppable container'>
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