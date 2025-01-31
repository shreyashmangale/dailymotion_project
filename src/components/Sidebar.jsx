import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Sidebar = ({sidebar}) => {
    return (
        <div className={`fixed inset-y-0 top-16 left-0 flex flex-col gap-8 p-8 bg-red-800 text-white w-64 transform ${
            sidebar ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:flex flex-col gap-8 transition-transform duration-300 z-50`}>
            <h1><FontAwesomeIcon className='mr-1' icon={faUser} /> Sign up</h1>
            <h1><FontAwesomeIcon className='mr-1' icon={faRightToBracket} /> Log in</h1>
            <h1><FontAwesomeIcon className='mr-1' icon={faBookmark} /> Bookmarks</h1>
        </div>
    )
}

export default Sidebar