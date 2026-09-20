from invenio_assets.webpack import WebpackThemeBundle

theme = WebpackThemeBundle(
    __name__,
    ".",
    default="semantic-ui",
    themes={
        "semantic-ui": dict(
            entry={
                "metadata_search": "./js/metadata/search/index.js",
                "metadata_deposit_form": "./js/metadata/forms/index.js",
            },
            dependencies={},
            devDependencies={},
            aliases={
                "@js/metadata": "./js/metadata"
            },
        )
    },
)
