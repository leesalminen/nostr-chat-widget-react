import { useState, useEffect } from 'react'
import { NostrProvider} from "nostr-react"
import { relayInit } from "nostr-tools"

import generateKeys from '../utils/index'

import NostrWidgetContainer from './NostrWidgetContainer'

const NostrChatWidget = ({recipientPk, defaultRelayUrls}) => {
	const [showWidget, setShowWidget] = useState(false)

	const keys = generateKeys()
	const [mostRecentKind3, setMostRecentKind3] = useState(0)
	const [relayUrls, setRelayUrls] = useState(defaultRelayUrls)

	useEffect(() => {
	    async function getRelayList() {
	      defaultRelayUrls.forEach(async (relayUrl) => {
	        const relay = relayInit(relayUrl)
	        await relay.connect()

	        relay.on('connect', () => {
	          const sub = relay.sub([
	            {
	              authors: [recipientPk],
	              kinds: [3],
	            }
	          ])
	          sub.on('event', event => {
	            if(event.created_at > mostRecentKind3) {
	              setMostRecentKind3(event.created_at)

	              const relayList = JSON.parse(event.content)
	              const relayUrls = Object.keys(relayList)

	              if(relayUrls.length > 0) {
	                const merged = new Set([...relayUrls, ...defaultRelayUrls])
	                setRelayUrls([...merged])
	              }
	            }
	          })
	          sub.on('eose', () => {
	            sub.unsub()
	          })
	        })
	      })
	    }

	    if(recipientPk) {
	      getRelayList()
	    }
	    
	}, [recipientPk])

	return (
		<div className="NostrChatWidget">
			{!showWidget &&
				<button className="show-button" onClick={() => {setShowWidget(true)}}>
					Live Chat
				</button>
			}

			{showWidget &&
				<NostrProvider relayUrls={relayUrls}>
					<NostrWidgetContainer
						keys={keys}
						recipientPk={recipientPk}
						setShowWidget={setShowWidget} />
				</NostrProvider>
			}
		</div>
	)
}

export default NostrChatWidget