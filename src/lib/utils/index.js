import {
  generatePrivateKey,
  getPublicKey,
} from "nostr-tools"

const generateKeys = () => {
	let sk = generatePrivateKey()
	let pk = getPublicKey(sk)
	let cachedKeys = localStorage.getItem('nostr-chat-widget-keypair')

	if(cachedKeys) {
		cachedKeys = JSON.parse(cachedKeys)

		sk = cachedKeys.sk
		pk = cachedKeys.pk
	}

	const keys = {
		sk: sk,
		pk: pk,
	}

	localStorage.setItem('nostr-chat-widget-keypair', JSON.stringify(keys))

	return keys
}

export default generateKeys