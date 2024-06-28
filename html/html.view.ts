namespace $.$$ {

	export class $optimade_tmdne_html_view extends $.$optimade_tmdne_html_view {

		views( node : Node ) {
			if( node.nodeName == 'SUB' ) return [ this.Subscript( node ) ]
			if( node.nodeName == 'SUP' ) return [ this.Superscript( node ) ]
			return super.views( node )
		}

	}
}
