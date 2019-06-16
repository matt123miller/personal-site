module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: ["plugin:vue/recommended"],
    plugins: ["vue"],
    // add your custom rules here
    rules: {
        "parserOptions": {
            "sourceType": "module"
        },
        "extends": "eslint:recommended",
        "globals": {
            "use": true
        },
        "rules": {
            "indent": [
                "error",
                4
            ],
            "linebreak-style": [
                "error",
                "unix"
            ],
            "quotes": [
                "error",
                "single"
            ],
            "semi": [
                "warn",
                "always"
            ],
            "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
            "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

        }
    }
}
