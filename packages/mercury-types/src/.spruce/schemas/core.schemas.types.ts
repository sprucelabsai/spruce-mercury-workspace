/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'





export declare namespace SpruceSchemas.Spruce.v2020_09_01 {

	
	export interface IEventSignature {
		
			
			'eventNameWithOptionalNamespace': string
			
			'responsePayload'?: (SpruceSchema.ISchema)| undefined | null
			
			'emitPayload'?: (SpruceSchema.ISchema)| undefined | null
			
			'listenPermissions'?: SpruceSchemas.Spruce.v2020_09_01.IPermission[]| undefined | null
			
			'emitPermissions'?: SpruceSchemas.Spruce.v2020_09_01.IPermission[]| undefined | null
	}

	export interface IEventSignatureSchema extends SpruceSchema.ISchema {
		id: 'eventSignature',
		version: 'v2020_09_01',
		namespace: 'Spruce',
		name: 'Event Signature',
		    fields: {
		            /** . */
		            'eventNameWithOptionalNamespace': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'responsePayload': {
		                type: 'raw',
		                options: {valueType: `SpruceSchema.ISchema`,}
		            },
		            /** . */
		            'emitPayload': {
		                type: 'raw',
		                options: {valueType: `SpruceSchema.ISchema`,}
		            },
		            /** . */
		            'listenPermissions': {
		                type: 'schema',
		                isArray: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_09_01.IPermissionSchema,}
		            },
		            /** . */
		            'emitPermissions': {
		                type: 'schema',
		                isArray: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_09_01.IPermissionSchema,}
		            },
		    }
	}

	export type EventSignatureEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_09_01.IEventSignatureSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_09_01 {

	
	export interface IMercuryContract {
		
			
			'eventSignatures': SpruceSchemas.Spruce.v2020_09_01.IEventSignature[]
	}

	export interface IMercuryContractSchema extends SpruceSchema.ISchema {
		id: 'mercuryContract',
		version: 'v2020_09_01',
		namespace: 'Spruce',
		name: 'Mercury Contract',
		    fields: {
		            /** . */
		            'eventSignatures': {
		                type: 'schema',
		                isRequired: true,
		                isArray: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_09_01.IEventSignatureSchema,}
		            },
		    }
	}

	export type MercuryContractEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_09_01.IMercuryContractSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_09_01 {

	
	export interface IPermission {
		
			/** Permission name. Hyphen separated name for this permission, e.g. can-unlock-doors */
			'name': string
			/** Fallback to permission contract. If the person does not have a permission set (to them or their role), I will fallback to the permission contract defined here. Note: if a new permission is added to the contract, setting this to false will mean everybody fails checking for it. */
			'fallbackToPermissionContractIfPermissionNotSet'?: boolean| undefined | null
			/** Match on. */
			'match'?: ("all" | "any")| undefined | null
			/** Clocked in. Is the person clocked in and ready to rock? */
			'clockedIn'?: boolean| undefined | null
			/** Clocked out. When someone is not working (off the clock). */
			'clockedOut'?: boolean| undefined | null
			/** On premise. Are they at work (maybe working, maybe visiting). */
			'onPrem'?: boolean| undefined | null
			/** Off premise. They aren't at the office or shop. */
			'offPrem'?: boolean| undefined | null
	}

	export interface IPermissionSchema extends SpruceSchema.ISchema {
		id: 'permission',
		version: 'v2020_09_01',
		namespace: 'Spruce',
		name: 'Permission',
		    fields: {
		            /** Permission name. Hyphen separated name for this permission, e.g. can-unlock-doors */
		            'name': {
		                label: 'Permission name',
		                type: 'text',
		                isRequired: true,
		                hint: 'Hyphen separated name for this permission, e.g. can-unlock-doors',
		                options: undefined
		            },
		            /** Fallback to permission contract. If the person does not have a permission set (to them or their role), I will fallback to the permission contract defined here. Note: if a new permission is added to the contract, setting this to false will mean everybody fails checking for it. */
		            'fallbackToPermissionContractIfPermissionNotSet': {
		                label: 'Fallback to permission contract',
		                type: 'boolean',
		                hint: 'If the person does not have a permission set (to them or their role), I will fallback to the permission contract defined here. Note: if a new permission is added to the contract, setting this to false will mean everybody fails checking for it.',
		                defaultValue: true,
		                options: undefined
		            },
		            /** Match on. */
		            'match': {
		                label: 'Match on',
		                type: 'select',
		                defaultValue: "any",
		                options: {choices: [{"label":"All","value":"all"},{"label":"Any","value":"any"}],}
		            },
		            /** Clocked in. Is the person clocked in and ready to rock? */
		            'clockedIn': {
		                label: 'Clocked in',
		                type: 'boolean',
		                hint: 'Is the person clocked in and ready to rock?',
		                options: undefined
		            },
		            /** Clocked out. When someone is not working (off the clock). */
		            'clockedOut': {
		                label: 'Clocked out',
		                type: 'boolean',
		                hint: 'When someone is not working (off the clock).',
		                options: undefined
		            },
		            /** On premise. Are they at work (maybe working, maybe visiting). */
		            'onPrem': {
		                label: 'On premise',
		                type: 'boolean',
		                hint: 'Are they at work (maybe working, maybe visiting).',
		                options: undefined
		            },
		            /** Off premise. They aren't at the office or shop. */
		            'offPrem': {
		                label: 'Off premise',
		                type: 'boolean',
		                hint: 'They aren\'t at the office or shop.',
		                options: undefined
		            },
		    }
	}

	export type PermissionEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_09_01.IPermissionSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_09_01 {

	
	export interface IPermissionContract {
		
			
			'permissions': SpruceSchemas.Spruce.v2020_09_01.IPermission[]
	}

	export interface IPermissionContractSchema extends SpruceSchema.ISchema {
		id: 'permissionContract',
		version: 'v2020_09_01',
		namespace: 'Spruce',
		name: 'Permission Contract',
		    fields: {
		            /** . */
		            'permissions': {
		                type: 'schema',
		                isRequired: true,
		                isArray: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_09_01.IPermissionSchema,}
		            },
		    }
	}

	export type PermissionContractEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_09_01.IPermissionContractSchema>

}




