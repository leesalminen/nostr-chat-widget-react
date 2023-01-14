import { useState } from 'react'
import { dateToUnix, useNostr } from "nostr-react"

import {
  signEvent,
  getEventHash,
  nip04,
} from "nostr-tools"

const NostrPublish = ({keys, recipientPk}) => {
	const { publish } = useNostr();
	const [message, setMessage] = useState('')

	const sendMessage = async () => {
		let ciphertext = await nip04.encrypt(keys.sk, recipientPk, message)

		let event = {
		  kind: 4,
		  pubkey: keys.pk,
		  created_at: dateToUnix(),
		  tags: [['p', recipientPk]],
		  content: ciphertext,
		}
		event.id = getEventHash(event)
		event.sig = signEvent(event, keys.sk)

		publish(event)

		setMessage('')
	}

	const handleChange = (event) => {
    setMessage(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage()
    }
  }

	return (
		<>
			<input onChange={handleChange} onKeyDown={handleKeyDown} value={message} type="text" className="message-input" placeholder="Type message..." />
	    <button type="submit" className="message-submit" onClick={sendMessage}>Send</button>
	  </>
	)	
}

export default NostrPublish