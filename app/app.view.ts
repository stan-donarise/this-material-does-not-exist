namespace $.$$ {

	export class $optimade_tmdne_app extends $.$optimade_tmdne_app {

		@ $mol_mem
		json() {
			return this.$.$mol_fetch.json( `https://optimade-gnome.odbx.science/v1/structures?page_limit=1&page_offset=${this.number()}` ) as any
		}

		@ $mol_mem
		name() {
			let str = this.json()?.data[ 0 ]?.attributes?.chemical_formula_reduced
			this.reset()
			return formula_html( str )
		}

		@ $mol_action
		reset() {
			this.why('')
			this.card_reset()
		}

		@ $mol_mem
		loaded() {
			try {
				this.name()
				return true
			} catch (error) {
				if( $mol_promise_like( error ) ) return false
			}
			return false
		}

		@ $mol_action
		update() {
			this.number( random_int( 1, 384937 ) )
		}

		@ $mol_mem
		predict() {
			const params = new URLSearchParams({
				structure: JSON.stringify(this.json()),
			})
			const url = `https://labs.mpds.io/predict?${ params.toString() }`
			
			return this.$.$mol_wire_sync( this ).$.$mol_fetch.success( url, {
				method: 'post',
			} ).json() ?? {} as any
		}

		@ $mol_mem
		params(): readonly any[] {
			const keys = Object.keys( this.predict().prediction )
			return keys.map( k => this.Param( k ) )
		}

		@ $mol_mem
		param_value( id: any ): string {
			return this.predict().prediction[id].value ?? ''
		}

		@ $mol_mem
		param_mae( id: any ): string {
			return this.predict().prediction[id].mae ?? ''
		}

		@ $mol_mem
		param_name( id: any ): string {
			return this.predict().legend[id].name ?? ''
		}

		@ $mol_mem
		param_unit( id: any ): string {
			return this.predict().legend[id].gui_units ?? ''
		}

		@ $mol_mem
		param_symbol( id: any ): string {
			return this.predict().legend[id].symbol ?? ''
		}

		@ $mol_mem
		card_position(): string {
			return this.swiped_to() || this.passed() || ''
		}

		player_pointerdown( next?: any ) {
			this.rotating( true )
		}

		player_pointerup( next?: any ) {
			this.rotating( false )
		}
		
	}

	function random_int( min: number, max: number ) {
		return Math.floor( Math.random() * ( max - min + 1 ) ) + min
	}

	function formula_html( str: string ) {
		let sub = false
		let html = ''
		for( let i = 0; i < str.length; i++ ) {
			if( !isNaN( +str[ i ] ) || str[ i ] == '.' ) {
				if( !sub ) {
					html += '<sub>'
					sub = true
				}
			} else {
				if( sub ) {
					html += '</sub>'
					sub = false
				}
			}
			html += str[ i ]
		}
		if( sub ) html += '</sub>'
		return html ?? ''
	}
	
}
