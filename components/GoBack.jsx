import Link from "next/link";
import {} from 'react-icons'

export default function GoBack() {
    return (
        <section>
            <div className="container m-auto py-6 px-6">
                <Link
                    href="/properties"
                    className="text-blue-500 hover:text-blue-600 flex items-center"
                >
                    <i className="fas fa-arrow-left mr-2"></i> Back to Properties
                </Link>
            </div>
        </section>
    )
}