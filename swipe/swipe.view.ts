namespace $.$$ {
	

	export class $optimade_tmdne_swipe extends $.$optimade_tmdne_swipe {

		@ $mol_mem
		x( next?: number ): number {
			return next ?? ( this.start_x + this.pan().x )
		}

		@ $mol_mem
		left(): string {
			return this.x() + 'px'
		}

		start_x = 0
		start_time?: number
		pointerdown( next?: any ) {
			this.start_x = parseFloat( $mol_dom_context.getComputedStyle( this.Float().dom_node() ).left )
			this.start_time = (new $mol_time_moment).valueOf()

			this.pan( new $mol_vector_2d( 0, 0 ) )
			this.transition('')

			this.pointer_holding( true )
		}

		pointerup( next?: any ) {
			const speed = this.x() / ( (new $mol_time_moment).valueOf() - this.start_time! )

			if( (this.passed() == 'right') || speed > this.speed_threshold() ) this.swipe_to_right()
			else if( (this.passed() == 'left') || speed < ( - this.speed_threshold() ) ) this.swipe_to_left()
			else this.move_to_middle()

			this.pointer_holding( false )
		}

		move_to_middle() {
			this.transition( 'left 0.5s' )
			this.swiped_to('')
			this.x( 0 )
		}

		swipe_to_right() {
			this.transition( 'left 0.5s' )
			this.swiped_to( 'right' )
			this.x( 300 )
		}

		swipe_to_left() {
			this.transition( 'left 0.5s' )
			this.swiped_to( 'left' )
			this.x( -300 )
		}

		@ $mol_mem
		passed(): string {
			const x = this.x()

			if( x < ( - this.left_threshold() ) ) return 'left'
			if( x > this.right_threshold() ) return 'right'

			return ''
		}

	}
	
}