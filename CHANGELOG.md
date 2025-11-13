# Changelog

All notable changes to this project will be documented in this file.

## [1.0.12] - 2025-11-13 - PRODUCTION READY ✅
### Changed
- Official production release (updated from v1.0.11)
- Uses `schemas/` folder (plural) for Framework v5+ compatibility
- Successfully tested and verified on Adapt Authoring Tool v5.53.3
- Version incremented to allow upload after v1.0.11 installation

### Confirmed Working
- ✅ Uploads successfully to Adapt Authoring Tool v5.53.3
- ✅ Component appears as "Fade Text" in available components
- ✅ All functionality verified
- ✅ Identical to v1.0.11 (only version number changed)

## [1.0.11] - 2025-11-13 - PRODUCTION READY
### Changed
- Official production release
- Uses `schemas/` folder (plural) for Framework v5+ compatibility
- Successfully tested and verified on Adapt Authoring Tool v5.53.3

### Fixed
- Corrected version number in bower.json/package.json (was incorrectly 1.0.9 in v1.0.10 test)

## [1.0.10] - 2025-11-13 - TESTING RELEASE
### Added
- Multiple test versions with different schema folder configurations

### Issues
- v1.0.10-schemas-plural.zip had incorrect version number inside (1.0.9 instead of 1.0.10)

## [1.0.9] - 2025-11-13
### Changed
- Version increment for plugin reinstall testing
- Uses `schema/` folder (singular)

## [1.0.8] - 2025-11-13
### Changed
- Repository cleanup and organization
- Confirmed working with no schema folder (only properties.schema)

## [1.0.7] - 2025-11-13
### Changed
- Incremented version for main branch after merge

## [1.0.6] - 2025-11-13
### Fixed
- Changed targetAttribute from _component to _fadetext
- First version confirmed to upload successfully to Adapt Authoring Tool v5.53.3

## [1.0.5] - 2025-11-13
### Fixed
- Removed invalid `"required": true` from schema property definition

## [1.0.4] - 2025-11-13
### Added
- Added schema/ directory with component.schema.json

## [1.0.0] - 2025-11-13
### Added
- Initial release of Fade Text component
- Scroll-based text fade animation
- Customizable trigger point and colors
- Accessibility support
