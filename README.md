# nostr-chat-widget-react

A react component that provides a live-chat widget over nostr. Check out a live demo of this in-action at [https://leesalminen.com](https://leesalminen.com)

# Getting Started

```
npm i nostr-chat-widget-react
```

```
import NostrChatWidget from 'nostr-chat-widget-react'

<NostrChatWidget
    recipientPk={'32_BYTE_HEX_PUBLIC_KEY_FOR_NOSTR'}
    relayUrls={['wss://no.str.cr', 'wss://relay.damus.io', 'wss://nostr.fly.dev', 'wss://nostr.robotechy.com']} 
/>
```

*Note:* You can change the `relayUrls` to any relay(s) you'd like.
