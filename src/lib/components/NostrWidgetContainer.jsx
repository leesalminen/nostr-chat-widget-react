import { useProfile } from "nostr-react"

import NostrEvents from './NostrEvents'
import NostrPublish from './NostrPublish'

const NostrWidgetContainer = ({ keys, recipientPk, setShowWidget }) => {
	const { data: userData } = useProfile({pubkey: recipientPk});

	return (
		<section className="avenue-messenger">
		  	<div className="menu">
		   		<div className="button" onClick={() => {setShowWidget(false)}}>&#10005;</div>
		  	</div>
		  	<div className="agent-face">
		    	<div className="half">
		     		<img className="agent circle" src={userData && userData.picture ? userData.picture : ''} alt="pfp" />
		     	</div>
		  	</div>
			<div className="chat">
		  		<div className="chat-title">
		    		<h1>{userData && userData.name ? userData.name : ''}</h1>
		    		<h2>{userData && userData.about ? userData.about : ''}</h2>
		  		</div>
		  		<div className="messages">
		    		<NostrEvents
		    			keys={keys}
		    			recipientPk={recipientPk} />
		  		</div>
			  	<div className="message-box">
			    	<NostrPublish
			    		keys={keys}
			    		recipientPk={recipientPk} />
			  	</div>
			</div>
		</section>
	)
}

export default NostrWidgetContainer