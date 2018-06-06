module.exports = {
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'plugins': [
        'react'
    ],
    'rules': {
        // Best Practices group
        'jsx-quotes': [ 'error', 'prefer-single' ],

        // React plugin rules group
        'react/display-name': 0,
        'react/forbid-prop-types': 0,
        'react/no-danger': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2,
        'react/no-is-mounted': 2,
        'react/no-multi-comp': 2,
        'react/no-render-return-value': 2,
        'react/no-set-state': 0,
        'react/no-string-refs': 2,
        'react/no-unknown-property': 2,
        'react/prefer-es6-class': 2,
        'react/prefer-stateless-function': 0,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/require-extension': 0,
        'react/require-optimization': 0,
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': 0,
        'react/sort-prop-types': 2,

        // React plugin JSX-specific rule group
        'react/jsx-boolean-value': [ 'error', 'always' ],
        'react/jsx-closing-bracket-location': [
            'error',
            'after-props'
        ],
        'react/jsx-curly-spacing': [
            'error',
            'always',
            {
                'spacing': {
                    'objectLiterals': 'never'
                }
            }
        ],
        'react/jsx-equals-spacing': [ 'error', 'always' ],
        'react/jsx-filename-extension': 0,
        'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
        'react/jsx-handler-names': [
            'error',
            {
                'eventHandlerPrefix': '_on',
                'eventHandlerPropPrefix': 'on'
            }
        ],
        'react/jsx-indent': 2,
        'react/jsx-indent-props': 2,
        'react/jsx-key': 2,
        'react/jsx-max-props-per-line': 2,
        'react/jsx-no-bind': 2,
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-literals': 0,
        'react/jsx-no-target-blank': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-sort-props': 2,
        'react/jsx-tag-spacing': [
            'error',
            {
                'beforeSelfClosing': 'always'
            }
        ],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': 2,
    }
};
