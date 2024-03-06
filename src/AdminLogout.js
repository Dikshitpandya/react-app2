import VerifyLogin from "./VerifyLogin";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";
export default function AdminLogout()
{
    VerifyLogin();
    navigator = useNavigate();
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    removeCookie('id'); //cookies remove from client
    navigator("/"); //redirect user on login screen
    return (<></>);
}