import fs from "fs"
import path from "path"
import YAML from "yaml"

/**
 * Utility function to load and parse a YAML file
 * @param filePath - The path to the YAML file
 * @returns Parsed YAML content or null in case of an error
 */
function loadYaml(filePath: string): any | null {
    try {
        const content = fs.readFileSync(path.resolve(filePath), "utf8")
        return YAML.parse(content)
    } catch (error) {
        console.error(
            `Error reading or parsing YAML file at ${filePath}:`,
            error
        )
        throw new Error(`Error reading or parsing YAML file at ${filePath}:`)
    }
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@scalar/nuxt"],
    nitro: {
        experimental: {
            openAPI: true,
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    css: ["~/styles/css/main.css"],

    scalar: {
        darkMode: false,
        // theme: "default",
        hideDownloadButton: false,
        metaData: {
            title: "API Documentation by Scalar",
        },
        searchHotKey: "k",
        showSidebar: true,

        configurations: [
            {
                spec: {
                    content: loadYaml("./public/platform.yml"),
                },
                pathRouting: {
                    basePath: "/",
                },
            },
            {
                spec: {
                    content: loadYaml("./public/internal.yml"),
                },
                pathRouting: {
                    basePath: "/internal",
                },
            },
            {
                spec: {
                    content: loadYaml("./public/scheduler.yml"),
                },
                pathRouting: {
                    basePath: "/scheduler",
                },
            },
        ],
    },
})
