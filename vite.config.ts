/* eslint-disable @typescript-eslint/no-unused-vars */
import solid from "solid-start/vite"
import { defineConfig } from "vite"
// @ts-expect-error no typing
import vercel from "solid-start-vercel"
// @ts-expect-error no typing
import node from "solid-start-node"

export default defineConfig(() => {
	return {
		plugins: [solid({ ssr: true })],
		ssr: {
			external: ["@prisma/client"],
		},
	}
})
