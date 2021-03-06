import AbstractSpruceError from '@sprucelabs/error'
import ErrorOptions from '#spruce/errors/options.types'

export default class SpruceError extends AbstractSpruceError<ErrorOptions> {
	public friendlyMessage(): string {
		const { options } = this
		let message

		switch (options?.code) {
			case 'INVALID_PROTOCOL':
				message = 'You must connect via the https protocol.'
				break

			case 'UNEXPECTED_PAYLOAD':
				message = `You passed a payload to "${options.eventName}" that has no emit payload defined.`
				break

			case 'INVALID_PAYLOAD':
				message = `The emit payload you passed to "${
					options.eventName
				}" is invalid${
					options.originalError ? `:\n\n${options.originalError.message}` : '.'
				}`
				break

			case 'CONNECTION_FAILED':
				message = `I couldn't connect to ${options.host}. The code I got back was ${options.statusCode}.`
				break

			case 'NOT_CONNECTED':
				message = `You cannot ${options.action} when you are not connected to the api.`
				break

			case 'TIMEOUT':
				message = `Dang it, I didn't hear back after emitting "${
					options.eventName
				}" for ${options.timeoutMs / 1000} seconds..`

				if (options.isConnected === false) {
					message += "\n\nAlso, it appears I'm not connected to the api."
				}
				break
			case 'MISSING_PARAMETERS':
				message = `Oops, you're missing some parameters: ${options.parameters.join(
					','
				)}`
				break

			case 'MISSING_TEST_CACHE_DIR':
				message =
					'You must set a test cache dir to test Mercury. Try MercuryFactory.setTestCacheDir().'
				break

			case 'UNKNOWN_ERROR':
				message = 'Oh no! An unknown error ocurred.'

				if (options.originalError) {
					message += ' Original error:\n\n'
					message += options.originalError.stack
				}

				return message

			case 'UNAUTHORIZED_ACCESS':
				message = `Not authorized! You cannot ${options.action} \`${options.fqen}\`!`
				break

			default:
				message = super.friendlyMessage()
		}

		message = options.friendlyMessage ?? message

		return message
	}
}
