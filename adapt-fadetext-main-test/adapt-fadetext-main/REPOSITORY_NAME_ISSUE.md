# 🚨 CRITICAL: Repository Name Issue

## Problem Identified

**Date**: 2025-11-13  
**Status**: 🔴 **REQUIRES IMMEDIATE ACTION**

### The Issue

The GitHub repository is named `adapt-quote` but the plugin is named `adapt-fadetext` (as defined in `bower.json`). This mismatch causes the "Package does not contain a schema" error when downloading the main branch ZIP.

### Why This Happens

When users click "Download ZIP" on the GitHub repository:

1. GitHub creates a ZIP file named: `adapt-quote-main.zip`
2. Inside the ZIP, the folder is named: `adapt-quote-main/`
3. The Adapt Authoring Tool looks for a folder matching the plugin name from `bower.json`: `adapt-fadetext`
4. **Mismatch detected** → Upload fails with "Package does not contain a schema"

### Evidence

**Working Production ZIP Structure:**
```
adapt-fadetext-v1.0.12-production.zip
└── adapt-fadetext/              ✅ Matches bower.json name
    ├── bower.json               (name: "adapt-fadetext")
    ├── package.json
    ├── properties.schema
    ├── schemas/
    │   └── component.schema.json
    └── ... (other files)
```

**Failing Main Branch ZIP Structure:**
```
adapt-quote-main.zip
└── adapt-quote-main/            ❌ Does NOT match bower.json name
    ├── bower.json               (name: "adapt-fadetext")
    ├── package.json
    ├── properties.schema
    ├── schemas/
    │   └── component.schema.json
    └── ... (other files)
```

## Root Cause Analysis

This was NOT a schema folder naming issue (`schema/` vs `schemas/`). Testing proved:
- v1.0.6 with `schema/` (singular) → ✅ Worked
- v1.0.8 with no schema folder → ✅ Worked  
- v1.0.9 with `schema/` (singular) → ✅ Worked
- v1.0.11 with `schemas/` (plural) → ✅ Worked
- v1.0.12 with `schemas/` (plural) → ✅ Worked

**All schema configurations worked!** The real problem is the repository name.

## Solution

### ✅ RECOMMENDED: Rename the GitHub Repository

**Action Required**: Rename the repository from `adapt-quote` to `adapt-fadetext`

**Steps**:
1. Go to GitHub repository: https://github.com/fosterc1/adapt-quote
2. Click **Settings** tab
3. Scroll to **Repository name** section
4. Change name from `adapt-quote` to `adapt-fadetext`
5. Click **Rename**

**After renaming:**
- GitHub will redirect `adapt-quote` → `adapt-fadetext` automatically
- All existing links will continue to work
- ZIP downloads will create `adapt-fadetext-main/` folder ✅
- Plugin uploads will work directly from main branch ✅

### Alternative: Document Manual Rename Requirement

If repository cannot be renamed, users must:

1. Download `adapt-quote-main.zip` from GitHub
2. Extract the ZIP file
3. **Manually rename** the folder from `adapt-quote-main` to `adapt-fadetext`
4. Re-zip the `adapt-fadetext/` folder
5. Upload the new ZIP to Adapt Authoring Tool

**Downside**: Extra manual steps for every download, poor user experience.

## Why Production ZIPs Work

The manually created production ZIPs work because:
1. We explicitly name the folder `adapt-fadetext/` when creating them
2. The ZIP structure matches what Adapt expects
3. Folder name = bower.json name = Success! ✅

## Technical Details

### bower.json Configuration
```json
{
  "name": "adapt-fadetext",        ← Plugin name
  "version": "1.0.13",
  "component": "fadetext",
  "targetAttribute": "_fadetext"
}
```

### Current Git Remote
```
origin  https://github.com/fosterc1/adapt-quote.git
```

### After Rename (Expected)
```
origin  https://github.com/fosterc1/adapt-fadetext.git
```

## Impact Analysis

### Current Impact
- ❌ Main branch ZIP downloads fail to upload
- ❌ "Download ZIP" button on GitHub doesn't work
- ❌ Users must use GitHub Releases for working ZIPs
- ❌ Poor developer experience

### After Fix
- ✅ Main branch ZIP downloads work correctly
- ✅ "Download ZIP" button works as expected
- ✅ Consistent experience across all download methods
- ✅ Professional, polished repository

## Testing Performed

All versions tested with Adapt Authoring Tool v5.53.3:

| Version | Schema Folder | Folder Name | Result |
|---------|---------------|-------------|--------|
| v1.0.6  | `schema/`     | `adapt-fadetext/` | ✅ Success |
| v1.0.8  | None          | `adapt-fadetext/` | ✅ Success |
| v1.0.9  | `schema/`     | `adapt-fadetext/` | ✅ Success |
| v1.0.11 | `schemas/`    | `adapt-fadetext/` | ✅ Success |
| v1.0.12 | `schemas/`    | `adapt-fadetext/` | ✅ Success |
| Main    | `schemas/`    | `adapt-quote-main/` | ❌ **FAILS** |

**Conclusion**: Schema folder name doesn't matter. **Folder name matching bower.json is critical.**

## Recommended Actions

### Immediate (Required)
1. ✅ Rename GitHub repository: `adapt-quote` → `adapt-fadetext`
2. ✅ Update git remote URL locally (automatic after rename)
3. ✅ Test downloading main branch ZIP
4. ✅ Verify upload to Adapt Authoring Tool

### Documentation Updates (After Rename)
1. Update all GitHub URLs in README.md
2. Update all GitHub URLs in documentation files
3. Update badges in README.md
4. Commit and push changes

### Long-term
1. Monitor that all downloads work correctly
2. Consider archiving old production ZIPs (if repository name is in filename)
3. Update any external links or references

## Historical Context

This plugin was originally forked from `adapt-quote`, which explains why the repository name didn't match. Over time:
- The component was renamed to `adapt-fadetext`
- bower.json was updated to reflect new name
- Repository name was never updated
- This created the mismatch that causes upload failures

## Conclusion

**The schema is NOT the problem.** The folder name mismatch between the repository name (`adapt-quote`) and the plugin name (`adapt-fadetext`) is what causes the "Package does not contain a schema" error.

**Action**: Rename the GitHub repository to `adapt-fadetext` to resolve this issue permanently.

---

**Document Created**: 2025-11-13  
**Last Updated**: 2025-11-13  
**Priority**: 🔴 HIGH - Affects all main branch downloads
