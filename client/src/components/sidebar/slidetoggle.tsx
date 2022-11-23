import {Switch} from '@headlessui/react';
import { useState } from 'react';

export default function SlideToggle(){
    const [enabled, setEnabled] = useState(false)
    return(
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className = {`${enabled} ? 'bg-blue-600': 'bg-gray-200'`}
            
        >
            <span className='sr-only'></span>
            <span className = {`${enabled} ? 'bg-blue-600': 'bg-gray-200'`}></span>
        </Switch>
    )
}