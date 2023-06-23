import Link from "next/link"
import SigninButton from "./SigninButton"

const AppBar = () => {
    return (
        <header
            className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
            <link className="
            transition-colors hover:text-blue-500"
                href={"/"}>
                Home Page
            </link>
            <link className="
            transition-colors hover:text-blue-500"
                href={"/UserPost"}>
                User Post Page
            </link>
            <SigninButton />
        </header>
    )
}