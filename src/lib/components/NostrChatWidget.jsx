import { useState } from 'react'
import { NostrProvider} from "nostr-react"

import generateKeys from '../utils/index'

import NostrWidgetContainer from './NostrWidgetContainer'

const NostrChatWidget = ({recipientPk, relayUrls}) => {
	const [showWidget, setShowWidget] = useState(false)

	const keys = generateKeys()

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