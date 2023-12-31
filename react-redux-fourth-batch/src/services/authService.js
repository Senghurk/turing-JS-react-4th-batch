//import { useAppSelector, useAppDispatch } from '../app/hooks';
//import {selectAuth} from "../features/auth/authSlice";

import {useSelector} from "react-redux";
import {selectAuth} from "../features/auth/authSlice";

/*export default function useAuth()
{
    let authUser = useAppSelector(selectAuth);
    console.log("Use Auth user",authUser);
    return authUser;
}*/
export function useAuthentication()
{
    let authUser = useSelector(selectAuth);
    return authUser;
}