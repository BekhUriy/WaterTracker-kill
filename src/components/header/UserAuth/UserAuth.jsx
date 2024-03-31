import React from "react";
import { UserLogoSvg } from "../userLogoSvg/userLogoSvg";
import { SignInStyled } from "./UserAuth-style";

export const UserAuth = () => {
    return (
        <SignInStyled type="button" media>
            Sign In <UserLogoSvg/>
        </SignInStyled>
    )
}