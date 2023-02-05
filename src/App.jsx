import React from 'react'
import NostrChatWidget from './lib'

const defaultRelayUrls = [
  'wss://no.str.cr',
  'wss://paid.no.str.cr',
  'wss://nostr.fly.dev',
  'wss://relay.snort.social',
  'wss://relay.realsearch.cc',
  'wss://relay.nostrgraph.net',
  'wss://relay.minds.com/nostr/v1/ws',
  'wss://nos.lol',
  'wss://relay.current.fyi',
  'wss://puravida.nostr.land',
  'wss://nostr.milou.lol',
  'wss://eden.nostr.land',
  'wss://relay.damus.io',
  'wss://nostr.oxtr.dev',
]


const App = () => {
  return (
    <NostrChatWidget
      recipientPk={'5f498ff809e02c5685e3bda193fcd7147a22e7b3971079549b0bb37643f3cacc'}
      defaultRelayUrls={defaultRelayUrls} />
  )
}

export default App
