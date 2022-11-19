import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export interface ModalProps{
    isOpen: boolean,
    setIsOpen: (value:boolean) => void
}

export default function TestModal(props:ModalProps){
   

   console.log(`TaskComponent: ${props.isOpen}`)

    return(
        <Dialog open={props.isOpen} onClose={()=>props.setIsOpen(props.isOpen)} className="modal_Container">
            <div className='modal_Container_Dialog_Panel'>
            <Dialog.Panel>
                <Dialog.Title>Hello World Title</Dialog.Title>
                    <Dialog.Description>
                        Hello World
                    </Dialog.Description>
                    <button onClick={()=>props.setIsOpen(!props.isOpen)}>Close</button>
            </Dialog.Panel>
            </div>
            
        </Dialog>
    )
}