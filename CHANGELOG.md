# Changelog

All notable changes to this project will be documented in this file.

## [1.0.11] - 2025-11-13 - PRODUCTION READY ✅
### Changed
- Official production release
- Uses `schemas/` folder (plural) for Framework v5+ compatibility
- Successfully tested and verified on Adapt Authoring Tool v5.53.3
- All schema configurations confirmed working

### Fixed
- Corrected version number in bower.json/package.json (was incorrectly 1.0.9 in v1.0.10 test)

### Confirmed Working
- ✅ Uploads successfully to Adapt Authoring Tool v5.53.3
- ✅ Component appears as "Fade Text" in available components
- ✅ All functionality verified

## [1.0.10] - 2025-11-13 - TESTING RELEASE
### Added
- Multiple test versions with different schema folder configurations
- Comprehensive testing documentation

### Issues
- v1.0.10-schemas-plural.zip had incorrect version number inside (1.0.9 instead of 1.0.10)

## [1.0.9] - 2025-11-13
### Changed
- Version increment for plugin reinstall testing
- No functional changes from v1.0.8

### Confirmed
- Successfully uploads to Adapt Authoring Tool v5.53.3
- Uses `schema/` folder (singular)

## [1.0.8] - 2025-11-13
### Changed
- Repository cleanup and organization
- Moved technical documentation to docs/ folder
- Created comprehensive CHANGELOG.md
- Updated README.md version badge

### Testing
- Confirmed working with no schema folder (only properties.schema)

## [1.0.7] - 2025-11-13
### Changed
- Incremented version for main branch after merge

## [1.0.6] - 2025-11-13
### Fixed
- Changed targetAttribute from _component to _fadetext
- Ensures unique component identification in Adapt Authoring Tool
- **Status**: First version confirmed to upload successfully to Adapt Authoring Tool v5.53.3

## [1.0.5] - 2025-11-13
### Fixed
- Removed invalid `"required": true` from schema property definition
- Fixed JSON Schema validation error in component.schema.json

## [1.0.4] - 2025-11-13
### Added
- Added schema/ directory with component.schema.json
- Support for Adapt Framework v5+ schema requirements

## [1.0.3] - 2025-11-13
### Fixed
- Various bug fixes and improvements

## [1.0.2] - 2025-11-13
### Fixed
- Schema validation improvements

## [1.0.1] - 2025-11-13
### Fixed
- Initial bug fixes

## [1.0.0] - 2025-11-13
### Added
- Initial release of Fade Text component
- Scroll-based text fade animation
- Customizable trigger point
- Configurable fade colors (faded and active)
- Transition speed and timing controls
- Accessibility option to disable animations
