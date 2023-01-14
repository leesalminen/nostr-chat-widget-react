import React from 'react'
import NostrChatWidget from './lib'

const App = () => {
  return (
    <NostrChatWidget
      recipientPk={'5f498ff809e02c5685e3bda193fcd7147a22e7b3971079549b0bb37643f3cacc'}
      relayUrls={['wss://no.str.cr', 'wss://relay.damus.io', 'wss://nostr.fly.dev', 'wss://nostr.robotechy.com']} />
  )
}

export default App
