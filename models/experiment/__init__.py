"""Model for experiment.

This package contains the model definition for experiment.
To change model's metadata, edit the metadata.yaml file.
To change presets, add serialization/deserialization formats
and similar operations please see the model.py file.
"""

from __future__ import annotations

from .model import experiment_model

__all__ = ( "experiment_model", )