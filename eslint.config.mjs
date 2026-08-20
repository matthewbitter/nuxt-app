// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(

    {

        rules:
        {

            "indent": ["error", 4],

            "vue/html-indent": ["error", 4],
            "vue/block-tag-newline": ["error", {
                singleline: "always",
                multiline: "always",
                maxEmptyLines: 1
            }],
            "vue/max-attributes-per-line": ["error", {
                singleline: 10,
                multiline: 10
            }],
            "vue/multiline-html-element-content-newline": ["error", { allowEmptyLines: true }],

            "@stylistic/brace-style": ["error", "allman", { allowSingleLine: true }],
            "@stylistic/eol-last": "off",
            "@stylistic/indent": ["error", 4],
            "@stylistic/no-multiple-empty-lines": ["error", { max: 2 }],
            "@stylistic/padded-blocks": ["error", "always"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/spaced-comment": ["error", "always", { exceptions: ["-"] }]

        }

    }

);
