import { useEffect } from 'react'
import { useNostrEvents } from "nostr-react"

import NostrEvent from './NostrEvent'

const NostrEvents = ({ keys, recipientPk }) => {
	const {events: sentByMe} = useNostrEvents({
	    filter: {
	    	kinds: [4],
		   	authors: [keys.pk],
		   	"#p": [recipientPk],
	    },
	})

	const {events: sentToMe} = useNostrEvents({
	    filter: {
	    	kinds: [4],
		   	authors: [recipientPk],
		   	"#p": [keys.pk],
	    },
	})

	useEffect(() => {
		setTimeout(() => {
			const element = document.querySelector('.messages-content');
		    element.scrollTop = element.scrollHeight;
		}, 100)
	}, [sentByMe, sentToMe])

	return (
		<div className="messages-content">
			{[...sentByMe, ...sentToMe].sort((a, b) => a.created_at - b.created_at).map((message) => {
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