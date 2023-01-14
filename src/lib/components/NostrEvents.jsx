import { useEffect } from 'react'
import { useNostrEvents } from "nostr-react"

import NostrEvent from './NostrEvent'

const NostrEvents = ({ authors, keys, recipientPk }) => {
	const { events } = useNostrEvents({
	    filter: {
	    	kinds: [4],
		   	authors: authors,
		   	"#p": authors,
	    },
	})

	useEffect(() => {
		setTimeout(() => {
			const element = document.querySelector('.messages-content');
		    element.scrollTop = element.scrollHeight;
		}, 100)
	}, [events])

	return (
		<div className="messages-content">
			{events.sort((a, b) => a.created_at - b.created_at).map((message) => {
				return (
					<NostrEvent
						key={message.id}
						recipientPk={recipientPk}
						keys={keys}
						message={message} />
				)
			})}
		</div>

	)
}

export default NostrEvents