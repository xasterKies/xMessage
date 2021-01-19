import React from 'react'
import "./SidebarChat.css"
import {Avatar} from '@material-ui/core'


function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidbarChat__info">
                <h3>Channel Name</h3>
                <p>last msg sent...</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SidebarChat