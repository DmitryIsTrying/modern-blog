import path from "path";
import webpack, { RuleSetRule } from "webpack";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";
import { BuildPaths } from "../build/types/config";
export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    // 1. Настройка резолвинга
    config.resolve = {
        ...config.resolve,
        modules: [...(config.resolve?.modules || []), paths.src],
        extensions: [...(config.resolve?.extensions || []), ".ts", ".tsx"],
        alias: {
            ...config.resolve?.alias,
            "@": paths.src, // Добавляем алиас для удобства
        },
    };

    // 2. Правильная обработка SVG
    const svgRuleIndex = config.module.rules.findIndex((rule: RuleSetRule) => {
        if (typeof rule.test === "string") {
            return rule.test.includes("svg");
        }
        return rule.test?.toString().includes("svg");
    });

    if (svgRuleIndex > -1) {
        // Удаляем дефолтный лоадер SVG из Storybook
        config.module.rules.splice(svgRuleIndex, 1);
    }

    // 3. Добавляем свои лоадеры
    config.module.rules = [
        ...(config.module.rules || []),
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: "@svgr/webpack",
                },
            ],
        },
        buildCssLoaders(true),
    ];

    config.plugins = [
        ...(config.plugins || []),
        new webpack.DefinePlugin({
            __IS_DEV__: true,
        }),
    ];

    return config;
};
