from invenio_assets.webpack import WebpackThemeBundle

theme = WebpackThemeBundle(
    __name__,
    "assets",
    default="semantic-ui",
    themes={
        "semantic-ui": dict(
            entry={
                "oarepo-orcha": "./js/oarepo_orcha/deposit/index.js",
            },
            dependencies={
                "@babel/runtime": "^7.9.0",
                "@tinymce/tinymce-react": "^4.3.0",
                "tinymce": "^6.7.2",
                "formik": "^2.1.0",
                "i18next": "^20.3.0",
                "i18next-browser-languagedetector": "^6.1.0",
                "luxon": "^1.23.0",
                "path": "^0.12.7",
                "prop-types": "^15.7.2",
                "react-dnd": "^11.1.0",
                "react-dnd-html5-backend": "^11.1.0",
                "react-dropzone": "^11.0.0",
                "react-i18next": "^11.11.0",
                "react-invenio-forms": "^4.0.0",
                "react-searchkit": "^3.0.0",
                "yup": "^0.32.0",
                "json-diff-kit": "^1.0.30",
                "react-json-view": "^1.21.3",
            },
            aliases={
                # "@less/invenio_app_rdm": "less/invenio_app_rdm",
                "@js/oarepo_orcha": "js/oarepo_orcha",
                # "@translations/invenio_app_rdm": "translations/invenio_app_rdm",
            }
        ),
    },
)
