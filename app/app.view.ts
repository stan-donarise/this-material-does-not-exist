namespace $.$$ {

	export class $optimade_tmdne_app extends $.$optimade_tmdne_app {

		@ $mol_mem
		json() {
			return this.$.$mol_fetch.json( `https://optimade-gnome.odbx.science/v1/structures?page_limit=1&page_offset=${this.number()}` ) as any
		}

		@ $mol_mem
		name() {
			return this.json()?.data[0]?.attributes?.chemical_formula_reduced ?? ''
		}

		@ $mol_action
		update() {
			this.number( random_int( 1, 384937 ) )
		}
		
	}

	function random_int( min: number, max: number ) {
		return Math.floor( Math.random() * ( max - min + 1 ) ) + min
	}
	
}
