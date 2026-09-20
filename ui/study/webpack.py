from invenio_assets.webpack import WebpackThemeBundle

theme = WebpackThemeBundle(
    __name__,
    ".",
    default="semantic-ui",
    themes={
        "semantic-ui": dict(
            entry={
                "study_search": "./js/study/search/index.js",
                "study_deposit_form": "./js/study/forms/index.js",
            },
            dependencies={},
            devDependencies={},
            aliases={
                "@js/study": "./js/study"
            },
        )
    },
)
