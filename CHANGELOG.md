# Changelog

All notable changes to this project will be documented in this file.

## [1.0.15] - 2025-11-13 - LESS COMPILATION FIX ✅
### Fixed
- **CRITICAL**: Fixed LESS compilation error - removed undefined Adapt mixins
- Replaced `.respond-to-small-device()` mixins with standard media queries
- Replaced `.text-styling()` mixin with basic CSS properties
- Added fallback values for `@component-padding` and `@focus-outline` variables

### Changed
- Now uses standard CSS media queries instead of Adapt Framework mixins
- Better compatibility with different Adapt Framework versions
- Self-contained LESS with fallback variables

### Technical Details
- Mobile breakpoint: max-width 760px
- Tablet breakpoint: 761px - 1024px
- Desktop breakpoint: min-width 1025px
- Component padding fallback: 2rem
- Focus outline fallback: #4285f4

## [1.0.14] - 2025-11-13 - GITHUB RELEASE FIX ✅
### Fixed
- **CRITICAL**: Identified GitHub ZIP download issue - branch name appended to folder
- GitHub creates `adapt-fadetext-main/` but Adapt expects `adapt-fadetext/` exactly
- Created proper GitHub Release with correct folder structure
- Added prominent download instructions

### Added
- `IMPORTANT_DOWNLOAD_INSTRUCTIONS.md` - Clear guidance on downloading correctly
- Proper GitHub Release v1.0.14 with correct folder structure

### Important
- ⚠️ **DO NOT use "Download ZIP" from main branch** - it will fail!
- ✅ **ALWAYS download from Releases page** - correct structure
- GitHub's branch ZIPs always append `-main` to folder name (limitation)

### Notes
- This is a GitHub packaging limitation, not a plugin issue
- Repository rename helped but didn't solve the `-main` suffix problem
- Release ZIPs are manually packaged with correct folder names

## [1.0.13] - 2025-11-13 - PRODUCTION READY ✅
### Fixed
- Fixed repository folder structure to match production ZIPs
- Renamed `schema/` folder to `schemas/` (plural) for consistency
- Main branch now matches production release structure

### Confirmed
- ✅ Repository folder: `schemas/` (plural)
- ✅ Production ZIP: `schemas/` (plural)
- ✅ GitHub "Download ZIP" now works correctly
- ✅ Consistent across all distribution methods

### Notes
- Version incremented to allow upload after folder structure fix
- Functionally identical to v1.0.12 (only folder name changed in repo)

## [1.0.12] - 2025-11-13 - PRODUCTION READY
### Changed
- Official production release (updated from v1.0.11)
- Version incremented to allow upload after v1.0.11 installation

## [1.0.11] - 2025-11-13 - PRODUCTION READY
### Changed
- Official production release with `schemas/` folder (plural)
- Successfully tested and verified on Adapt Authoring Tool v5.53.3
