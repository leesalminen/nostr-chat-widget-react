import { useState, useEffect } from 'react'

import { nip04 } from "nostr-tools"

const NostrEvent = ({message, keys, recipientPk}) => {
	const [plaintext, setPlaintext] = useState('');

	useEffect(() => {
	   	const getPlaintext = async () => {
	   		try {
	       		const plaintext = await nip04.decrypt(keys.sk, recipientPk, message.content)
	       		setPlaintext(plaintext)
	      	} catch (e) {
	      		return
	      	}
	   	}
	   	getPlaintext()
	}, [])

	if(!plaintext.length) {
		return (<></>)
	}

	return (
		<div key={message.id} className={message.pubkey == keys.pk ? 'message message-personal' : 'message'}>
			{plaintext}
		</div>
	)
}

export default NostrEvent