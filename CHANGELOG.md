# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.7] - 2025-11-13

### Changed
- Incremented version for main branch after merge
- Repository cleanup and organization

## [1.0.6] - 2025-11-13

### Fixed
- Changed `targetAttribute` from generic `_component` to specific `_fadetext`
- Fixed conflict error: "There is a plugin already installed with a target attribute of '_component'"

### Changed
- Updated to follow official Adapt component naming pattern

## [1.0.5] - 2025-11-13

### Fixed
- Simplified package.json structure to match reference repository
- Removed unnecessary fields: repository, bugs, adapt_framework objects

### Added
- Added example.json at root level (may be required by Authoring Tool)

## [1.0.4] - 2025-11-13

### Changed
- Removed ZIP file from repository
- Updated upload instructions to use GitHub download

## [1.0.3] - 2025-11-13

### Fixed
- Simplified package.json format
- Added example.json to root directory

## [1.0.2] - 2025-11-13

### Fixed
- Removed invalid `"required": true` from schema (invalid JSON Schema syntax)
- Changed license format from "GPLv3" to "GPL-3.0" (SPDX standard)
- Fixed framework version format: `>=5.5` → `^5.0.0`
- Updated homepage URL to correct repository

## [1.0.1] - 2025-11-13

### Added
- VERSION_POLICY.md documenting version increment requirements
- Comprehensive version management documentation

### Changed
- Incremented version for proper Adapt caching

## [1.0.0] - 2025-11-13

### Added
- Initial release of Fade Text component
- Scroll-based text fade functionality
- Basic configuration options
- Schema files added:
  - `schema/component.schema.json` (Framework v5+)
  - `properties.schema` (Authoring Tool compatibility)
- Example files and templates

### Features
- Progressive text reveal on scroll
- Configurable trigger point
- Customizable colors (faded and active)
- Adjustable transition speed and timing
- Accessibility support with disable animation option
- Full WCAG 2.1 AA compliance
- Responsive design
- Right-to-left (RTL) language support

## Key Learnings

### Schema Requirements
- Adapt Framework v5+ requires `schema/component.schema.json` (JSON Schema Draft-07)
- Adapt Authoring Tool requires `properties.schema` (JSON Schema Draft-04)
- Both files needed for full compatibility

### targetAttribute
- Must be unique and specific to component
- Pattern: `_{component-name}`
- Cannot be generic like `_component`

### Version Management
- Version must increment on EVERY push
- Adapt Framework caches by version number
- Version must match in both bower.json and package.json

### Plugin Packaging
- Clean ZIP with only plugin files (no documentation)
- Must contain folder with files inside
- GitHub "Download ZIP" includes too many files

---

[1.0.7]: https://github.com/fosterc1/adapt-quote/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/fosterc1/adapt-quote/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/fosterc1/adapt-quote/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/fosterc1/adapt-quote/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/fosterc1/adapt-quote/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/fosterc1/adapt-quote/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/fosterc1/adapt-quote/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/fosterc1/adapt-quote/releases/tag/v1.0.0
