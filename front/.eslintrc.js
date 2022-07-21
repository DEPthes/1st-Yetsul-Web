module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        // import 관련 규칙 모음

        'airbnb',
        'plugin:prettier/recommended',
        // prettier 관련 규칙 모음

        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
    },
    plugins: ['@typescript-eslint'],
    rules: {
        // 추가하고 싶은 rule을 더 추가해줍니다.
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        'prettier/prettier': 0,
        'import/extensions': 0,
        'no-use-before-define': 0,
        'no-shadow': 0,
        'react/prop-types': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'react/jsx-props-no-spreading': 'off',
        'no-console': 'off',
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
            },
        ],
    },
};
