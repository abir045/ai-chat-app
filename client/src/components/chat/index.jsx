import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import Header from '../customHeader'
import StandardMessageForm from '../customMessageForms/StandardMessageForm'

const Chat = () => {

const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "testuser",
    "1234"
)

   return (

    <div style={{ flexBasis: "100%" }} >

   <MultiChatSocket {...chatProps} />
    <MultiChatWindow 
    {...chatProps} 
    renderChatHeader={(chat) => <Header chat={chat} />}
    renderMessageForm={(props)=> {
        return (
            <StandardMessageForm props ={props} activechat={chatProps.chat} />
        )
    }}
    />
    
    </div>
    
    )
}

export default Chat