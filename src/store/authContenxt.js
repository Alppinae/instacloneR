import {createContext, useContext} from 'react';
import { supabase } from '../supabase/instance.js';



export const AuthContext = createContext(null);

export default function useAuth () {
    const  context = useContext(AuthContext);

    if (!context) {
        throw new Error("Auth context is not in scope!");
        
    }
    return context;
}