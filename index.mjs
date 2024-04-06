import {rollup} from "rollup"
import rollupResolvePlugin from "@rollup/plugin-node-resolve"
import rollupTerserPlugin from "@rollup/plugin-terser"
import rollupDTSPlugin from "rollup-plugin-dts"

export default {
	rollup,
	rollupResolvePlugin,
	rollupTerserPlugin,
	rollupDTSPlugin
}
