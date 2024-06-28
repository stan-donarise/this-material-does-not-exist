namespace $.$$ {
	
	$mol_style_define( $optimade_tmdne_app, {

		overflow: 'hidden',
		flex: {
			direction: 'column',
		},
		align: {
			items: 'center',
		},

		Player: {
			flex: {
				grow: 1,
			},
			width: '100%',
			opacity: 1,
			transition: 'opacity 0.15s',
			'[card_holding]': {
				'true': {
					opacity: 0.1,
				},
			},
		},

		Head_space: {
			position: 'absolute',
			top: $mol_gap.block,
			left: 0,
			right: 0,
			flex: {
				grow: 1,
			},
			pointerEvents: 'none',
		},

		Head_card: {
			pointerEvents: 'auto',
			margin: 'auto',
		},

		Head: {
			userSelect: 'none',
			justify: {
				content: 'center',
			},
		},

		Prediction: {
			userSelect: 'none',
			font: {
				size: '0.7rem',
			},
			lineHeight: '16px',
			flex: {
				grow: 0,
				wrap: 'wrap',
			},
			position: 'absolute',
			left: $mol_gap.block,
			bottom: '11rem',
			pointerEvents: 'none',
			opacity: 1,
			transition: 'opacity 0.15s',
			'[rotating]': {
				'true': {
					opacity: 0,
				},
			},
		},

		Param: {
			gap: '0.3rem',
			flex: {
				wrap: 'wrap',
			},
		},

		Param_name: {
			font: {
				weight: 700,
			},
		},

		Param_symbol_html: {
			flex: {
				direction: 'row',
			},
		},

		Param_unit: {
			flex: {
				direction: 'row',
			},
		},

		Param_mae_unit: {
			flex: {
				direction: 'row',
			},
		},

		Param_value: {
			gap: '0.25rem',
		},

		Foot: {
			width: '100%',
			overflow: 'hidden',
			position: 'absolute',
			pointerEvents: 'none',
			transition: 'opacity 0.2s',
			opacity: 1,
			bottom: 0,
			'[rotating]': {
				'true': {
					opacity: 0,
				},
			},
		},

		Swipeable: {
			pointerEvents: 'auto',
			margin: 'auto',
			// width: '100%',
			// overflow: 'hidden',
			// width: 'max-content',
			// position: 'absolute',
			// flex: {
			// 	grow: 1,
			// },
			// left: '50%',
			// transform: 'translateX(-50%)',
			// bottom: 0,
			padding: '0.5rem',
			Float: {
				margin: 'auto',
			},
		},

		Card: {
			background: {
				color: $mol_theme.back,
			},
			bottom: '-20rem',
			position: 'relative',
			transition: 'bottom 1s',
			'[loaded]': {
				'true': {
					bottom: 0,
				},
			},
			border: {
				radius: $mol_gap.round,
			},
			boxShadow: '0 0 0.5rem 0rem hsla(0,0%,0%,.125)',
		},

		Card_content: {
			flex: {
				direction: 'column',
			},
			background: {
				color: $mol_style_func.hsla( 210, 80, 50, 0.3 ),
			},
			padding: $mol_gap.block,
			border: {
				radius: $mol_gap.round,
			},
			'[card_position]': {
				'right': {
							background: {
								color: $mol_style_func.hsla( 120, 80, 50, 0.3 ),
							},
				},
				'left': {
							background: {
								color: $mol_style_func.hsla( 0, 80, 50, 0.3 ),
							},
				},
			},
		},

		Name: {
			flex: {
				direction: 'row',
			},
			padding: {
				bottom: '0.5rem',
			},
			justify: {
				content: 'center',
			},
			font: {
				weight: 700,
				size: '1.5rem',
			},
		},

		Question: {
			justify: {
				content: 'center',
			},
			padding: {
				bottom: '0.5rem',
			},
		},

		Hint_no: {
			userSelect: 'none',
			color: '#ff6666',
			position: 'absolute',
			left: '1rem',
			bottom: '5rem',
		},

		Hint_yes: {
			userSelect: 'none',
			color: $mol_theme.current,
			position: 'absolute',
			right: '1rem',
			bottom: '5rem',
		},

		Why: {
			pointerEvents: 'auto',
			maxWidth: '20rem',
		},

		Why_label: {
			gap: '0.5rem',
		},

		Why_optinal: {
			color: $mol_theme.shade,
			font: {
				style: 'italic',
			},
		},

	} )
	
}
