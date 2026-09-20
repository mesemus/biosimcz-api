from invenio_assets.webpack import WebpackThemeBundle

theme = WebpackThemeBundle(
    __name__,
    ".",
    default="semantic-ui",
    themes={
        "semantic-ui": dict(
            entry={
                "experiment_search": "./js/experiment/search/index.js",
                "experiment_deposit_form": "./js/experiment/forms/index.js",
            },
            dependencies={},
            devDependencies={},
            aliases={
                "@js/experiment": "./js/experiment"
            },
        )
    },
)
