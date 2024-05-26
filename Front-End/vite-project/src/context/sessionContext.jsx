import { createContext, useState } from 'react';
import {SessionKey} from '../helpers/keys.js';

const SessionContext = createContext();

function SessionProvider({children}){
    const [session, setSession] = useState( JSON.parse( window.localStorage.getItem(SessionKey) ) );

    const saveSession = ( sessionData ) => {
        window.localStorage.setItem(SessionKey, JSON.stringify(sessionData));
        setSession( sessionData );
    }

    return (
        <SessionContext.Provider value={{session, saveSession}}>
            {children}
        </SessionContext.Provider>
    )
}


export {SessionProvider, SessionContext};