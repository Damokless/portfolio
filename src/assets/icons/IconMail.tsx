import type { ReactElement } from "react";

export default function IconMail({ ...props } : {stroke : string, height: number, width: number }) : ReactElement {
    return (
        <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}>
            <title>Mail</title>
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
        </svg>
    )
}
