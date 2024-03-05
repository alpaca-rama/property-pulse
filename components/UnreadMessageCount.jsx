'use client'

import {useEffect, useState} from "react";
import {useGlobalContext} from "@/context/GlobalContext";

export default function UnreadMessageCount({session}) {
    const { unreadCount, setUnreadCount } = useGlobalContext()

    useEffect(function() {
        if (!session) return

        async function fetchUnreadMessages() {
            try {
                const res = await fetch('/api/messages/unread-count')

                if (res.status === 200) {
                    const data = await res.json()

                    setUnreadCount(data)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchUnreadMessages()
    }, [session])

    return unreadCount > 0 && (
        <span
            className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
        >
            {unreadCount}
        </span>
    )
}