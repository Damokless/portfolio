import type { ReactElement } from "react"
export default function IconCalendar({ ...props } : {stroke : string, height: number, width: number }) : ReactElement {
    return (
        <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-week"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}>
            <title>Calendar</title>
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            <path d="M7 14h.013" />
            <path d="M10.01 14h.005" />
            <path d="M13.01 14h.005" />
            <path d="M16.015 14h.005" />
            <path d="M13.015 17h.005" />
            <path d="M7.01 17h.005" />
            <path d="M10.01 17h.005" />
        </svg>
    )
}
