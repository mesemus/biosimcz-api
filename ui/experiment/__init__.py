from oarepo_rdm.ui.config import RDMRecordsUIResourceConfig
from oarepo_rdm.ui.resource import RDMRecordsUIResource
from oarepo_ui.utils import can_view_deposit_page
from flask_menu import current_menu
from invenio_i18n import lazy_gettext as _
from oarepo_ui.overrides import UIComponent
from oarepo_ui.overrides.components import UIComponentImportMode
from oarepo_ui.proxies import current_oarepo_ui


class ExperimentUIResourceConfig(RDMRecordsUIResourceConfig):
    template_folder = "templates"
    url_prefix = "/experiment"
    blueprint_name = "experiment_ui"
    model_name = "experiment"
    search_component = UIComponent(
        "ExperimentResultsListItem",
        "@js/experiment/search/ResultsListItem",
        UIComponentImportMode.DEFAULT
    )

    components = [
        *RDMRecordsUIResourceConfig.components,
    ]

    application_id = "experiment"


class ExperimentUIResource(RDMRecordsUIResource):
    pass

def ui_overrides(app):
    """Register UI overrides."""
    ui_resource_config = ExperimentUIResourceConfig()

    if (
        current_oarepo_ui is not None
        and ui_resource_config.model
        and ui_resource_config.model.record_json_schema
        and ui_resource_config.search_component
    ):
        current_oarepo_ui.register_result_list_item(
            ui_resource_config.model.record_json_schema, ui_resource_config.search_component
        )


def init_menu(app):
    """Initialize menu before first request."""
    ui_resource_config = ExperimentUIResourceConfig()

    with app.app_context():
        current_menu.submenu("plus.create_experiment").register(
            f"{ui_resource_config.blueprint_name}.deposit_create",
            _("New Experiment"),
            order=1,
            visible_when=can_view_deposit_page,
        )

def finalize_app(app):
    """Finalize app"""
    init_menu(app)
    ui_overrides(app)

def create_blueprint(app):
    """Register blueprint for this resource."""
    blueprint = ExperimentUIResource(ExperimentUIResourceConfig()).as_blueprint()
    return blueprint
