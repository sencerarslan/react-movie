module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
    rules: {
        'no-console': 'warn', // console.log gibi ifadeleri uyarı olarak göster
        'no-unused-vars': 'warn', // Kullanılmayan değişkenleri uyarı olarak göster

        // TypeScript ile İlgili Kural Ayarları
        '@typescript-eslint/no-explicit-any': 'off', // any tipini kullanıma izin ver
        '@typescript-eslint/explicit-module-boundary-types': 'off', // public olmayan fonksiyonlarda tip belirtme zorunluluğunu kaldır
        '@typescript-eslint/no-unused-vars': 'warn', // Kullanılmayan değişkenleri TypeScript düzeyinde uyarı olarak göster

        // Prettier ile Çakışmayı Önlemek İçin
        'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all', printWidth: 120 }],
    },
};
