/// <reference types="vitest" />

import { getViteConfig } from 'astro/config';
import type { z } from 'astro/zod';
import { vitePluginStarlightUserConfig } from '../integrations/virtual-user-config';
import { StarlightConfigSchema } from '../utils/user-config';
import type { AstroConfig } from 'astro';

export function defineVitestConfig(config: z.input<typeof StarlightConfigSchema>) {
	const root = new URL('./', import.meta.url);
	const srcDir = new URL('./src/', root);
	const build = {
		format: "directory"
	} as AstroConfig['build']
	return getViteConfig({
		plugins: [vitePluginStarlightUserConfig(StarlightConfigSchema.parse(config), { root, srcDir, build })],
	});
}

export function defineVitestConfigBuildFormatFile(config: z.input<typeof StarlightConfigSchema>) {
	const root = new URL('./', import.meta.url);
	const srcDir = new URL('./src/', root);
	const build = {
		format: "file"
	} as AstroConfig['build']
	return getViteConfig({
		plugins: [vitePluginStarlightUserConfig(StarlightConfigSchema.parse(config), { root, srcDir, build })],
	});
}
