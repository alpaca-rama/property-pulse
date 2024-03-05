'use client'

import {FaBookmark} from "react-icons/fa"
import {useState, useEffect} from "react"
import {useSession} from "next-auth/react"
import {toast} from "react-toastify"

export default function BookmarkButton({property}) {
    const { data: session } = useSession()
    const userId = session?.user?.id

    const [isBookmarked, setIsBookmarked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(function() {
        if (!userId) {
            setIsLoading(false)

            return
        }
        async function checkBookmarkStatus() {
            try {
                const res = await fetch('/api/bookmarks/check', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        propertyId: property._id
                    }),
                })

                if (res.status === 200) {
                    const data = await res.json()
                    setIsBookmarked(data.isBookmarked)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

        checkBookmarkStatus()
    }, [property._id, userId])

    async function handleBookmarkClick() {
        if (!userId) {
            toast.error('You need to sign in to bookmark a property');
            return
        }

        try {
            const res = await fetch('/api/bookmarks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    propertyId: property._id
                }),
            });

            if (res.status === 200) {
                const data = await res.json()
                toast.success(data.message)
                setIsBookmarked(data.isBookmarked)
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    }

    if (isLoading) return <p className={'text-center'}>Loading...</p>

    return  isBookmarked ? (
        <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            onClick={handleBookmarkClick}
        >
            <FaBookmark className={'mr-2'} /> Remove Property
        </button>
    ) : (
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            onClick={handleBookmarkClick}
        >
            <FaBookmark className={'mr-2'} /> Bookmark Property
        </button>
    )
}